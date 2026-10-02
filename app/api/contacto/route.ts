import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, correo, interes, presupuesto, mensaje, turnstileToken } = body;

    // Validación básica
    if (!nombre || !telefono || !correo) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar Turnstile
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Verificación de seguridad requerida" },
        { status: 400 }
      );
    }

    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Verificación de seguridad fallida" },
        { status: 400 }
      );
    }

    // Email a ALFRA INMOBILIARIA
    await resend.emails.send({
      from: "ALFRA INMOBILIARIA Contacto <info@alfrainmobiliaria.com>",
      to: ["info@alfrainmobiliaria.com"],
      subject: `Nueva solicitud de asesoría — ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #0a1628; margin-bottom: 24px;">Nueva solicitud de asesoría</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; width: 140px;">Nombre</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 14px; font-weight: 500;">${nombre}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">Teléfono</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 14px;">${telefono}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">Correo</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 14px;">${correo}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">Interés</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 14px;">${interes?.join(", ")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">Presupuesto</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 14px;">${presupuesto}</td>
            </tr>
            ${mensaje ? `
            <tr>
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Mensaje</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 14px;">${mensaje}</td>
            </tr>
            ` : ""}
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #f3f4f6; border-radius: 6px;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              Este mensaje fue enviado desde el formulario de contacto de alfrainmobiliaria.com
            </p>
          </div>
        </div>
      `,
    });

    // Email de confirmación al usuario
    await resend.emails.send({
      from: "ALFRA INMOBILIARIA <info@alfrainmobiliaria.com>",
      to: [correo],
      subject: "Recibimos tu solicitud — ALFRA INMOBILIARIA",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #0a1628; margin-bottom: 8px;">Hola, ${nombre}.</h2>
          <p style="color: #4b5563; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
            Recibimos tu solicitud de asesoría. Un asesor de ALFRA INMOBILIARIA te contactará 
            en las próximas horas para agendar una conversación.
          </p>
          <p style="color: #4b5563; font-size: 15px; line-height: 1.7; margin-bottom: 32px;">
            Si tienes alguna pregunta urgente, puedes escribirnos directo por WhatsApp:
          </p>
          <a href="https://wa.me/528126005642" style="display: inline-block; background: #2563eb; color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-size: 14px; font-weight: 500;">
            Escribir por WhatsApp
          </a>
          <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              ALFRA INMOBILIARIA — Asesoría Inmobiliaria · Monterrey, N.L.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
// Layout de la ruta demo.
//
// El layout raíz renderiza <Navbar /> + <main> + <Footer /> para todo el sitio.
// La demo trae su propio pie de página (bloque 12 del documento de estructura),
// así que ocultamos el footer global únicamente en esta ruta. Al promover la
// demo a producción basta con borrar este archivo.

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: "body > footer { display: none; }" }}
      />
      {children}
    </>
  );
}

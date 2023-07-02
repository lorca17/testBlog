import path from "path";
import fs from "fs";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Single from "../componentes/Single";
import Categoria from "../componentes/Categoria"


export default function Page({ params }) {
  let dataDirectorio = path.join(process.cwd(), "data");
  let ficheros = fs.readdirSync(dataDirectorio);

  let post = ficheros.filter((e) => e.includes(".md"));
  let categorias = ficheros.filter((e) => !e.includes(".md"));

  let nameFile = params.single.join("/");
  let esDirectorio = categorias.includes(nameFile);
  let esPost = post.includes(nameFile + ".md");

  // Si es categoria

  if (esDirectorio) {
    return (
      <>
        <Header />     
        <Categoria directorio={nameFile} />
        <Footer />
      </>
    );
  }

  // Si es una pagina

  return (
    <>
      <Header />
      <Single dato={nameFile} />
      <Footer />
    </>
  );
}

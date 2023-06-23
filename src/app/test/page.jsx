import path from "path";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from 'gray-matter';
import Header from '../componentes/Header'
import Featured from "../componentes/Featured";
import Main from "../componentes/main/Main";
import Footer from "../componentes/Footer";
import CurrentDomain from "../../../utils/currentUrl";


export default function test() {
  let dataDirectorio = path.join(process.cwd(), "data");
  let ficheros = fs.readdirSync(dataDirectorio);
  let Datos = fs.readFileSync(dataDirectorio + "/" + ficheros[0], "utf-8");

  let {data,content} = matter(Datos)

  return (
    <>
    <Header />
    <Featured />
    <Main />
    <Footer />
    <CurrentDomain />
   
    
     {/*  <h1>Hola</h1> */}
     {/*  <p>{ficheros[0]}</p> */}
     {/*  <Markdown>{content}</Markdown> */}
    </>
  );
}

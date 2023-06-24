import path from "path";
import fs from "fs"
import matter from "gray-matter";

export default function posts (){
  let dataDirectorio = path.join(process.cwd(), "data");
  let ficheros = fs.readdirSync(dataDirectorio);
  let data = ficheros.map((e)=> {
    let datoFichero = fs.readFileSync(dataDirectorio+'/'+e,'utf-8')
    let {data} = matter(datoFichero)
    let obj = {}
    obj.slug = e.split('.')[0]
    obj.data = data
    return obj
  })  
  return ( data  )
}
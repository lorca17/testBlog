import path from "path";
import fs from "fs"
import matter from "gray-matter";

export default function posts (slug){
  let dataDirectorio = path.join(process.cwd(), "data");
  
  let datos = ficheros.map((e)=> {
    let datoFichero = fs.readFileSync(dataDirectorio+'/'+slug,'utf-8')
    let {data,content} = matter(datoFichero)
    let obj = {}
    obj.data = data
    obj.content = content
    return obj
  })  
  return ( datos )
}
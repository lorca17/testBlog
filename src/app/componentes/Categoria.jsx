import fs from 'fs'
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Featured from './Featured';
import { redirect } from "next/navigation";

export default function Single({directorio}){
  let dataDirectorio = path.join(process.cwd(), "data");
  let ficheros = fs.readdirSync(dataDirectorio+'/'+directorio)

  let datosFicheros = ficheros.map((e)=>{
    let {content,data} = matter(fs.readFileSync(dataDirectorio+'/'+directorio+'/'+ e,'utf-8'))
    data.slug = e.split('.')[0]
    return data
  })

  
  if (existe){
   let datoFichero = fs.readFileSync(dataDirectorio+'/'+dato+'.md','utf-8')
   let {data,content} = matter(datoFichero)
    return (
      <div className="bg-gray-100">
    
   {/*  <!-- featured --> */}
    <div className="max-w-5xl mx-auto pt-10 pb-10">
        <ul className="flex flex-wrap -mx-2 overflow-hidden">
          {
            datosFicheros.map((e)=>{
              
              return (
                <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3" key={e.titulo}>
                <a href={directorio+'/'+e.slug}>
                    <div className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style={{"background-image":`url(${e.slug})`}}>
                        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                        <div className="relative z-20 text-center p-5">
                            <span className="inline-block text-white uppercase text-xs tracking-wide">{e.descripcion}</span>
                            <h2 className="text-white font-semibold font-serif text-xl my-5">{e.titulo}</h2>
                            <span className="inline-block text-xs text-white font-sans">Comfort and views</span>
                        </div>
                    </div>
                </a>
            </li>
              )
            })
          }    
        </ul>
    </div>
</div>
     )

  } else {
    redirect("/");
  }  
}
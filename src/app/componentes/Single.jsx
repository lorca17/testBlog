import fs from 'fs'
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { redirect } from "next/navigation";

export default function Single({dato}){
  let dataDirectorio = path.join(process.cwd(), "data");

  let existe = fs.existsSync(dataDirectorio+'/'+dato+'.md')

  if (existe){
    let datoFichero = fs.readFileSync(dataDirectorio+'/'+dato+'.md','utf-8')
    let {data,content} = matter(datoFichero)
    return (
      <>
      
      <main className="max-w-5xl mx-auto pb-10 ">
           <div className="flex flex-wrap overflow-hidden">
               <div className="w-full overflow-hidden ">
                   <div className="mr-2 md:mr-4 ml-2">
                       <div className="pb-10">
                          {/*  <!-- first post --> */}
                           <div>
                              {/*  <img className="w-full h-auto rounded" src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80" alt="" /> */}
                             {/*   <h2 className="text-gray-900 font-serif text-3xl my-5 font-thin"><a href="">How To Make More Travel By Doing Less</a></h2> */}
                              {/*  <span className="text-xs text-gray-800 font-thin block mb-5">By Page. December 02, 2019</span> */}
                               <div className="text-gray-900 font-thin tracking-wider leading-loose" id="entry-content">
                               <Markdown>{content}</Markdown>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </main>
   
      </>
     )

  } else {
    redirect("/");
  }  
}
import path from "path";
import fs from "fs";
export default function htmlsitemap () {
  let directorio = path.join(process.cwd(), "data");
  let files = fs.readdirSync(directorio)
  return (
    <>
    
    <h1>HTML Sitemap</h1>
    <p>
      {files.map((e)=> {
        let pagina = e.split('.')[0]
        return (
          <>
          * <a key={pagina} href={pagina}>{pagina}</a><br></br>
          </>
        )
      })}
    </p>
    
    </>
  )
}
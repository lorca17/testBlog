import matter from "gray-matter";
export default function Featured({items}){




  return (
    <div className="bg-gray-100">

    
   {/*  <!-- featured --> */}
    <div className="max-w-5xl mx-auto pt-10 pb-10">
        <ul className="flex flex-wrap -mx-2 overflow-hidden">
          {
            items.map((e)=>{
              
              return (
                <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3" key={e.data.titulo}>
                <a href={e.slug}>
                    <div className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" /* style={{"background-image":`url(${'./img/'+e.slug+'-1.webp'})`}} */>
                        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                        <div className="relative z-20 text-center p-5">
                            <span className="inline-block text-white uppercase text-xs tracking-wide">{e.data.descripcion}</span>
                            <h2 className="text-white font-semibold font-serif text-xl my-5">{e.data.titulo}</h2>
                            <span className="inline-block text-xs text-white font-sans">Leer este articulo.</span>
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
}
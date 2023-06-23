export default function Featured(){
  return (
    <div className="bg-gray-100">
   {/*  <!-- featured --> */}
    <div className="max-w-5xl mx-auto pt-10 pb-10">
        <ul className="flex flex-wrap -mx-2 overflow-hidden">
            <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
                <a href="./article-details.html">
                    <div className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style={{"background-image":'url(https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=800)'}}>
                        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                        <div className="relative z-20 text-center p-5">
                            <span className="inline-block text-white uppercase text-xs tracking-wide">Hotels</span>
                            <h2 className="text-white font-semibold font-serif text-xl my-5">Places to stay in the island on your visit</h2>
                            <span className="inline-block text-xs text-white font-sans">Comfort and views</span>
                        </div>
                    </div>
                </a>
            </li>
          
        </ul>
    </div>
</div>
  )
}
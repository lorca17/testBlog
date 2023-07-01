import Link from "next/link"
import cfg from "../../../cfg.json"
import Social from './Social'

export default function Header(){
  return (
    <header className="max-w-5xl mx-auto pt-5">
    <div className="flex flex-wrap -mx-2 overflow-hidden px-8 lg:px-2 my-2">

        <div className="px-2 w-full overflow-hidden md:w-1/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
            <Link href="/">
            
            <p className="font-bold text-2xl font-serif"> {cfg.nombreDominio}</p>
            </Link>
        </div>

        <nav className="my-2 px-2 w-full overflow-hidden md:w-3/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
            <ul>
                <li className="inline-block"><a className="block font-semibold px-3" href="/">Home</a></li>
                <li className="inline-block"><a className="block font-semibold px-3" href="/blog">Blog</a></li>
                <li className="inline-block"><a className="block font-semibold px-3" href="#">About</a></li>
            </ul>
        </nav>
      
        <div className="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 xl:w-1/3 text-center md:text-right">
           <Social />
        </div>
      
      </div>
</header>
  )
}
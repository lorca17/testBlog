import cfg from '../../../cfg.json'
import Social from './Social'
let year = new Date().getFullYear()
export default function Footer(){
  return (
    <footer className="bg-gray-100 text-center sm:text-left">
       
    <div className="max-w-5xl mx-auto pb-10 pt-10 text-gray-900">
        <ul>
            <li className="inline-block"><a className="block font-semibold px-3" href="/">Home</a></li>
            <li className="inline-block"><a className="block font-semibold px-3" href="#">Categories</a></li>
            <li className="inline-block"><a className="block font-semibold px-3" href="#">About</a></li>
        </ul>
        <div className="sm:flex px-3">
            <div className="w-full sm:w-1/2">
                <h4 className="font-bold text-2xl font-serif pt-10">{cfg.nombreDominio}</h4>
                <span className="block pt-1 text-xs tracking-wider font-light">&copy;{year} {cfg.nombreDominio}. All rights reserved.</span>
            </div>
        <Social />
        </div>
    </div>
</footer>
  )
}
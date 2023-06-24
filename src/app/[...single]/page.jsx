
import Header from '../componentes/Header';
import Footer from "../componentes/Footer";
import Single from '../componentes/single/Single';



export default function Page ({params}){

  let nameFile = params.single
  return (
    <>
    <Header />
    <Single dato={nameFile} />
    <Footer />
    </>

  )
}

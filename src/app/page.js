import Image from 'next/image'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Featured from "./componentes/Featured";
import Main from "./componentes/main/Main";
import CurrentDomain from "../../utils/currentDomain";
import posts from "../../utils/posts";

export default function Home() {
  // let {data,content} = matter(Datos)

  return (
    <>
      <Header />
      <Main />
      <Featured items={posts()} />
      <Footer />
    </>
  );
}
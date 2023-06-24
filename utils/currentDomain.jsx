"use client";

import { useEffect, useState } from "react";

export default function CurrentDomain() {
  const [domain, setDomain] = useState(""); // Creamos un useState vacio

  useEffect(() => {
    // esto sólo se ejecuta en cliente
    const domain = window.location.origin; 
    setDomain(domain);
  }, []); // dejamos las dependencias vacías para que sólo se ejecute la primera vez

  return domain;
}

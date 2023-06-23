'use client'

import { useEffect,useState } from 'react'

export default function CurrentDomain () {
  const [user, setUser] = useState('')

  useEffect(() => {
    // esto sólo se ejecuta en cliente
    const user = window.location.origin
    setUser(user)
  }, []) // dejamos las dependencias vacías para que sólo se ejecute la primera vez

  return <h1>{user}</h1>
}

/* export default function CurrentDomain(){
 let data = window.location.origin
  return (data)
}
 */
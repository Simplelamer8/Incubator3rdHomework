import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

export default function Header() {
  return (
    <div className='px-[15%] py-10 font-bold tracking-wide flex items-center justify-between'>
      <Link href={"/"}>
        <p>medium alike</p>
      </Link>
      <Link href={"/login"}>login</Link>
    </div>
  )
}

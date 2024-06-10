import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

export default function Header() {
  return (
    <Link href={"/"}>
      <div className='px-[10%] py-10 font-bold tracking-wide'>
        medium alike
      </div>
    </Link>
  )
}

import Link from 'next/link'
import React from 'react'

type Props={}

function Header({}: Props) {
  return (
    <header className="flex space-x-4 mb-2">
      <Link href="/">
        Eunyoung
      </Link>
      <div></div>
      <Link href="/about" className="bg-blue-200 rounded px-4 py-2">
        About
      </Link>
      <Link href="/project" className="bg-blue-200 rounded px-4 py-2">
        Project
      </Link>
      {/* <Link href="/skill" className="bg-blue-200 rounded px-4 py-2">
        Skill
      </Link> */}
    </header>
  )
}

export default Header
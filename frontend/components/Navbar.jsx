import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href="/addContent">Добавить контент</Link>
                <Link href="/content">Контент</Link>
                <Link href="/profile">Профиль</Link>
            </ul>
        </nav>
    )
}
export default Navbar
import React from "react";
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
const Navbar =() => {
     return (
          <>
           <nav className={styles.mainnev}>
          <ul>
           <Link href='/'><a><li>Home</li></a></Link> 
           <Link href='/menu'><a><li>Menu</li></a></Link>
            {/* <Link href='/about'><a><li>About</li></a></Link> */}
            <Link href='/component/blog'><a><li>Blog</li></a></Link>
            <Link href='/about/about'><a><li>About</li></a></Link>
            <Link href='/about/contact'><a><li>Contact</li></a></Link>
          </ul>
        </nav>

     </>
     )
}
export default Navbar;
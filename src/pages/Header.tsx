import Link from "next/link"
import style from './Header.module.css'
import Navbar from "./Navbar"

// import Login from "@/pages/Login"
// import Todo from "@/pages/Todo"


function Header() {
    
return (<header className={style.Header}>
<nav className=" flex justify-around w-full h-16 items-center">
    <Link href="/" ><span className=" ">Home</span></Link>
    <Link href="/Todo"><span className="">Todo</span></Link> 
    </nav>


</header>)

}

export default Header

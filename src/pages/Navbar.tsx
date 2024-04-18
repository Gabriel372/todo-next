import Link from "next/link"

function  Navbar() {
return (<nav className=" flex justify-around w-full">
    <Link href="/" ><span className="bg-orange-600 shadow-2xl">Home</span></Link>
    <Link href="/Todo"><span className="bg-orange-600 shadow-2xl">Todo</span></Link> 
    </nav>
    

)
    
}

export default Navbar
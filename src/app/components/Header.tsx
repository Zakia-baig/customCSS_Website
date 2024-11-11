import Link from "next/link";


export default function Header() {
    return (
        <div className="header-container">

            <ul className="header-links">
                <li >
                    <Link href="/">Home</Link>
                </li>
                <li >
                    <Link href="/about">About-us</Link>
                </li>
                <li >
                    <Link href="/contact">Contact-us</Link>
                </li>
                <li >
                    <Link href="/skills">Skills</Link>
                </li>
               
                
            </ul>
           
               
        </div>
    );
}                                          

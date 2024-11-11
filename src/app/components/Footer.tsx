import Link from "next/link";


export  function Footer () {
    return (
        <div className="footer-container">

            <ul className="footer-links">
                
                <li >
                    <Link href="/resources">Resources</Link>
                </li>
                <li >
                    <Link href="/links">Quick Links</Link>
                </li>
                <li >
                    <Link href="/media">Social Media</Link>
                </li>
                <li>
                    <Link href="/privacy">Privacy Policy</Link>
              </li>
                
            </ul>
           
               
        </div>
    );
}                                          




import "../styles/global.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function App({ Component, pageComponent }){
    const visited = useRouter()
    
    return(
      <>
      <div>
        <h1 className="salvatrisi">Salvatrisi</h1>
        <nav className="header-nav">
            <ul>
                <li>
                    <Link className={`${visited.pathname == "/" ? "active" : ""}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`${visited.pathname == "/about" ? "active" : ""}`}href="/about">About</Link>
                </li>
                <li>
                    <Link className={`${visited.pathname == "/blog" ? "active" : ""}`} href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={`${visited.pathname == "/media" ? "active" : ""}`} href="/media">Media</Link>
                </li>
            </ul>
        </nav>
      </div>
        <Component { ...pageComponent } />
        <div className="footercenter">
             <h5>I really appreciate for visiting my website</h5>
           <footer className="footer">
             <ul>
                <li>
                    <Link className="favor1" href="https://www.facebook.com/slobrain.ismaiil.7" >facebook</Link>
                    <b>Follow me on <mark>FACEBOOK</mark>  without hisitating
                        I will be glad to see more friends following me right there
                    </b>
                </li>
                <li>
                    <Link className={`${visited.pathname == "/" ? "active" : "favor2"}`} href="instagram" >instagram</Link>
                    <b>Follow me on <mark>INSTAGRAM</mark> just be in contact with me and 
                        check my posts and some of my videos 
                    </b>
                </li>
                <li>
                    <Link className={`${visited.pathname == "/" ? "active" : "favor3"}`} href="youtube" >youtube</Link>
                    <b>Follow me on <mark>YOUTUBE</mark> and subscribe for more and information,
                     hit the bell button , like and share my contents.
                    </b>
                </li>
             </ul>
           </footer>

           <div className="theOwner">
            <h1>allright reserved @ 2023</h1> <small>salvatrisi@gmail.com</small>
           </div>

        </div>

      
      </>
    )
}


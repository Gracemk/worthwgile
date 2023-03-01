import Link from "next/link"
import { useRouter } from "next/router"
export default function about(){
    const visited = useRouter()
    return(
        <div className="mediaScripture">
            <h1>Learn more about my life</h1>
            <p className="sagraph" >Self-respect demands an appreciation of your 
              identity as an individual, which in turn impacts
              your thoughts, values, emotions, commitments, and
              behaviors, says Judith Zackson, PhD, Founder and 
              Clinical Director of Zackson Psychology Group.
              This article explains the importance of respecting yourself and 
              suggests some strategies to improve your sense of self-respect.
            </p>
               <Link id="path" className={`${visited.pathname == "/" ? "active" : ""}`} href="/">home page</Link>
                <h3>Enyoy your day</h3>
                <img src="https://thumbs.dreamstime.com/b/landscape-view-path-outback-bush-australia-walking-66607462.jpg" alt="my new flower" />
        </div>
    )
}
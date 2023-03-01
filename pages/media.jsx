import Link from "next/link"

export default function Media(){
    return(
        <>
          <div className="mediaScripture">
          <iframe autoplay loop width="400" height="300" src="https://www.youtube.com/embed/Z-NxRoX5H7E" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/6YDu0-f8uYY" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/vvzhChnHWYo" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/TojOVJel8wo" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/Jcq6ncHUgFM" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/ztAcTFSHK-0" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/JCWWxrhdZPU" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="400" height="300" src="https://www.youtube.com/embed/iMhgyIy4d0A" title="MediaScripture VD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <Link id="path" href="/">home</Link>
         <Link id="path" href="/blog">back to blog</Link>
         <Link id="path" href="/about">about page</Link>


        </>
    )
}
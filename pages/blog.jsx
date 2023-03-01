import Link from "next/link"

export default function blog(){
  return(
    <div className="mediaScripture">
      <h1>Images media</h1>
      <Link id="path" href="/">home</Link>
      <div className="blogimages">
        <img src="https://img1.picmix.com/output/pic/normal/8/5/6/9/7839658_379df.gif" alt="flower" />
        <img src="https://th.bing.com/th/id/R.8cca976c3a8e916371edfc5fbb9bb63b?rik=svITO%2biPKheHdg&riu=http%3a%2f%2fwww-happydiwali.com%2fwp-content%2fuploads%2f2017%2f06%2fdiwali-animated-gif-crackers.gif&ehk=OZj5YiAEKKN0cAEtW97sTep4qVyM9mVdYxIfuBqHdcE%3d&risl=&pid=ImgRaw&r=0" alt="image1" />
        <img src="https://th.bing.com/th/id/R.13486db0e47a58d5692d95e5ddf523ec?rik=zdGAozxqAVEbhA&riu=http%3a%2f%2fbestanimations.com%2fNature%2fFlora%2fTrees%2fforest-trees-animated-gif-5.gif&ehk=7Y25Z5G4CX0k6yt%2byjS1qzas2vXoZzkLBNU4zmHWSlw%3d&risl=&pid=ImgRaw&r=0" alt="image2" />
      </div>
      <Link id="path" href="/media">media</Link>
      </div>
  )
}
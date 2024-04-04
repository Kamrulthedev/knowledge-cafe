import { useState } from "react"
import Blogs from "./Pages/Home/Blogs/Blogs"
import Bookmark from "./Pages/Home/Bookmarks/Bookmark"
import Navber from "./Pages/Navber/Navber"

function App() {
const [Bookmarks, setBookmarks] = useState([]);

  const handlerBookMarks = blogs =>{
    const newBookmarks = [...Bookmarks, blogs];
    setBookmarks(newBookmarks);

  };

  return (
    <>
      <Navber></Navber>
      <div className="divider -mt-4 ml-5 mr-5"></div>
      <div className="md:flex">
        <Blogs handlerBookMarks={handlerBookMarks}></Blogs>
        <Bookmark Bookmarks={Bookmarks}></Bookmark>
      </div>
    </>
  )
}

export default App

import { useState } from "react"
import Blogs from "./Pages/Home/Blogs/Blogs"
import Bookmark from "./Pages/Home/Bookmarks/Bookmark"
import Navber from "./Pages/Navber/Navber"

function App() {
const [Bookmarks, setBookmarks] = useState([]);

  const handlerBookMarks = blogs =>{
    console.log('Book Mark Adding soon');
  };

  return (
    <>
      <Navber></Navber>
      <div className="divider -mt-4 ml-5 mr-5"></div>
      <div className="md:flex">
        <Blogs handlerBookMarks={handlerBookMarks}></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App

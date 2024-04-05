import { useState } from "react";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Bookmark from "./Pages/Home/Bookmarks/Bookmark";
import Navber from "./Pages/Navber/Navber";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);

  const handlerBookMarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handlerReadingTime = (id,time) => {
    const newTotalReadingTime = totalReadingTime + time;
    setTotalReadingTime(newTotalReadingTime);
    //remove the onther id items
    // console.log('remove the id itme', id)
    const reminingBookmark = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(reminingBookmark);
  };

  return (
    <>
      <Navber />
      <div className="divider -mt-4 ml-5 mr-5"></div>
      <div className="md:flex">
        <Blogs handlerBookMarks={handlerBookMarks} handlerReadingTime={handlerReadingTime} />
        <Bookmark Bookmarks={bookmarks} totalReadingTime={totalReadingTime} />
      </div>
    </>
  );
}

export default App;

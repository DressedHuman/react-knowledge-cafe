import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import SpentTime from './components/SpentTime/SpentTime'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [spentTime, setSpentTime] = useState(0);

  const handleAddToRead = (time, id) => {
    handleRemoveFromBookmarks(id);
    setSpentTime(spentTime + time);
    console.log(spentTime, "added to spentTime");
  }

  const handleRemoveFromBookmarks = idx => {
    const remainingBookmarks = bookmarks.filter(blog => blog.id !== idx);
    setBookmarks(remainingBookmarks);
  }

  const handleAddToBookmarks = blog => {
    setBookmarks([...bookmarks, blog]);
  }


  return (
    <div className='mx-28'>
      <Header></Header>
      <div className='md:flex mt-7'>
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleAddToRead={handleAddToRead}
        ></Blogs>
        <div className='md:w-1/3 flex flex-col gap-6'>
          <SpentTime spentTime={spentTime}></SpentTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App

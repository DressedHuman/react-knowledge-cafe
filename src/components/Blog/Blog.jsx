import PropTypes from 'prop-types'
import {HiOutlineBookmark} from "react-icons/hi2"

const Blog = ({ blog, handleAddToBookmarks, handleAddToRead }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div key={id} className='flex flex-col gap-7'>
            <img className='rounded-xl' src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex gap-3 items-center justify-between">
                <div className='flex justify-center gap-2 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <p><small className="text-[#111] font-bold text-2xl">{author}</small></p>
                        <p><small className='text-[#11111199] font-semibold'>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <p className='text-[#11111199] text-xl'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-xl'><HiOutlineBookmark/></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-[#111]">{title}</h2>
            <p>{
                hashtags.map((tag, idx) => <span className='mr-2' key={idx}><a href="">#{tag}</a></span>)
            }</p>
            <div>
                <button className='text-left border-2 border-[#dddeee] bg-slate-300 text-blue-900 font-bold px-3 rounded-lg'
                onClick={() => handleAddToRead(blog.reading_time, blog.id)}>Mark As Read</button>
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleAddToRead: PropTypes.func.isRequired,
}

export { Blog };
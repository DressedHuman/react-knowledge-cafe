import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='p-7 bg-[#1111110d] rounded-xl'>
            <h3 className="text-2xl font-bold text-[#111]">Bookmarked Blogs:{bookmarks.length}</h3>
            <div className='flex flex-col gap-4'>
                {
                    bookmarks.map((blog, idx) => {
                        return (
                            <Bookmark
                                key={idx}
                                blog={blog}></Bookmark>
                        )
                    })
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
}

export default Bookmarks;
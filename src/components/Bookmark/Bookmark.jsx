import PropTypes from "prop-types"

const Bookmark = ({blog}) => {
    return (
        <div className="bg-white p-5 rounded-lg">
            <span className="text-lg font-semibold text-[#111]">{blog.title}</span>
        </div>
    );
};

Bookmark.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Bookmark;
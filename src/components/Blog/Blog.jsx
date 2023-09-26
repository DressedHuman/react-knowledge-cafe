const Blog = ({blog}) => {
    const {id, title, cover, author, author_img} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <h2 className="text-2xl">{title}</h2>
            <p><small className="text-[#dddeee]">{author}</small></p>

        </div>
    );
};

export {Blog};
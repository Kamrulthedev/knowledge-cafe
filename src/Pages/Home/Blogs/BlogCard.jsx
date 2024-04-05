
import PropTypes from 'prop-types';
import { LuBookmark } from "react-icons/lu";


const BlogCard = ({ Blog, handlerBookMarks, handlerReadingTime }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = Blog;
    

    return (
        <div>
            <div
                className="relative flex max-w-[32rem] ml-32 flex-col overflow-hidden bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                        src={cover}
                        alt="ui/ux review check" />
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center">
                        <div className="w-12 h-12 avatar">
                            <img className=" rounded-full" src={author_img}/>
                        </div>
                      <div className="ml-3">
                      <p className=" font-bold">Mr.{author}</p>
                      <p>{posted_date}</p>
                      </div>
                    </div>
                      
                    <p className="block items-center font-sans antialiased text-gray-500 font-semibold  leading-relaxed ">
                     {reading_time} min raed
                    <button onClick={()=>handlerBookMarks(Blog)} className="ml-3 text-sky-500"><LuBookmark></LuBookmark> </button>
                    </p>
                </div>
                <div className="ml-8">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h4>
                    <p>#{hashtags}</p>
                  <button onClick={()=> handlerReadingTime(id,reading_time)} className="underline p-3 text-blue-600">Mark as read</button>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    Blog: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.string.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    handlerBookMarks: PropTypes.func.isRequired
};

export default BlogCard;
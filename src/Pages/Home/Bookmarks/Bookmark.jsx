import PropTypes from 'prop-types';


const Bookmark = ({ Bookmarks,totalReadingTime }) => {


    return (
        <div className="md:w-1/3 md:mr-36 ml-32 md:ml-0">
            <div className="bg-purple-200 p-4 rounded-lg border-2 border-blue-800 mb-5">
                <h2 className="text-xl font-bold text-sky-500">Spent time on read : {totalReadingTime}  min</h2>
            </div>
            <div className=" bg-slate-400 h-full text-black">
                <h3 className="p-3 font-bold text-2xl"> Bookmarked Blogs: {Bookmarks.length}</h3>
                {
                    Bookmarks.map(Bookmark => <div key={Bookmark.id}>

                        <div className=" text-center p-4">
                            <h3 className="text-xl font-semibold p-6 bg-slate-300 border-2 rounded-xl mb-4">{Bookmark.title}</h3>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmarks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
            // Add more PropTypes as needed for other properties
        })
    ).isRequired
};

export default Bookmark;
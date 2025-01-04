import React from 'react'
import { useParams } from 'react-router-dom'
import commentsIcon from '../Images/gui_comments_icon_157181.png'
import { cardsData } from '../Pages/Blogs'
import './BlogDetails.css'

const commentsData =
    [
        {
            id: 1,
            author: "Sarah",
            text: "I would love a theme for businesses that make things by hand. I make wired jewelry with gemstones and also knit. No one really has that and there are tons of us out there who are forced to go to codevz because there are no suitable themes. Also, Themeforest does not have many themes at all geared for handmade wire/fiber artists.",
            date: "June 1, 2024 at 7:59 am"
        },
        {
            id: 2,
            author: "David",
            text: "Best support ever. Quick response and always a solution to my problem or an answer to my specific needs and wishes! And apart from that, a wonderful theme with lots of options and possibilities.",
            date: "June 1, 2024 at 7:59 am"
        }, {
            id: 3,
            author: "Nicolas",
            text: "Professional company company publishing and continually updating an extremely useful theme. I have purchased this theme for at least 10 of my clients, and it is easy to make each site look completely different. The one time I ran into a problem, the support team was there for me with specific instructions for solving the problem.",
            date: "June 1, 2024 at 8:00 am"
        }
    ]

const BlogDetails = () => {
    const { id } = useParams();
    const blog = cardsData.find(blog => blog.id === parseInt(id))

    if (!blog) {
        return <p>Blog not found</p>
    }
    return (
        <div className='BlogDetails'>
            <div className="blogContent" key={blog.id}>
                <img src={blog.img} alt={blog.category} />
                <div className="blogInfo">
                    <h2>{blog.title}</h2>
                    <p>{blog.text}</p>
                    <div className="autherInfo">
                        <h3>{blog.author}</h3>
                        <h3>{blog.date}</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="comments">
                <div className="CommentsUP">
                    <img src={commentsIcon} alt="comment icon" />
                    <p>3 Comments</p>
                </div>
                {commentsData.map(comment => (
                    <div className="commentsCard" key={comment.id}>
                        <div className="authorContent">
                            <h4>{comment.author} <span>says:</span></h4>
                            <h5 className='date'>{comment.date}</h5>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
                <div className="reply">
                    <h3>Leave your reply</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <label>Comment</label>
                    <textarea placeholder='Enter Your Comment'></textarea>
                    <div className="info">
                        <div className="labelContainer">
                            <label>Name</label>
                            <label>Email</label>
                        </div>
                        <div className="inputContainer">
                            <input type="text"  placeholder='Name'/>
                            <input type="email" placeholder='Email'/>
                        </div>
                    </div>
                    <button className='post'>Post a comment</button>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails

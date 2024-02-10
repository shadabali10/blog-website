import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://media.istockphoto.com/id/1431748790/photo/search-engine-optimization-concept.jpg?s=2048x2048&w=is&k=20&c=W-dwnmv3QJJl7Q-VIRpnQpLli2rDNw5tFsoOlMpznF0="
                alt=""
            />
            <div className="postInfo">
                <div className="postcats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem, ipsum dolor sit amet consectetur
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores cumque cupiditate quod quibusdam perferendis,
                molestiae laborum sed dolores explicabo amet, fugit voluptate!
                Aliquid repellat vero, eligendi vel quia eveniet explicabo.
            </p>
            <Link to="/post/:postId">
                <button className="viewMoreButton">View More</button>
            </Link>
        </div>
    );
};

export default Post;

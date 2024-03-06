import React from "react";
import Comments from "./Comments";
import "./PostOverview.css";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../Context/PostContext";
import { Button } from "@mui/material";
function PostOverview() {
  const { id } = useParams();
  const { posts } = usePosts();
  const finalPost = posts.find((item) => item.id === id);
  console.log(finalPost);
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <div>
      <div>
        <div className="conatiner">
          <Button
            style={{ position: "absolute", top: "5%", left: "5%" }}
            variant="contained"
            onClick={handleBack}
          >
            Back
          </Button>
          <div>
            <p className="post-title">{finalPost.title}</p>
            <div className="post-info">
              <img className="user-image" src={finalPost.image} alt="user" />
              <p>Written by {finalPost.createdBy}</p>
              <p>created At : {finalPost.date}</p>
            </div>
          </div>
          <div>
            <img className="post-image" src={finalPost.image} alt="user" />
          </div>
          <p>{finalPost.description}</p>
        </div>
        <Comments post={finalPost} />
      </div>
    </div>
  );
}

export default PostOverview;

import React from "react";
import Comments from "./Comments";
import "./PostOverview.css";
import { useParams } from "react-router-dom";
import { usePosts } from "../Context/PostContext";
import ProductHeader from "../../ui/ProductHeader/ProductHeader";
// import { Button } from "@mui/material";
function PostOverview() {
  const { id } = useParams();
  const { posts } = usePosts();
  const finalPost = posts.find((item) => item.id === id);
  console.log(finalPost);
  // const navigate = useNavigate();
  // function handleBack() {
  //   navigate(-1);
  // }
  return (
    <div>
      <ProductHeader />
      <div>
        <div className="conatiner">
          {/* <Button
            size="small"
            style={{ position: "absolute", top: 0 }}
            variant="contained"
            onClick={handleBack}
          >
            Back
          </Button> */}
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

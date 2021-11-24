import React, { useEffect, useState } from "react";
import Details from "./Details";
import Pagination from "./Pagination";
import "./style.css";

const List = () => {
  const [post, setPost] = useState([]);
  const [data, setData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  console.log("post: ", post);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  const toogle = () => {
    setData(!data);
  };

  const [showData, setShowData] = useState(false);
  const [postID, setPostID] = useState(null);
  const showMore = (id) => {
    setPostID(id);
    setShowData(!showData);
  };

  const indexLastPost = postPerPage * currentPage; //index 0 1 2 .. n
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPostPage = post.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <button onClick={toogle}>List</button>

      {data ? (
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {currentPostPage.map((el) => {
            return (
              <>
                <tr>
                  <td>{`${el.company.name}`}</td>
                  <td>{`${el.name}`}</td>
                  <td>{`${el.address.city}`}</td>
                </tr>
                <button onClick={showMore(el.id)}>Show More</button>
              </>
            );
          })}

          {showData && <Details id={postID} array={post} />}
        </table>
      ) : (
        <div>loading</div>
      )}

      {
        <Pagination
          totalPost={post.length}
          postPerPage={postPerPage}
          paginate={paginate}
        />
      }
    </div>
  );
};

export default List;

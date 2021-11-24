import React from "react";

const Pagination = ({ totalPost, postPerPage, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);

    console.log("PageNumer array:", pageNumber);
  }
  return (
    <nav>
      <ul>
        {pageNumber.map((number) => (
          <a
            href="!#"
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

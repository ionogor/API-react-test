import React from "react";

const Details = ({ id, array }) => {
  const findElement = array.find((element) => {
    return element.id === id;
  });
  console.log("ELement details :", findElement);
  return (
    <>
      <p>{findElement.address.city}</p>
    </>
  );
};

export default Details;

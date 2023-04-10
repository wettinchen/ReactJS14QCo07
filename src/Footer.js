import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>{length} List {length === 1 
      ? "item"
      : length === 0
      ? "item"
      : "items"}</p>
    </footer>
  )
}

export default Footer
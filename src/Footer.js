import React from "react";

export const Footer = () => {
  const date = new Date().getUTCFullYear();
  return <footer>
    <p>Copyright &copy; {date}</p>
  </footer>;
};

import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Card({
  num = 1,
  sub = "LOREM IPSUM",
  title = "Breakfast of Champions",
  text = "lorem ipsum dolor sit amet conqueour adespici csudilórum",
}) {
  return (
    <div className="Card">
      <p className="num">{num}</p>
      <p className="sub">{sub}</p>
      <h2>{title}</h2>
      <p className="text">{text}</p>
      <button>
        read more <FaArrowRight />
      </button>
    </div>
  );
}

export default Card;

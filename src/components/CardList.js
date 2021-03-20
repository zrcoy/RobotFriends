import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (1) {
    throw new Error("nooooooooo");
  }

  return (
    <div>
      {robots.map((cardItem) => (
        <Card
          key={cardItem.id}
          id={cardItem.id}
          name={cardItem.name}
          email={cardItem.email}
          userName={cardItem.username}
        />
      ))}
    </div>
  );
};

export default CardList;

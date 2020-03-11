import React from "react";
import TaskCard from "./TaskCard";
import ActionButton from "./ActionButton";

const List = ({ title, cards, listID }) => {
  return (
    <div style={style.container}>
      <h2>{title}</h2>
      {cards.map(card => (
        <TaskCard key={card.id} text={card.text} />
      ))}
      <ActionButton listID={listID} />
    </div>
  );
};

const style = {
  container: {
    backgroundColor: "#eee",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default List;

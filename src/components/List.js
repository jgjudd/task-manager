import React from "react";
import TaskCard from "./TaskCard";
import ActionButton from "./ActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #eee;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;
const List = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h2>{title}</h2>
                {cards.map((card, index) => (
                  <TaskCard
                    key={card.id}
                    text={card.text}
                    index={index}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <ActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default List;

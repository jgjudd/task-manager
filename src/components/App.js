import React from "react";
import { connect } from "react-redux";
import List from "./List";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flexdirection: row;
  marginright: 8;
`;

class App extends React.Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Hello Youtube</h2>
          <ListContainer>
            {lists.map(list => (
              <List
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <ActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);

import React from "react";
import { connect } from "react-redux";
import List from "./List";
import ActionButton from "./ActionButton";

class App extends React.Component {
  render() {
    const { lists } = this.props;

    return (
      <div>
        <h2>Hello Youtube</h2>
        <div style={style.listContainer}>
          {lists.map(list => (
            <List
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <ActionButton list />
        </div>
      </div>
    );
  }
}

const style = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);

import React from "react";
import { leaders,red,blue,white } from "../../assets/Misc";
import DisplayItem from "../DisplayItem/DisplayItem";
import Player from "../Player/Player";
import GameBoard from "../GameBoard/GameBoard";

class App extends React.Component {
  state = {
    objLeft: leaders.length,
    currentItem: 0,
    likes: 0,
    disLike: 0,
    isEnd: false,
  };

  setLike = () => {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 };
    });
  };
  setDislike = () => {
    this.setState((prevState) => {
      return { disLike: prevState.disLike + 1 };
    });
  };
  setNext = () => {
    if (this.state.currentItem + 1 <= this.state.objLeft - 1) {
      this.setState((prevState) => {
        return { currentItem: prevState.currentItem + 1 };
      });
    } else {
      this.setState({ isEnd: true });
    }
  };
  render() {
   
    return (
      <div className="App">
        <Player dislikes={this.state.disLike} likes={this.state.likes} />
        {!this.state.isEnd && <DisplayItem currentItem={this.state.currentItem} />}
        {this.state.isEnd && (
          <h1 style={{display:'flex',justifyContent: 'center'}}>
            {this.state.disLike === this.state.likes
              ? white
              : this.state.disLike > this.state.likes
              ? blue
              : red}
          </h1>
        )}
        <GameBoard
          like={this.setLike}
          dislike={this.setDislike}
          nextItem={this.setNext}
          isEnd={this.state.isEnd}
        />
      </div>
    );
  }
}

export default App;

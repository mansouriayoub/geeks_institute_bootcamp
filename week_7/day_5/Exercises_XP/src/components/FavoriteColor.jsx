import React from "react";

class FavoriteColor extends React.Component {
    constructor(props) {
      super(props);
      this.state = { favoriteColor: "red" };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ favoriteColor: "yellow" });
      }, 2000);
    }
  
    shouldComponentUpdate() {
      return true;
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("in getSnapshotBeforeUpdate");
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("after update");
    }
  
    changeColor = () => {
      this.setState({ favoriteColor: "blue" });
    };
  
    render() {
      return (
        <div>
          <h1>My favorite color is {this.state.favoriteColor}</h1>
          <button onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  export default FavoriteColor
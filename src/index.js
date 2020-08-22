import React from "react";
import ReactDom from "react-dom";
import SearchMovies from "./SearchMovies";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Islamic Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));

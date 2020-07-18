import React from "react";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Home } from "./components/Home/home";

import { SearchMovieAPI } from "./services/movieAPI";

class App extends React.Component {
  state = {
    movieCollection: [],
  };

  searchMovieName = async (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    const data = await SearchMovieAPI(movieName);
    this.setState({
      movieCollection: data.Search,
    });
  };

  render() {
    console.log(this.state.movieCollection);
    return (
      <div>
        <Header movieName={this.searchMovieName}></Header>
        <Home movies={this.state.movieCollection}></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

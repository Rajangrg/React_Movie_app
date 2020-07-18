import React from "react";
//components
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";
import { Home } from "../components/Home/home";
//service
import { SearchMovieAPI } from "../services/movieAPI";

class WebsiteHolder extends React.Component {
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

  componentDidMount = async () => {
    const fixedResponse = await SearchMovieAPI();
    this.setState({
      movieCollection: fixedResponse.Search,
    });
  };

  render() {
    //console.log(this.state.movieCollection);
    return (
      <div>
        <Header movieName={this.searchMovieName}></Header>     
        <Home movies={this.state.movieCollection}></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default WebsiteHolder;

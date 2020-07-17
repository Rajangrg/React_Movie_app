import React from "react";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Home } from "./components/Home/home";

class App extends React.Component {
  state = {
    searchName: '',
  };

  searchMovieName = async (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    this.setState({
      searchName: movieName,
    });
  };

  render() {
    console.log(this.state.searchName);
    return (
      <div>
        <Header movieName={this.searchMovieName}></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

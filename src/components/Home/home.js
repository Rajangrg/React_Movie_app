import React, { useState, useEffect } from "react";
import { SearchMovieAPI } from "../../services/movieAPI";

import {Container, Header} from 'semantic-ui-react'

export const Home = () => {
  const [getMovies, setMovies] = useState([]);
  useEffect(() => {
    const getResult = async () => {
      setMovies(await SearchMovieAPI());
    };
    getResult();
  }, [setMovies]);

  console.log(getMovies);

  return <div>
      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Fetch result  here</Header>
    </Container>

  </div>;
};

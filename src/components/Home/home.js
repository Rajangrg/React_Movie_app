import React from "react";
//UI components
import { Container, Grid, Popup, Card, Image, Icon, Button } from "semantic-ui-react";
//Router
import {Link} from 'react-router-dom'

export const Home = ({movies}) => {
  // console.log(movies)
  return (
    <div>
      <Container  style={{ marginTop: "7em"}}>
        <Grid container columns={4}>
          {movies.map((movie) => {
            return (
              <Grid.Column key={movie.imdbID}>
                <Popup
                  trigger={
                    <Card>
                      <Image src={movie.Poster} />
                      <Button inverted color='red'>
                      <Link key={movie.imdbID} to={{
													pathname:`/movieDetail/${movie.imdbID}`,
													query: {id : movie.imdbID}
												}}>View Details </Link>
                        
											</Button>
                    </Card>
                  }
                >
                  <Popup.Header>{movie.Title}</Popup.Header>
                  <Popup.Content>
                  <Icon name='calendar alternate outline' /> Year: {movie.Year}
                  </Popup.Content>
                 
                </Popup>
               
              </Grid.Column>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}


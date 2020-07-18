import React from "react";
import { Container, Grid, Popup, Card, Image, Icon, Button } from "semantic-ui-react";

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
												View Details
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


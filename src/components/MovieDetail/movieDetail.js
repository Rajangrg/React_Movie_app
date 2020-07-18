import React from "react";
import { SearchMovieDeatilsAPI } from "../../services/movieAPI";
//UI
import {
  Container,
  Grid,
  Card,
  Image,
  Item,
  Button,
  Icon,
} from "semantic-ui-react";
//components
import { Footer } from "../Footer/footer";
//router
import { Link } from "react-router-dom";

class MovieDetail extends React.Component {
  state = {
    movieDetails: [],
  };

  componentDidMount = async () => {
    const movieId = this.props.location.state.id;
    const response = await SearchMovieDeatilsAPI(movieId);
    this.setState({
      movieDetails: response,
    });
  };
  render() {
    //console.log(this.state.movieDetails);
    //console.log(this.props);
    const movie = this.state.movieDetails;
    return (
      <div>
        {movie.length !== 0 && (
          <Container
            text
            style={{
              margin: "2em 0em 0em",
              left: 0,
              bottom: 0,
            }}
          >
            <Grid>
              <Grid.Column width={6}>
                <Card>
                  <Image src={movie.Poster} />
                </Card>
              </Grid.Column>
              <Grid.Column width={10}>
                <Item.Group>
                  <Item>
                    <Item.Content>
                      <Item.Header>{movie.Title}</Item.Header>
                      <Item.Description>Plot</Item.Description>
                      <Item.Meta>
                        <span>{movie.Plot}</span>
                      </Item.Meta>
                      <Item.Description>Director</Item.Description>
                      <Item.Meta>
                        <span>{movie.Director}</span>
                      </Item.Meta>
                      <Item.Description>Genre</Item.Description>
                      <Item.Meta>
                        <span>{movie.Genre}</span>
                      </Item.Meta>
                      <Item.Description>Writer</Item.Description>
                      <Item.Meta>
                        <span>{movie.Writer}</span>
                      </Item.Meta>
                      <Item.Description>Awards</Item.Description>
                      <Item.Meta>
                        <span>{movie.Awards}</span>
                      </Item.Meta>
                    </Item.Content>
                  </Item>
                  <Item>
                    <Button inverted color="red">
                      <Link to="/">
                        <Icon name="arrow alternate circle left" /> Back
                      </Link>
                    </Button>
                  </Item>
                </Item.Group>
              </Grid.Column>
            </Grid>
          </Container>
        )}
        <Footer></Footer>
      </div>
    );
  }
}

export default MovieDetail;

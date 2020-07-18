import React from "react";

import { Segment, Container, List, Divider, Image } from "semantic-ui-react";

export const Footer = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          margin: "5em 0em 0em",
          width: "100%",
          left: 0,
          bottom: 0,
        }}
      >
        <Container textAlign="center">
          <Divider inverted section />
          <Image
            centered
            size="mini"
            src="https://img.icons8.com/doodle/96/000000/user-male-circle.png" alt="userPic"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="https://github.com/Rajangrg">
              By Rajan Gurung
            </List.Item>
            <List.Item as="a" href="http://www.omdbapi.com/">
              API details
            </List.Item>
            <List.Item as="a" href="https://github.com/Rajangrg/React_Movie_app/blob/master/LICENSE">
              MIT License
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

import React from "react";
//UI components
import { Menu, Image } from "semantic-ui-react";
//components
import Form from "../Form/form";

export const Header = ({ movieName }) => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image
            size="mini"
            src="https://img.icons8.com/officel/80/000000/react.png"
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Form searchName={movieName}></Form>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

import React from "react";

//UI components
import { Menu, Input, Image } from "semantic-ui-react";

export const Header = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
          <Menu.Item>
            <Image
              size="mini"
              src="https://img.icons8.com/officel/80/000000/react.png"
              style={{ marginRight: "0.8rem" }}
            />
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
      </Menu>
    </div>
  );
};

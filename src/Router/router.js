import React from "react";

// react router dom
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MovieDetail from "../components/MovieDetail/movieDetail";

import WebsiteHolder from "../containers/websiteHolder";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WebsiteHolder}></Route>
        <Route path="/movieDetail/:id" component={MovieDetail} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

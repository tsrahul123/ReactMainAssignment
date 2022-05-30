import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Loader from "./Components/Global/Loader";
import "./styles/main.css";

const cartPage = React.lazy(() => import("./Components/BookCart/cartPage"));
const CourseDesc = React.lazy(() => import("./Components/CourseDesc/CourseDesc"));
const shoppingcart = React.lazy(() => import("./Components/Shoppingcart/shoppingcart"));
const profile = React.lazy(() => import("./Components/Profile/profile"));


const App = () => (
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={cartPage} />
        <Route exact path="/detailsPage" component={CourseDesc} />
        <Route exact path="/shoppingcart" component={shoppingcart} />
        <Route exact path="/profile" component={profile} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;

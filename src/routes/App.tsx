import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navegation/NavBar";
import { routes } from "./routes";
import NavBarMobile from "../components/navegationMobile/NavBarMobile";
import useWindowSize from "../hooks/useWindowSize";

import "./App.css";
function App(): JSX.Element {
  const { width } = useWindowSize();

  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </main>
      {width < 769 ? <NavBarMobile /> : <Footer />}
    </Router>
  );
}

export default App;

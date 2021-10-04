import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navegation/NavBar";
import { routes } from "./routes";
import NavBarMobile from "../components/navegationMobile/NavBarMobile";
import useWindowSize from "../hooks/useWindowSize";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./App.css";
function App(): JSX.Element {
  const { width } = useWindowSize();

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <div className="main">
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
        </div>
        {width < 769 ? <NavBarMobile /> : <Footer />}
      </Router>
    </ThemeProvider>
  );
}

export default App;

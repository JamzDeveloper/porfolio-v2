import Blog  from "../pages/blog/Blog";
import  Home from "../pages/home/Home";
import NotFound  from "../pages/notfound/NotFound";
import  About from "../pages/porftolio/About";
import route from "../interfaces/route";

export const routes: route[] = [
  {
    path: "/",
    name: "home",
    component: Home,
    exact: true,
  },
  {
    path: "/acerca",
    name: "about",
    component: About,
    exact: true,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    exact: true,
  },
  {
    path: "/retos",
    name: "retos",
    component: Blog,
    exact: true,
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
    exact: false,
  },
];

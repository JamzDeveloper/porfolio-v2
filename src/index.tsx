import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import 'normalize.css';
//import App from './routes/App';
import reportWebVitals from "./reportWebVitals";
const App = React.lazy(() => import("./routes/App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

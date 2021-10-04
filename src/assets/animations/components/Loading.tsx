import React from "react";

type style = React.CSSProperties;
const Loading = () => {
  const styleContainer: style = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="animation--home--container--loading" style={styleContainer}>
      <h2>Cargando...</h2>
    </div>
  );
};

export default Loading;

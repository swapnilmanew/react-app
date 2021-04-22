import React from "react";
import Common from "./Common";
import img from "../images/1.svg";

const Home = () => {
  return (
    <>
      <Common
        img={img}
        title={"React Js"}
        text={"A Javascript library for building user interfaces."}
      />
    </>
  );
};

export default Home;

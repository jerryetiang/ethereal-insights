import React from "react";
import CircleDecoration from "../components/circle";

export default function Background() {
  return (
    <div>
      <CircleDecoration
        color="lime-300"
        rotation="45"
        size={80}
        position={{ top: "10vh", left: "10vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="90"
        size={30}
        position={{ top: "20vh", left: "10vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="135"
        size={40}
        position={{ top: "30vh", left: "50vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="180"
        size={80}
        position={{ top: "70vh", left: "50vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="225"
        size={30}
        position={{ top: "70vh", left: "60vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="270"
        size={40}
        position={{ top: "70vh", left: "10vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="315"
        size={150}
        position={{ top: "80vh", left: "70vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="45"
        size={300}
        position={{ top: "70vh", left: "10vw" }}
      />
      <CircleDecoration
        color="lime-300"
        rotation="135"
        size={400}
        position={{ top: "10vh", left: "70vw" }}
      />
    </div>
  );
}

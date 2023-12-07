import React from "react";
import BGShape from "../components/BGShape";

export default function Background() {
  return (
    <div>
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "10vh", left: "10vw" }}
        size={80}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "20vh", left: "10vw" }}
        size={30}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "30vh", left: "50vw" }}
        size={40}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "70vh", left: "50vw" }}
        size={80}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "70vh", left: "60vw" }}
        size={30}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "70vh", left: "10vw" }}
        size={40}
      />

      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "80vh", left: "70vw" }}
        size={150}
      />

      <BGShape
        color="lime-300"
        rotation="30"
        shape="circle"
        size={300}
        position={{ top: "70vh", left: "10vw" }}
      />
      <BGShape
        color="lime-300"
        rotation="30"
        shape="circle"
        size={400}
        position={{ top: "10vh", left: "70vw" }}
      />
    </div>
  );
}

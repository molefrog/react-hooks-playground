import React from "react";
import { Label } from "../ui";

const COLORS = ["red", "green", "blue", "purple"];

function UseHashLocation() {
  const color = COLORS[2];

  return (
    <>
      <Label span="4/3" background={color} />
    </>
  );
}

export default UseHashLocation;

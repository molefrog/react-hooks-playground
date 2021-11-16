import React from "react";
import { Label } from "../ui";

const ANIMALS = ["🐰", "🐮", "🦊", "🐸", "🦀"];

function DocumentTitle() {
  return (
    <>
      {ANIMALS.map((animal) => (
        <Label key={animal} span={2}>
          {animal}
        </Label>
      ))}
    </>
  );
}

export default DocumentTitle;

import React from "react";
import { Label, Button } from "../ui";

function ConfettiLauncher() {
  return (
    <>
      <Label span="4/3">
        <canvas height={200} />
      </Label>
      <Button span={4}>
        <span role="img" aria-label="confetti">
          🎉
        </span>
      </Button>
    </>
  );
}

export default ConfettiLauncher;

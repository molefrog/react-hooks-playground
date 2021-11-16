import React, { useState } from "react";
import { Button, Label } from "../ui";

const flip = (x) => (x ? 0b0 : 0b1);

function BinaryAdder() {
  const [lhs, setLhs] = useState(0b0);
  const [rhs, setRhs] = useState(0b0);

  const sum = 0b0;
  const carry = 0b1;

  return (
    <>
      <Button
        switchedOn={lhs}
        onClick={() => {
          setLhs(flip(lhs));
        }}
      >
        {lhs}
      </Button>
      <Label>+</Label>
      <Button switchedOn={rhs} onClick={() => setRhs(flip(rhs))}>
        {rhs}
      </Button>
      <Label>=</Label>
      <Label span={2}>{sum}</Label>
      <Label span={2}>{carry}</Label>
    </>
  );
}

export default BinaryAdder;

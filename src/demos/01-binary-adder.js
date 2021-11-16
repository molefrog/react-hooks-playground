import React from "react";
import { Button, Label } from "../ui";

function BinaryAdder() {
  const lhs = 0b1;
  const rhs = 0b0;

  const sum = 0b0;
  const carry = 0b1;

  return (
    <>
      <Button>{lhs}</Button>
      <Label>+</Label>
      <Button>{rhs}</Button>
      <Label>=</Label>
      <Label span={2}>{sum}</Label>
      <Label span={2}>{carry}</Label>
    </>
  );
}

export default BinaryAdder;

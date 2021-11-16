import React from "react";
import { Label } from "../ui";

function PageVisibility() {
  const tabActive = false;

  return (
    <>
      <Label span={1} textSize="24px">
        {tabActive ? "👀" : "👋"}
      </Label>
      <Label span={3}>the tab is {tabActive ? "" : "not"} active!</Label>
    </>
  );
}

export default PageVisibility;

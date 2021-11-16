import React, { useState } from "react";
import ReactDOM from "react-dom";
import useLocation from "wouter/use-location";
import styled from "styled-components";

import { GlobalCSS, Grid } from "./ui";

const demos = [
  require("./demos/01-binary-adder").default,
  require("./demos/02-document-title").default,
  require("./demos/03-page-visibility-effect").default,
  require("./demos/04-confetti-launcher").default,
  require("./demos/05-audio-player").default,
  require("./demos/06-use-hash-location").default,
  require("./demos/07-instagram-stories").default
];

const useDemoIdx = () => {
  const [loc, setLoc] = useLocation();
  const idx = parseInt(loc.replace("/demo-", ""), 10) || 1;
  return [idx - 1, (idx) => setLoc(`/demo-${idx + 1}`)];
};

function App() {
  const [demoIdx, setDemoIdx] = useDemoIdx();
  const [, setRenderCounter] = useState(1);

  const nextDemo = () =>
    setDemoIdx(demoIdx >= demos.length - 1 ? 0 : demoIdx + 1);
  const prevDemo = () =>
    setDemoIdx(demoIdx <= 0 ? demos.length - 1 : demoIdx - 1);

  const Demo = demos[demoIdx];

  return (
    <>
      <GlobalCSS />
      <Grid>{!!Demo && <Demo />}</Grid>

      <Controls>
        <ControlBtn onClick={() => prevDemo(-1)}>←</ControlBtn>
        <ControlBtn onClick={() => setRenderCounter((x) => x + 1)}>
          {Demo && `0${demoIdx + 1}. <${Demo.name} />`}
        </ControlBtn>
        <ControlBtn onClick={() => nextDemo()}>→</ControlBtn>
      </Controls>
    </>
  );
}

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.15;

  &:hover {
    opacity: 1;
  }
`;

const ControlBtn = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

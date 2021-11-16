import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";

const mirageColor = "#121824";
const midnightColor = "#212C43";

export const GlobalCSS = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: system-ui;
  }
  body {
    background: #3d4553;
    background-size: cover;
    background-position: center center;
  }

  #root {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: auto;
  }

  .blurhash {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 1s ease;
    background-position: center;
    background-size: cover;
  }
`;

export const Grid = styled.div`
  flex: 1 0;
  margin: 0 auto;
  max-width: 320px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 70px;
`;

export const Cell = styled.div.attrs((props) => {
  let spanH = 1,
    spanV = 1;

  if (typeof props.span === "string") {
    const [a, b] = props.span.split("/");
    spanH = Number(a);
    spanV = Number(b);
  } else if (typeof props.span === "number") {
    spanH = props.span;
  }

  return { spanH, spanV };
})`
  color: white;
  border-radius: 14px;
  grid-column-end: span ${(props) => props.spanH};
  grid-row-end: span ${(props) => props.spanV};
`;

export const Label = styled(Cell)`
  background-color: ${midnightColor};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 700;
  font-family: inherit;
  transition: background 0.2s ease;

  ${(props) =>
    css`
      font-size: ${props.textSize || "15px"};
    `}

  ${(props) => props.background && `background: ${props.background}}`}
`;

const ThemedButton = styled(Label)`
  background-color: ${mirageColor};
  outline: none;
  appearance: none;
  border: none;
  cursor: pointer;

  &:focus {
    box-shadow: inset 0 0 0px 4px rgba(255, 255, 255, 0.03);
  }

  &:hover {
    background: #535f77;
    color: #121824;
  }

  &:active {
    background: #d3dbe7;
  }

  ${(props) =>
    props.switchedOn &&
    css`
      &,
      &:hover {
        background: #d3dbe7;
        color: #121824;
      }
    `}
`;

export const Button = (props) => <ThemedButton as="button" {...props} />;

export const Stories = styled(Cell)`
  grid-column-end: span 4;
  grid-row-end: span 6;
  display: flex;
  flex-flow: column;
`;

export const Progress = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  margin-bottom: 12px;
`;

const StepContainer = styled.div`
  height: 4px;
  background: #727272;
  width: 100%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const StepCompleted = styled.div`
  content: "";
  display: inline-block;
  background: white;
  height: 100%;
  width: 100%;
  will-change: transform;
  position: absolute;
  transform-origin: left;
  left: 0;
  top: 0;
`;

export const Step = ({ progress = 0 }) => {
  return (
    <StepContainer>
      <StepCompleted style={{ transform: `scaleX(${progress})` }} />
    </StepContainer>
  );
};

const Status = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Username = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

const Paused = styled.div`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 5px;
  opacity: 0;
  ${(props) => props.isVisible && `opacity: 1`};
`;

export const Photo = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
  flex: 1 1;
  border-radius: 8px;
`;

export const StatusBar = (props) => {
  return (
    <Status>
      <Username>{props.username}</Username>

      <Paused isVisible={props.paused}>paused</Paused>
    </Status>
  );
};

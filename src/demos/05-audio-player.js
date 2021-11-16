import React from "react";
import { Label, Button } from "../ui";

const AUDIO_PATH =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";

function AudioPlayer() {
  return (
    <>
      <Label span="4">
        <audio controls src={AUDIO_PATH} />
      </Label>
      <Button span="4">Play</Button>
    </>
  );
}
export default AudioPlayer;

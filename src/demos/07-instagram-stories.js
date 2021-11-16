import React, { useState } from "react";
import { StatusBar, Stories, Button, Photo } from "../ui";

function InstagramStories() {
  const [idx] = useState(0);
  const [paused] = useState(false);
  const currentStory = STORIES[idx];

  return (
    <>
      <Stories>
        <StatusBar username={currentStory.user} paused={paused} />
        {/* <ProgressBar step={idx} total={STORIES.length} paused={paused} /> */}
        <Photo
          src={currentStory.img}
          onMouseUp={() => null}
          onMouseDown={() => null}
        />
      </Stories>

      <Button span={2}>
        <span role="img" aria-label="prev">
          👈
        </span>
      </Button>
      <Button span={2}>
        <span role="img" aria-label="next">
          👉
        </span>
      </Button>
    </>
  );
}

const STORIES = [
  {
    user: "@molefrog",
    img:
      "https://images.unsplash.com/photo-1604585591073-445b86c4e1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
    blurHash: "U57nzeyE00DO*0xtNGIT00rq-;j[Z$E1wb%2"
  },
  {
    user: "@jack",
    img:
      "https://images.unsplash.com/photo-1582894165574-22f6d980afd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    blurHash: "U68N;6xuIVRjxsxuRjay9FayRPoz?wkCV@j["
  },
  {
    user: "@derek",
    img:
      "https://images.unsplash.com/photo-1604475523368-9bbe6490c7ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    blurHash: "UBAKdS4T_NMw~p4n%hIAxtIVxuRQt6kCxuRj"
  },
  {
    user: "@presentcorrect",
    img:
      "https://images.unsplash.com/photo-1604502881567-6221ddda4061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    blurHash: "ULCGfFx]DiRj_NxbVrR*x]f6tRs:xut6W;t7"
  },
  {
    user: "@katsmols",
    img:
      "https://images.unsplash.com/photo-1604208013489-a5cc560de8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    blurHash: "UFAAzj5SrU$b^-OvVXx9L}XnnhRhDRS@n+V{"
  }
];

export default InstagramStories;

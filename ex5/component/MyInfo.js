import React from "react";
import Joke from "./Joke";
function MyInfo() {
  return (
    <div>
      <Joke questions="What is your name?" ans="I don't know" />
      <Joke questions="What are you doing?" ans="Learning" />
      <Joke questions="Why are you doing it?" ans="To prove myself" />
    </div>
  );
}

export default MyInfo;

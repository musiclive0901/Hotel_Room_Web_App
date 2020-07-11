import React from "react";

function Joke(props) {
  return (
    <div>
      <h3>Question:{props.question}</h3>
      <h3>Answer: {props.ans}</h3>
      <<br/>
    </div>
  );
}

export default Joke;

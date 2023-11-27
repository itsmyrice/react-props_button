import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="hotpink" text="click me" disabled />;
}

function Button({ color, disabled, text }) {
  const stylesObject = { backgroundColor: color };
return ( <button style={stylesObject} disabled={disabled}> {text} </button>
);
}
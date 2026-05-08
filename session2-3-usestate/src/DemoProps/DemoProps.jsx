import React from "react";

// props: 1 object chứa dữ liệu được truyền

const DemoProps = (props) => {
  console.log({props})
  const {text, number, color} = props
  return <div>{text}</div>;
};

export default DemoProps;

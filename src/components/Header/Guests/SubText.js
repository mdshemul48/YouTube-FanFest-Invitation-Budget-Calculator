import React from "react";

const SubText = (props) => {
  const { title, value } = props;
  console.log(props);
  return (
    <p>
      <b>{title}:</b> {value}
    </p>
  );
};

export default SubText;

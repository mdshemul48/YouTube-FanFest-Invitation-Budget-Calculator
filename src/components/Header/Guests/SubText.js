import React from "react";

const SubText = (props) => {
  const { title, value } = props;
  return (
    <p>
      <b>{title}:</b> {value}
    </p>
  );
};

export default SubText;

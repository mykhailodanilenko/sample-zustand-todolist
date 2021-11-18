import React from "react";

interface Props {
  text: string;
}

function ListItem({ text }: Props) {
  return <div>{text}</div>;
}

export default ListItem;

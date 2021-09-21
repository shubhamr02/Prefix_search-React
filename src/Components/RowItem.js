import React from "react";

function RowItem(props) {
  return (
    <tr keys={props.id} onClick={props.handleClick}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>{props.left}</td>
    </tr>
  );
}

export default RowItem;

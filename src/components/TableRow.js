import React from 'react';

const TableRow = ({ name, date, title, field, old_value, new_value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{title}</td>
      <td>{field}</td>
      <td>{old_value}</td>
      <td>{new_value}</td>
    </tr>
  );
};

export default TableRow;

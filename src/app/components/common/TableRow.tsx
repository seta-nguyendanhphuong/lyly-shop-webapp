import React from "react";

interface Item {
  id: number;
  name: string;
  email: string;
}

interface TableRowProps {
  item: Item;
}

export function TableRow({ item }: TableRowProps) {
  return (
    <tr>
      <td className="px-4 py-2 border-b">{item.id}</td>
      <td className="px-4 py-2 border-b">{item.name}</td>
      <td className="px-4 py-2 border-b">{item.email}</td>
    </tr>
  );
}

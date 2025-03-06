"use client"
import React, { useState } from "react";
interface Item {
  id: number;
  value: number;
}
export default function HookArray() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}> Add Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

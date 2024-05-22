"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <div>
      <p>There are {users.length} users</p>
      <span>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      </span>
    </div>
  );
}

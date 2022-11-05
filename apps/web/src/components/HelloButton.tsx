import React, { useState } from "react";
import { useHelloWordStore } from "../stores/HelloWordStore";

export const HelloButton = () => {
  const { message, fetchMessage } = useHelloWordStore();
  const [sub, setSub] = useState("");

  return (
    <div
      style={{
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500,
      }}
    >
      <p style={{ margin: "0 0 1.5rem 0" }}>
        This component is fetching data from{" "}
        <code
          style={{
            padding: "0.2rem 0.3rem",
            background: `rgba(0,0,0,0.1)`,
            borderRadius: "0.25rem",
          }}
        >
          api
        </code>
      </p>
      <div>
        <input
          style={{
            background: "white",
            color: "black",
            border: "solid",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            display: "inline-block",
            marginRight: "24px",
          }}
          type="text"
          onChange={(e) => setSub(e.target.value)}
        />
        <button
          style={{
            background: "black",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            display: "inline-block",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => fetchMessage(sub)}
        >
          Fetch
        </button>
        <br />
      </div>
      <p style={{ margin: "1.5rem 0 0 0" }}>Server Returned: {message}</p>
    </div>
  );
};

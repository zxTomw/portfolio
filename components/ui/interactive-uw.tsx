"use client";
import { useState } from "react";

export function InteractiveUW() {
  const [waterloo, setWaterloo] = useState("the University of Waterloo");
  return (
    <span
      onClick={() =>
        setWaterloo(() => {
          switch (waterloo) {
            case "the University of Waterloo":
              return "L'université de Waterloo";
            case "L'université de Waterloo":
              return "滑铁卢大学";
            default:
              return "the University of Waterloo";
          }
        })
      }
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 font-semibold">
        {waterloo}.
      </span>
    </span>
  );
}

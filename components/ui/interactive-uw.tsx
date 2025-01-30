"use client";
import { useState } from "react";
import { AuroraText } from "./aurora-text";
import { span } from "motion/react-client";

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
      <AuroraText as={span} className="font-semibold">
        {waterloo}.
      </AuroraText>
    </span>
  );
}

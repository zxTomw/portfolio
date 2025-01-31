"use client";
import { useState } from "react";
import BlurInSpan from "./blur-in-span";

export function InteractiveHeading() {
  const [name, setName] = useState("Tom");
  const [greeting, setGreeting] = useState("Hi");
  const [iam, setIam] = useState("I'm ");
  return (
    <h1 className="font-semibold sm:text-8xl text-5xl">
      <span
        onClick={() => {
          setGreeting((prev) => (prev === "Hi" ? "你好" : "Hi"));
        }}
      >
        {greeting}
      </span>
      !&nbsp;
      <span
        onClick={() => {
          setIam((prev) => (prev === "I'm " ? "我是" : "I'm "));
        }}
      >
        {iam}
      </span>
      <span
        onClick={() =>
          setName((prev) => {
            switch (prev) {
              case "Tom":
                return "Zhixing Wang";
              case "Zhixing Wang":
                return "王知行";
              default:
                return "Tom";
            }
          })
        }
      >
        <BlurInSpan>{name}</BlurInSpan>
      </span>
    </h1>
  );
}

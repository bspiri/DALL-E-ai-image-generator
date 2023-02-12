"use client";

import React, { useState, FormEvent } from "react";
import Card from "./card";
import Placeholder from "./placeholder";

export default function Input() {
  const [prompt, setPrompt] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!prompt) return;
    setPrompt("");

    const res = await fetch("/api/image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setUrl(data.result);
  }

  return (
    <React.Fragment>
      <form
        onSubmit={submitHandler}
        className="flex border-gray-100 w-full shadow-sm px-8"
      >
        <div className="flex relative my-8 w-full h-full">
          <div className="flex absolute py-4 px-2 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter prompt here..."
            className="flex-1 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-600 focus:outline-none focus:ring-2 focus:border-transparent px-7 py-3"
          />
          <button
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-1 hover:scale-110 hover:bg-indigo-500 duration-300
        text-white font-bold mx-2 px-2  rounded "
            type="submit"
          >
            Generate
          </button>
        </div>
      </form>
      {url !== "" ? <Card url={url} /> : <Placeholder />}
    </React.Fragment>
  );
}

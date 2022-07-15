import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
import classes from "./Card.module.css";

import { useState, createContext, useContext } from "react";
import { SongContext } from "../../App";

function Card(props) {
  const [song, setSong] = useContext(SongContext);

  return (
    <div
      className="w-[180px] h-[254px] rounded-lg p-[16px] bg-gradient-to-b from-gray-200 to-gray-100 cursor-pointer hover:from-gray-300 hover:to-gray-200 mr-[20px] mb-[20px]"
      onClick={() => {
        setSong({
          name: props.title,
          img: props.image,
        });
      }}
    >
      <div className="relative ">
        <img
          loading="lazy"
          className="h-[150px] w-[150px] object-cover rounded-lg mb-[8px] z-10"
          src={props.image}
          alt="card"
        />
        <button className="h-[254px] w-[180px] opacity absolute -top-[16px]  -left-[16px] opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
          <PlayIcon className="h-12 w-12 text-green-500 absolute right-[20px] top-[116px]" />
        </button>
      </div>
      <div className="h-[70px]">
        <h2 className="font-bold truncate">{props.title}</h2>
        <p className={`text-sm h-[44px] ${classes.overflowTruncate}`}>
          {props.desc}
        </p>
      </div>
    </div>
  );
}

export default Card;

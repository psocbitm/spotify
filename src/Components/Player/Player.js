import React, { useState } from "react";
import {
  MicrophoneIcon,
  CollectionIcon,
  RewindIcon,
  FastForwardIcon,
  PlayIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { VolumeUpIcon } from "@heroicons/react/outline";

import { createContext, useContext } from "react";
import { SongContext } from "../../App";
function Player() {
  const [song, setSong] = useContext(SongContext);

  return (
    <div className="bg-gray-200/[0.8] backdrop-blur-sm border-b px-3 fixed bottom-0 w-full z-50">
      <div className="flex items-center py-1">
        <div className="flex-[2_2_0%] ">
          <div className="flex items-center">
            <img src={song.img} alt="" className="h-16 w-16" />
            <div className="ml-3">
              <div>
                {<h2 className="font-semibold">{song.name}</h2>}
              </div>
              <div className="text-sm">Artist</div>
            </div>
            <div className="cursor-pointer">
              <HeartIcon className="ml-3 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="flex-[8_8_0%] ">
          <div className="flex justify-center">
            <RewindIcon className="h-8 w-8 cursor-pointer text-gray-700 rounded-full hover:text-black" />
            <PlayIcon className="h-8 w-8 cursor-pointer text-gray-700 rounded-full hover:text-black" />
            <FastForwardIcon className="h-8 w-8 cursor-pointer text-gray-700 rounded-full hover:text-black" />
          </div>
          <div className="h-1 w-96 bg-gray-900 mx-auto mt-3"></div>
        </div>
        <div className="flex-[2_2_0%] flex justify-end">
          <MicrophoneIcon className="h-5 w-5 mr-3 cursor-pointer" />
          <CollectionIcon className="h-5 w-5 mr-3 cursor-pointer" />
          <VolumeUpIcon className="h-5 w-5 mr-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Player;

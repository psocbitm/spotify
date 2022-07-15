import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
function TopNavbar() {
  return (
    <div className="bg-gray-200/[.8] backdrop-blur-sm border-b p-1 px-3 fixed w-5/6 z-50">
      <div className="flex justify-between items-center">
        <div className="my-1">
          <button
            type="submit"
            className="inline-flex p-1 justify-center border border-transparent shadow-sm text-sm font-medium rounded-full text-gray-500 bg-gray-100 hover:bg-gray-50
            hover:text-black focus:outline-none focus:border-gray-50 focus:shadow-outline-gray-50 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex p-1 justify-center border border-transparent shadow-sm text-sm font-medium rounded-full text-gray-500 bg-gray-100 hover:bg-gray-50
            hover:text-black focus:outline-none focus:border-gray-50 focus:shadow-outline-gray-50 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="my-1">
          <button
            type="submit"
            className="inline-flex justify-center py-2 text-sm font-medium rounded-full text-gray-500 hover:text-black"
          >
            Sign Up
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-full text-gray-500 bg-gray-100 hover:bg-gray-50
            hover:text-black focus:outline-none focus:border-gray-50 focus:shadow-outline-gray-50 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

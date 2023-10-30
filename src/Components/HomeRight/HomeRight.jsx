import React from "react";
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://images.freeimages.com/images/large-previews/499/light-of-technology-02-1535941.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>FullName</p>
              <p className="opacity-70">username</p>
            </div>
          </div>
          <div className="text-blue-700 font-semibold">
            <p>swith</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[, 1, 1, 1, 1, 1].map((item) => (
            <SuggetionCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;

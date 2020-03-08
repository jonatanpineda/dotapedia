import React from "react";

function HeroesPublic() {
  return (
    <div>
      <div className="flex flex-col m-10">
        <div className="text-center text-white mb-5">
          Heroes in Public Matches (Sampled) 1.8m matches in last 30 days
        </div>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroesPublic;

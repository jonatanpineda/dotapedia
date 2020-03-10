import React from "react";

function PercentBar({ percent, value, color }) {
  return (
    <div className="text-gray-500 text-sm" style={{ minWidth: 100 }}>
      <div>
        {percent} <small>{value}</small>
      </div>
      <div className="bg-gray-700 h-2 flex-grow mr-2" style={{ height: "4px" }}>
        <div
          className="leading-none"
          style={{
            width: percent + "%",
            backgroundColor: color,
            height: "4px"
          }}
        />
      </div>
    </div>
  );
}

export default PercentBar;

import React from "react";

function CodeData(props) {
  const { inx, code } = props;
  return (
    <>
      <div className="p-4 text-blue text-2xl mt-2 font-thin">
        {` ${inx}.  ${code && code}`}
        <div className="text-white opacity-70 text-sm mt-1 text-right">
          added: 01-Jan-21
        </div>
      </div>
    </>
  );
}

export default CodeData;

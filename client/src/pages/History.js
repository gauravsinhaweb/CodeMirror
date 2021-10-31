import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useHistory } from "react-router";
import CodeData from "../components/CodeData";

function History(boards) {
  const history = useHistory();
  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="flex flex-row justify-around mt-6 text-xl">
        {" "}
        <span onClick={() => history.push("/")} className="text-2xl mr-8">
          {" "}
          <AiFillCaretLeft />
        </span>
        <span className="mr-32">History</span>
      </div>
      <div>
        {boards.boards &&
          boards.boards.map((board, inx) => {
            return (
              <CodeData
                key={inx}
                inx={inx}
                data={board}
                code={board.Code}
                timestamp={board.timestamp}
              />
            );
          })}
      </div>
    </div>
  );
}

export default History;

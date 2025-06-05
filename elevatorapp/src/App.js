import React, { useState } from "react";
import FloorRows from "./Component/FloorRows";

const TOTAL_FLOORS = 10;
const TOTAL_ELEVATORS = 5;

const floorNames = [
  "ground floor",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th"
];

const App = () => {
  const [elevatorPositions, setElevatorPositions] = useState(
    Array(TOTAL_ELEVATORS).fill(0) 
  );
  const [waiting, setWaiting] = useState(
    Array(TOTAL_FLOORS).fill(false)
  );

  // Call Function to Elevator Up and Down 
  const handleCall = (floorIndex) => {
    const updatedWaiting = [...waiting];
    updatedWaiting[floorIndex] = true;
    setWaiting(updatedWaiting);

    const distances = elevatorPositions.map((pos) =>
      Math.abs(pos - floorIndex)
    );
    const closest = distances.indexOf(Math.min(...distances));

    const travelTime = Math.abs(elevatorPositions[closest] - floorIndex) * 1000;

    const updatedElevators = [...elevatorPositions];
    updatedElevators[closest] = floorIndex;
    setElevatorPositions(updatedElevators);

    // SetTime Out for Waiting status show 
    setTimeout(() => {
      const clearedWaiting = [...waiting];
      clearedWaiting[floorIndex] = false;
      setWaiting(clearedWaiting);
      
    }, travelTime);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-[700px] border border-gray-400">
        {Array.from({ length: TOTAL_FLOORS }, (_, idx) => {
          const floorIndex = TOTAL_FLOORS - 1 - idx;

          return (
            <FloorRows
              key={floorIndex}
              floorLabel={floorNames[floorIndex]}
              elevators={elevatorPositions.map(pos => pos === floorIndex)}
              isWaiting={waiting[floorIndex]}
              onCall={() => handleCall(floorIndex)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

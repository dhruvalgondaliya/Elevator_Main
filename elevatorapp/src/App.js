import React, { useState, useEffect, useRef } from "react";
import FloorRows from "./Component/FloorRows";
import Elevator from "./Component/Elevator";

const TOTAL_FLOORS = 10;
const TOTAL_ELEVATORS = 5;

const floorNames = [
  "ground floor", "1st", "2nd", "3rd", "4th",
  "5th", "6th", "7th", "8th", "9th",
];

const App = () => {
  const [elevatorPositions, setElevatorPositions] = useState(Array(TOTAL_ELEVATORS).fill(0));
  const [elevatorMovingTo, setElevatorMovingTo] = useState(Array(TOTAL_ELEVATORS).fill(null));
  const [waiting, setWaiting] = useState(Array(TOTAL_FLOORS).fill(false));
  const arrivalSoundRef = useRef(null);

  useEffect(() => {
    arrivalSoundRef.current = new Audio("/sounds/elevator-arrival.mp3");
  }, []);

  const handleCall = (floorIndex) => {
    const updatedWaiting = [...waiting];
    updatedWaiting[floorIndex] = true;
    setWaiting(updatedWaiting);

    const distances = elevatorPositions.map((pos, i) =>
      elevatorMovingTo[i] === null ? Math.abs(pos - floorIndex) : Infinity
    );

    const closest = distances.indexOf(Math.min(...distances));

    const updatedElevators = [...elevatorPositions];
    const updatedMovingTo = [...elevatorMovingTo];
    const travelTime = Math.abs(elevatorPositions[closest] - floorIndex) * 1000;

    updatedMovingTo[closest] = floorIndex;
    setElevatorMovingTo(updatedMovingTo);

    setTimeout(() => {
      updatedElevators[closest] = floorIndex;
      setElevatorPositions(updatedElevators);

      updatedMovingTo[closest] = null;
      setElevatorMovingTo([...updatedMovingTo]);

      const clearedWaiting = [...waiting];
      clearedWaiting[floorIndex] = false;
      setWaiting(clearedWaiting);

    }, travelTime);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-[700px] border border-gray-400 relative">
        {/* Floors */}
        {Array.from({ length: TOTAL_FLOORS }, (_, idx) => {
          const floorIndex = TOTAL_FLOORS - 1 - idx;
          return (
            <FloorRows
              key={floorIndex}
              floorLabel={floorNames[floorIndex]}
              elevators={elevatorPositions.map((pos) => pos === floorIndex)}
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

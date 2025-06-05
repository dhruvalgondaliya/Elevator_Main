import Elevator_Image from "../assets/Elevator_Image.png";

const FloorRows = ({ floorLabel, elevators, onCall, isWaiting }) => {
  return (
    <div className="flex items-center justify-between w-full h-16 border border-gray-300">
      {/* Floor label */}
      <div className="w-24 p-4  text-right font-semibold pr-4">
        {floorLabel}
      </div>

      {/* Elevator columns */}
      <div className="flex-1 grid grid-cols-5 gap-4">
        {elevators.map((hasElevator, idx) => (
          <div key={idx} className="flex items-center justify-center h-full">
            {hasElevator && (
              <img
                src={Elevator_Image}
                alt="Elevator"
                className="h-10 w-10 text-green-500"
              />
            )}
          </div>
        ))}
      </div>

      {/* Call button */}
      <div className="w-24 flex justify-end pr-4">
        <button
          onClick={onCall}
          disabled={isWaiting}
          className={`px-5 py-1 rounded-md font-semibold text-white ${
            isWaiting
              ? "bg-red-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isWaiting ? "Waiting" : "Call"}
        </button>
      </div>
    </div>
  );
};

export default FloorRows;

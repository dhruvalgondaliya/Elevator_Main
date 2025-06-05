import Elevator_Image from "../assets/Elevator_Image.png";

const FloorRows = ({ floorLabel, elevators, onCall, isWaiting }) => {
  return (
    <div className="flex items-center w-full h-16 border border-gray-400">
      {/* Floor Label */}
      <div className="w-24 h-full flex items-center justify-end pr-4 border-r border-gray-400 font-semibold bg-gray-50">
        {floorLabel}
      </div>

      {/* Elevator columns */}
      <div className="flex-1 grid grid-cols-5 border-r border-gray-400 h-full">
        {elevators.map((hasElevator, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center border-l border-gray-300 h-full"
          >
            {hasElevator && (
              <img
                src={Elevator_Image}
                alt="Elevator"
                className="h-10 w-10"
              />
            )}
          </div>
        ))}
      </div>

      {/* Call Button */}
      <div className="w-24 h-full flex items-center justify-center">
        <button
          onClick={onCall}
          disabled={isWaiting}
          className={`w-full h-full text-center font-semibold text-black  ${
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

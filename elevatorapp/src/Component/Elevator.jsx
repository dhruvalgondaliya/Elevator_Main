const Elevator = ({ index, floor, isMoving }) => {
  return (
    <div
      className={`absolute left-[${index * 70}px] w-14 h-14 flex items-center justify-center text-white font-bold rounded-xl transition-colors duration-300 ${
        isMoving ? 'bg-gray-200' : 'bg-green-600'
      }`}
      style={{
        transform: `translateY(${(9 - floor) * 68}px)`,
        transition: 'transform 1s ease-in-out',
      }}
    >
      {floor}
    </div>
  );
};

export default Elevator;

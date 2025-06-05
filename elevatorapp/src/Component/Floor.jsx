const Floor = ({ floor, isWaiting, onCall }) => {
  return (
    <div className="flex items-center justify-between h-16 border px-4 bg-white shadow-sm">
      <span className="text-lg font-medium">Floor {floor}</span>
      <button
        onClick={onCall}
        disabled={isWaiting}
        className={`px-4 py-1 rounded-full text-white font-semibold transition-colors duration-200 ${
          isWaiting ? 'bg-red-500' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isWaiting ? 'Waiting...' : 'Call'}
      </button>
    </div>
  );
};

export default Floor;

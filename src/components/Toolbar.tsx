


const Toolbar = () => {
  return (
    <div className="bg-white px-6 py-4 border-b flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between shadow-sm">
      <input
        type="text"
        placeholder="🔍 Search..."
        className="border border-gray-300 px-3 py-2 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => console.log('Search:', e.target.value)}
      />

      <div className="flex gap-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
          onClick={() => console.log('Filter button clicked')}
        >
          Filter
        </button>
        <button
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 shadow"
          onClick={() => console.log('Export button clicked')}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Toolbar;

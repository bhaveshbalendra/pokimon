/* eslint-disable react/prop-types */

const FilterInput = ({ filter, setFilter }) => {
  return (
    <div className="mt-4 flex justify-center">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FilterInput;

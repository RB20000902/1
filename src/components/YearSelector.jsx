import React from "react";

const YearSelector = ({ years, selectedYear, setSelectedYear }) => (
  <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
    {years.map((year) => (
      <button
        key={year}
        onClick={() => setSelectedYear(year)}
        className={`flex-shrink-0 px-4 py-2 rounded-full border whitespace-nowrap ${
          selectedYear === year
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        {year}
      </button>
    ))}
  </div>
);

export default YearSelector;

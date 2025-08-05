import React, { useState } from "react";
import { timelineData } from "../data/timelineData";
import YearSelector from "./YearSelector";
import TimelineTile from "./TimelineTile";
import Modal from "./Modal";

const Timeline = () => {
  const years = Object.keys(timelineData);
  const [selectedYear, setSelectedYear] = useState("2011");
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (tile) => setSelectedTile(tile);
  const closeModal = () => setSelectedTile(null);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <YearSelector
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      {/* Tiles */}
      <div className="mt-4">
        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {timelineData[selectedYear]?.map((initiative, index) => (
            <TimelineTile
              key={index}
              data={initiative}
              onClick={() => handleTileClick(initiative)}
            />
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
          {timelineData[selectedYear]?.map((initiative, index) => (
            <div key={index} className="snap-center shrink-0 w-[85%]">
              <TimelineTile
                data={initiative}
                onClick={() => handleTileClick(initiative)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedTile && <Modal data={selectedTile} onClose={closeModal} />}
    </div>
  );
};

export default Timeline;

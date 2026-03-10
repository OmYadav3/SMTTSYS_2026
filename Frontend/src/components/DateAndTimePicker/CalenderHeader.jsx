import React from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

const CalendarHeader = ({
  selectedMonth,
  selectedYear,
  handlePrevYear,
  handleNextYear,
  handlePrevMonth,
  handleNextMonth,
  HandlerYears,
  HandlerMonths,
}) => {

  return (
    <div className="flex items-center justify-center">

      <div className="flex p-2">
        <button onClick={handlePrevYear}>
          <ChevronsLeft className="w-8 h-8" />
        </button>

        <button onClick={handlePrevMonth}>
          <ChevronLeft className="w-8 h-8" />
        </button>
      </div>

      <div className="flex p-2 m-2 gap-2">

        <button onClick={HandlerYears}>
          <div className="text-xl">{selectedYear}</div>
        </button>

        <button onClick={HandlerMonths}>
          <div className="text-xl">{selectedMonth}</div>
        </button>

      </div>

      <div className="flex p-2">

        <button onClick={handleNextMonth}>
          <ChevronRight className="w-8 h-8" />
        </button>

        <button onClick={handleNextYear}>
          <ChevronsRight className="w-8 h-8" />
        </button>

      </div>

    </div>
  );
};

export default CalendarHeader;
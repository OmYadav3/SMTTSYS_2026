import React, {useState} from "react";
import { formatDate } from "@/utils/DateFunction";


const Calender = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


  return (
    <div className="z-100 ">
      
      {/* Calender Input UI */}
      <div className="w-90 ">
        <div className="flex items-center justify-between mb-8 ">
          <div className="flex items-center justify-center gap-2 text-4xl">
            <button className="px-2 py-1 text-gray-400 hover:text-white">
              &laquo;
            </button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">
              &lsaquo;
            </button>
          </div>

          <div className="font-semibold tracking-wide text-xl">
            {currentYear}
          </div>

          <div className="flex gap-2 text-4xl items-center justify-center">
            <button className="px-2 py-1 text-gray-400 hover:text-white">
              &rsaquo;
            </button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">
              &raquo;
            </button>
          </div>
        </div>

        <div className="font-bold grid grid-cols-7 text-center text-sm text-gray-400 border-b border-slate-700 pb-2 mb-2">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          <div className="text-gray-600">25</div>
          <div className="text-gray-600">26</div>
          <div className="text-gray-600">27</div>
          <div className="text-gray-600">28</div>
          <div className="text-gray-600">29</div>
          <div className="text-gray-600">30</div>
          <div className="text-gray-600">31</div>

          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">1</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">2</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">3</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">4</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">5</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">6</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">7</div>

          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">8</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">9</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">10</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">11</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">12</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">13</div>
          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">14</div>

          <div className="py-2 rounded hover:bg-slate-700 cursor-pointer">15</div>
          <div className="py-2 rounded bg-blue-600 font-semibold">16</div>

          <div className="py-2 rounded bg-slate-700">17</div>
          <div className="py-2 rounded bg-slate-700">18</div>
          <div className="py-2 rounded bg-slate-700">19</div>
          <div className="py-2 rounded bg-slate-700">20</div>
          <div className="py-2 rounded bg-slate-700">21</div>

          <div className="py-2 rounded bg-slate-700">22</div>
          <div className="py-2 rounded bg-slate-700">23</div>
          <div className="py-2 rounded bg-slate-700">24</div>
          <div className="py-2 rounded bg-slate-700">25</div>
          <div className="py-2 rounded bg-slate-700">26</div>
          <div className="py-2 rounded bg-slate-700">27</div>
          <div className="py-2 rounded bg-slate-700">28</div>

          <div className="text-gray-600">1</div>
          <div className="text-gray-600">2</div>
          <div className="text-gray-600">3</div>
          <div className="text-gray-600">4</div>
          <div className="text-gray-600">5</div>
          <div className="text-gray-600">6</div>
          <div className="text-gray-600">7</div>
        </div>
      </div>
    </div>
  );
};

export default Calender;

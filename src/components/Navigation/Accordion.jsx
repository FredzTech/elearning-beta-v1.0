import React, { useState } from "react";
import {
  AccordionItem,
  BackBtn,
  FancyMessage,
  HomeBtn,
} from "../../components";
import { useParams } from "react-router-dom";
import { PlusIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useLocation, Link } from "react-router-dom";
const Accordion = ({ unitData, closeSideBar }) => {
  const chapterTotals = unitData && unitData?.unitChapters?.length;
  const roles = JSON.parse(localStorage.getItem("roles"));
  const location = useLocation();
  // USING THE CHAPTER ID WE CAN SHOW THE LESSONS.
  const unitID = unitData && unitData._id;
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="relative z-10 flex flex-col items-center  backdrop-blur-lg bg-slate-300 laptop:bg-slate-100/40 max-h-full laptop:h-full laptop:rounded-lg  overflow-y-auto  ">
      {/* ACCORDION HEADER */}
      <div className="flex items-center justify-between w-full  pr-2 h-14  font-bold text-md text-slate-200 bg-primary text-center uppercase py-4 laptop:rounded-t-lg ">
        <HomeBtn isBlue={true} icon={true} />
        <span className="uppercase">Chapters</span>
        <div className={` flex-row-centered gap-1 `}>
          <div
            className={`${
              roles?.includes("EM-202") || roles?.includes("EM-203")
                ? "flex"
                : "hidden"
            } `}
          >
            <Link
              to={`/new-chapter`}
              className="cta-btn group bg-black laptop:bg-white h-5 "
              state={{
                background: location,
                unitID: unitID,
                chapterTotals: chapterTotals,
              }}
            >
              <PlusIcon className=" text-white laptop:text-slate-900 group-hover:text-white m-0.5 hover:cursor-pointer h-3 laptop:h-4" />
            </Link>
          </div>
          <div
            className="text-white m-1 hover:cursor-pointer w-7 h-7 laptop:hidden"
            onClick={() => {
              closeSideBar();
            }}
          >
            <XCircleIcon className="icon-styling text-black laptop:text-slate-100" />
          </div>
        </div>
      </div>
      {/* Accordion Body */}
      {unitData && unitData.unitChapters.length > 0 ? (
        <div className="w-full  bg-slate-200   laptop:h-full overflow-y-auto overflow-x-hidden  ">
          {unitData.unitChapters.map((chapter, chapterIndex) => (
            <AccordionItem
              unitData={unitData}
              key={`chapter-${chapterIndex}`}
              chapter={chapter}
              chapterIndex={chapterIndex}
              unitID={unitID}
              onToggle={() => handleToggle(chapterIndex)}
              closeSideBar={closeSideBar}
              active={clicked === chapterIndex}
            />
          ))}
        </div>
      ) : (
        <FancyMessage message="The unit has no chapters" />
      )}
    </div>
  );
};

export default Accordion;

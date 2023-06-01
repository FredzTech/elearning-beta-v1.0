import React, { useEffect, useState } from "react";
import {
  Accordion,
  ReturnBackBtn,
  ContentSection,
  UnitNav,
} from "../../components";
import { Outlet, useParams } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import axios from "../../axios";
const ContentPage = () => {
  const roles = JSON.parse(localStorage.getItem("roles"));
  const { unitID } = useParams();
  const [unitData, setUnitData] = useState({});
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessonType, setLessonType] = useState(null);
  const [areChapters, setAreChaptersPresent] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    fetchUnitData();
  }, [unitID, formCompleted]);

  useEffect(() => {
    if (currentLesson !== null) {
      identifyAndUpdateLessonType(currentLesson?.lessonUrl);
      console.log(
        `Updated current lesson data ${JSON.stringify(currentLesson)}`
      );
    }
  }, [currentLesson]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("formCompleted") === "true") {
      setFormCompleted(true);
    }
  }, [location.search]);

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  const fetchUnitData = async () => {
    try {
      const { data, status } = await axios.get(`/unit/${unitID}`);

      if (status == 200) {
        if (data) {
          setUnitData(data);
        }
        if (data?.UnitChapters?.length > 0) {
          setAreChaptersPresent(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateCurrentLesson = (newLessonData) => {
    if (newLessonData !== null) {
      setCurrentLesson(newLessonData);
    }
  };

  const identifyAndUpdateLessonType = (lessonUrl) => {
    if (lessonUrl) {
      const lessonType = lessonUrl.split(".")[1];
      setLessonType(lessonType);
      return lessonType;
    }
  };

  if (Object.keys(unitData).length > 0) {
    return (
      <main className="flex relative tablet:grid  tablet:grid-cols-3 laptop:grid-cols-4 w-full h-screen">
        <article
          className={` ${
            sideBarOpen ? "block" : "hidden"
          }   w-full h-full absolute tablet:relative tablet:block  tablet:col-span-1 `}
        >
          <Accordion
            unitData={unitData}
            fetchUnitData={fetchUnitData}
            updateCurrentLesson={updateCurrentLesson}
            closeSideBar={closeSideBar}
          />
        </article>

        <article className="w-full laptop:col-span-3 tablet:col-span-2 h-full overflow-y-auto flex px-2 flex-col rounded-lg pb-2">
          <div className="w-full text-lg text-center text-white my-2 py-2 bg-primary rounded-lg ">
            <div
              onClick={openSideBar}
              className={`${
                sideBarOpen ? "hidden" : "block"
              } absolute right-2 text-2xl  border-none  flex-col-centered px-2 tablet:hidden `}
            >
              <RiMenu3Fill />
            </div>
            NAVBAR WITH ICONS
          </div>
          {lessonType === "mp4" ? (
            <>
              <ContentSection
                currentLessonUrl={currentLesson?.lessonUrl}
                lessonName={currentLesson?.lessonName}
              />
              <div className="border-none border-slate-400 rounded-lg w-full">
                <UnitNav />
                <Outlet
                  context={{
                    currentLesson: currentLesson,
                    unitData: unitData,
                    fetchUnitData: fetchUnitData,
                    updateCurrentLesson: updateCurrentLesson,
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-full flex-col-centered bg-slate-400 bg-opacity-30 rounded-lg p-3">
                <p className="text-center uppercase py-3 rounded-lg">
                  No lesson has been selected. Open sidebar to select a lesson
                  and get started.
                </p>
                <button
                  onClick={openSideBar}
                  className="text-lg capitalize px-2 w-36 m-3 py-2 rounded-md bg-primary hover:bg-purple-600 text-white text-center tablet:hidden"
                >
                  Open SideBar
                </button>
              </div>
            </>
          )}
        </article>
      </main>
    );
  } else if (Object.keys(unitData).length === 0) {
    return (
      <div className="w-full h-screen flex-col-centered">
        This unit is yet to be populated
        <ReturnBackBtn />
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex-col-centered">
        Something wrong happened
        <ReturnBackBtn />
      </div>
    );
  }
};

export default ContentPage;

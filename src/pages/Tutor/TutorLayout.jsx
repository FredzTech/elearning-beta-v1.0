import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { TutorSideBar } from "../../components";
import { RiMenu3Fill } from "react-icons/ri";
import axios from "../../axios";
const TutorLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [tutorData, setTutorData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("roles");
    window.location.reload();
  };
  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  useEffect(() => {
    fetchTutorDetails();
  }, []);
  const accessToken = localStorage.getItem("accessToken");

  const fetchTutorDetails = async () => {
    try {
      const { data, status } = await axios.get("/auth/tutor", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (status === 200) {
        console.log(data);
        setTutorData(data);
      }
    } catch (error) {
      if (error.response.status === 403) {
        handleLogout();
      } else {
        console.log(error.response.status);
      }
    }
  };
  return (
    <main className="flex relative tablet:grid  tablet:grid-cols-3 laptop:grid-cols-4 w-full h-screen">
      <article
        className={` ${
          sideBarOpen ? "block" : "hidden"
        }   w-full h-full absolute tablet:relative tablet:block  tablet:col-span-1 `}
      >
        <TutorSideBar tutor={tutorData} closeSideBar={closeSideBar} />
      </article>
      <article className="w-full laptop:col-span-3 tablet:col-span-2 h-full laptop:overflow-y-auto flex px-2 flex-col rounded-lg pb-2">
        <div className="flex px-2 items-center justify-end w-full text-lg text-center text-white my-2 py-2 bg-primary rounded-lg">
          <div
            onClick={openSideBar}
            className={`${
              sideBarOpen ? "hidden" : "block"
            } absolute right-2 text-2xl w-10 h-10 border-2 border-primary rounded-full flex-col-centered `}
          >
            <RiMenu3Fill />
          </div>
        </div>
        <Outlet context={tutorData} />
      </article>
    </main>
  );
};

export default TutorLayout;

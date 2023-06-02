import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseID, courseImage, courseTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto hover:scale-105 ease-in-out duration-300">
      <img
        src={`https://us-central1-elearning-module-a887d.cloudfunctions.net/app/s3Direct/${courseImage}`}
        alt="course image"
        className="bg-gray-300 h-44 w-44 rounded-lg shadow-md bg-cover bg-center"
      ></img>
      <div className="-mt-10 w-36 bg-white  shadow-lg rounded-lg overflow-hidden">
        <div className="p-1 text-center text-sm font-bold uppercase tracking-wide text-gray-800">
          {courseTitle}
        </div>
        <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
          <Link to={courseID}>
            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 w-full">
              View the course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

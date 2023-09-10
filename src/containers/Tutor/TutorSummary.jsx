import React from "react";
import {
  UserProfile,
  UserProfileSkeleton,
  TableSkeleton,
  TutorUnitsTable,
  PageTitle,
  DoughnutChart,
} from "../../components";
const TutorSummary = ({ userDataQuery, pieChartData, totalLessons }) => {
  return (
    <div className="w-full laptop:w-3/4  flex flex-col justify-start h-full overflow-auto overflow-x-hidden p-3 gap-3 ">
      <div className="w-full  flex phone:flex-col tablet:flex-row justify-between items-center gap-5">
        <div className="phone:w-full tablet:w-3/5 laptop:w-full  bg-slate-300 rounded-xl phone:h-36 tablet:h-full laptop:h-40 flex flex-col-centered relative ">
          <h1 className="font-bold text-lg uppercase w-full h-12 flex-row-centered ">
            GREETINGS
          </h1>
          <p className="text-center text-lg px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            sint.
          </p>
        </div>
        <div className="phone:hidden tablet:w-2/5 tablet:flex laptop:hidden">
          {userDataQuery.status === "loading" ? (
            <UserProfileSkeleton />
          ) : (
            <UserProfile
              name={`${userDataQuery?.data?.firstName}  ${userDataQuery?.data?.surname} `}
              role="tutor"
            />
          )}
        </div>
      </div>
      <div className="content p-2 m-2 rounded-xl w-full   flex flex-col justify-start ">
        {userDataQuery.status === "loading" ? (
          <TableSkeleton />
        ) : (
          <div className="flex-col-centered gap-5">
            <PageTitle title="List of units" />
            <TutorUnitsTable unitsData={userDataQuery?.data?.units} />
          </div>
        )}
      </div>
      <div className="flex phone:flex-col tablet:flex-col w-full gap-5   ">
        <div className=" h-full w-full tablet:w-full gap-5  flex flex-col items-center justify-start  rounded-xl">
          <div className=" phone:w-full gap-5  flex phone:flex-col tablet:flex-row tablet:w-full tablet:justify-between  ">
            <div className="bg-slate-300 rounded-lg phone:h-64 tablet:h-full phone:w-full tablet:w-2/3 order-2 "></div>
            <div className="tablet:h-full phone:w-full tablet:w-1/3 flex-row-centered order-1">
              <DoughnutChart
                chartData={pieChartData}
                doughnutName="Lessons"
                doughnutValue={totalLessons}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSummary;

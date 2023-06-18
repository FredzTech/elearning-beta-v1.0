import { AdminCard } from "../../components";
import { tutorIcon, coursesIcon, studentsIcon, lessonIcon } from "../../assets";

const AdminDashboard = () => {
  return (
    <div id="main" className="w-full h-full flex-col-centered justify-start">
      <div
        id="grid"
        className="w-full p-5 grid gap-5 phone:grid-cols-1 tablet:grid-cols-2 m-4"
      >
        <AdminCard Icon={studentsIcon} Number="100" Text="Students" />
        <AdminCard Icon={tutorIcon} Number="10" Text="Tutors" />
        <AdminCard Icon={lessonIcon} Number="300" Text="Lessons" />
        <AdminCard Icon={coursesIcon} Number="20" Text="Courses" />
      </div>
      <div
        id="table"
        className="w-full flex flex-col jusitfy-start items-center"
      >
        {/* <PageTitle text="units summary" /> */}
        <p className="text-center bg-rose-400 rounded-lg p-3">
          Find an alternative way of displaying units data on the dashboard.
          Simplistic beauty.
        </p>
        {/* <UnitsAdminTable /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;

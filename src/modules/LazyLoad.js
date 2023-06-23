import { lazy } from "react";

const componentPaths = {
  CourseForm: "../components/Forms/CourseForm.jsx",
  ChapterForm: "../components/Forms/ChapterForm.jsx",
  LessonForm: "../components/Forms/LessonForm.jsx",
  UnitForm: "../components/Forms/UnitForm.jsx",
  RequireAuth: "../components/General/RequireAuth.jsx",
  LogInForm: "../components/Forms/LogInForm.jsx",
  ResourceForm: "../components/Forms/ResourceForm.jsx",
  RegistrationForm: "../components/Forms/RegistrationForm.jsx",
  QuillEditor: "../components/MediaHandlers/QuillEditor.jsx",
  CommentsSection: "../components/Sections/CommentsSection.jsx",
  ResourcesSection: "../components/Sections/ResourcesSection.jsx",
  CourseOverview: "../components/Sections/CourseOverview.jsx",
  Layout: "../components/Sections/Layout.jsx",
  AlertBox: "../components/General/AlertBox.jsx",
  HomePage: "../containers/HomePage.jsx",
  TutorPage: "../containers/Tutor/TutorPage.jsx",
  ContentPage: "../containers/Tutor/ContentPage.jsx",
  TutorUnitsPage: "../containers/Tutor/TutorUnitsPage.jsx",
  AdminDashboard: "../containers/Admin/AdminDashboard.jsx",
  UsersPage: "../containers/Admin/UsersPage.jsx",
  UsersLayout: "../containers/UsersPage/UsersLayout.jsx",
  DraftPage: "../containers/DraftPage.jsx",
  CourseAdminPage: "../containers/Admin/CourseAdminPage.jsx",
  Forbidden: "../containers/Forbidden.jsx",
  UnitOverview: "../containers/UnitOverview.jsx",
  NotFound: "../containers/NotFound.jsx",
};

export function LazyLoad(componentName) {
  const componentPath = componentPaths[componentName];
  return lazy(async () => {
    const component = await import(componentPath /* @vite-ignore */);
    return component;
  });
}

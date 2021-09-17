import Demo from "./Demo";
import Grades from "./Grades";
import Home from "./Home";
import NewGrade from "./NewGrade";
import Skills from "./Skills";
import UserListLoader from "./UsersListLoader";

export const routes = [
  { pathname: "/", title: "Home", component: Home },
  { pathname: "/gradesYO", title: "Grades", component: Grades },
  { pathname: "/users", title: "Users", component: UserListLoader },
  { pathname: "/skills", title: "Skills", component: Skills },
  { pathname: "/new_grade", title: "New Grade", component: NewGrade },
  { pathname: "/demo", title: "Demo", component: Demo },
];

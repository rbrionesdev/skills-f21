import axios from "axios";
import React, { useState, useEffect } from "react";
import useAxiosOnMount from "../hooks/useAxiosOnMount";

export default function NewGrade() {
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const { data: usersYo, loading: usersLoading } =
    useAxiosOnMount("/api/users");
  const { data: skillsYo, loading: skillsLoading } =
    useAxiosOnMount("/api/skills");

  useEffect(() => {
    getData1();
  }, []);

  // use this way if you need the data for sunbsaquent api calls
  const getData = async () => {
    try {
      console.log("before userRes,");
      // we are awaiting for this to finish, so code stops right here
      let usersRes = await axios.get("/api/users");
      setUsers(usersRes.data);
      let skillsRes = await axios.get("/api/skills");
      setSkills(skillsRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  // use this way if you just need and they don't depend on each others
  const getData1 = async () => {
    try {
      // we fire off both axios calls at the sametime
      // but still await for them to all finsih
      let obj = await axios.all([
        axios.get("/api/users"),
        axios.get("/api/skills"),
      ]);
      console.log("obj:", obj);
      setUsers(obj[0].data);
      setSkills(obj[1].data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>NewGrade</h1>
      <p>users: {users.length}</p>
      <p>skills: {skills.length}</p>
      <p>{usersLoading ? "loading" : usersYo.length}</p>
      <p>{skillsLoading ? "loading" : skillsYo.length}</p>
    </div>
  );
}

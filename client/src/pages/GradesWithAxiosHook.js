import React, { useState, useEffect } from "react";
import axios from "axios";
import SematicLoader from "../components/SemanticLoader";
import SemanticLoadError from "../components/SemanticError";
import useAxiosOnMount from "../hooks/useAxiosOnMount";

export default function GradesWithAxiosHook() {
  //{data:grades} desturcing data here and renaming it to grades
  const { data: grades, loading, error } = useAxiosOnMount("/api/grades");

  const renderGrades = () => {
    if (loading) return <SematicLoader />;
    if (error)
      return (
        <SemanticLoadError
          header={"Error occurded getting grades"}
          error={error}
        />
      );
    if (grades.length === 0) {
      return <p>no grades</p>;
    }
    return grades.map((g) => {
      return (
        <div key={g.id}>
          <p>
            {g.user.name} got {g.score} on {g.skill.name}
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Grades</h1>
      {renderGrades()}
    </div>
  );
}

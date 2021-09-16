import React, { useState, useEffect } from "react";
import axios from "axios";
import SematicLoader from "../components/SemanticLoader";
import SemanticLoadError from "../components/SemanticError";

export default function Grades() {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getGrades();
  }, []);

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

  const getGrades = async () => {
    try {
      // reset errot
      setError(null);
      let res = await axios.get("/api/gradess");
      setGrades(res.data);
    } catch (err) {
      setError(err);
    } finally {
      // finally block runs regaradless if successfull or not
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Grades</h1>
      {renderGrades()}
    </div>
  );
}

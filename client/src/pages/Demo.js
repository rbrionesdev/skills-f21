import React from "react";
import SemanticLoadError from "../components/SemanticError";
import SematicLoader from "../components/SemanticLoader";
import useAxiosOnMount from "../hooks/useAxiosOnMount";

export default function Demo() {
  const { data: grades, loading, error } = useAxiosOnMount("/api/tp_grades");
  const renderData = () => {
    return grades.map((d, i) => {
      return (
        <div>
          <p>
            {i}) user: {d.user_name} skill: {d.skill_name} score: {d.score}
          </p>
        </div>
      );
    });
  };
  // is this best way way

  // 4. is efficent -> speed/memory
  // 5. readable
  const getUniqueUsers = () => {
    return grades.reduce((acc, user) => {
      if (!acc.includes(user.user_name)) {
        acc.push(user.user_name);
      }
      return acc;
    }, []);
  };
  const getAverage = () => {
    const scoreTotals = [];
    grades.forEach((grade) => {
      let index = scoreTotals.findIndex(
        (scoreTotal) => scoreTotal.skill_name === grade.skill_name
      );
      // cound not find match in averges
      if (index === -1) {
        scoreTotals.push({
          skill_name: grade.skill_name,
          score: grade.score,
          count: 1,
        });
      }
      // means it has already been added to my averages array
      // so i need to update
      else {
        scoreTotals[index].score += grade.score;
        scoreTotals[index].count++;
      }
    });

    return scoreTotals.map((a) => {
      return (
        <div>
          <h1>{a.skill_name}</h1>
          <p>{a.score / a.count}</p>
        </div>
      );
    });
  };

  const renderUsers = () => {
    const uniqueUsers = getUniqueUsers();
    return uniqueUsers.map((u) => <p>{u}</p>);
  };
  if (loading) return <SematicLoader />;
  if (error) return <SemanticLoadError />;
  return (
    <div>
      <h1>Demo</h1>
      {renderData()}
      {renderUsers()}
      {/* {renderSkills()} */}
      {getAverage()}
    </div>
  );
}

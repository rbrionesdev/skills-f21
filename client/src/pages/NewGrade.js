import React, { useState } from "react";
import SematicLoader from "../components/SemanticLoader";
import SemanticError from "../components/SemanticError";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Button, Form, Input, Select } from "semantic-ui-react";
import axios from "axios";

// Bonus create a dropdownloader
export default function NewGrade() {
  const [skillId, setSkillId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [score, setScore] = useState(0);
  const {
    data: users,
    loading: usersLoading,
    error: uerr,
  } = useAxiosOnMount("/api/users");
  const {
    data: skills,
    loading: skillsLoading,
    error: serr,
  } = useAxiosOnMount("/api/skills");

  const handleChange = (e, { value }) => {
    setUserId(value);
  };
  const handleSkillChange = (e, { value }) => {
    setSkillId(value);
  };
  const handleSubmit = async () => {
    let res = await axios.post("/api/grades", {
      score,
      skill_id: skillId,
      user_id: userId,
    });
  };

  const renderUsers = () => {
    if (usersLoading) {
      return <SematicLoader />;
    }
    if (uerr) {
      return <SemanticError error={uerr} />;
    }
    // we map data into options =>  { key: 'bj', value: 'bj', text: 'Benin' },
    const usersOptions = users.map((u) => {
      return { key: u.id, value: u.id, text: u.name };
    });

    return (
      <Select
        onChange={handleChange}
        placeholder="Select User"
        options={usersOptions}
      />
    );
  };

  const renderSkills = () => {
    if (skillsLoading) {
      return <SematicLoader />;
    }
    if (serr) {
      return <SemanticError error={serr} />;
    }
    // we map data into options =>  { key: 'bj', value: 'bj', text: 'Benin' },
    const skillsOptions = skills.map((s) => {
      return { key: s.id, value: s.id, text: s.name };
    });

    return (
      <Select
        onChange={handleSkillChange}
        placeholder="Select Skill"
        options={skillsOptions}
      />
    );
  };

  return (
    <div>
      <h1>NewGrade</h1>
      <Form onSubmit={handleSubmit}>
        {renderUsers()}
        {renderSkills()}
        <Input
          placeholder="enter score"
          value={score}
          onChange={(e, { value }) => setScore(value)}
        />
        <Button type={"submit"}>add</Button>
      </Form>
    </div>
  );
}

import React from "react";
import { Button, Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function Skills() {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1>Skills Page HERE</h1>
      <Button>new Skill</Button>?
      <ListLoader
        errorMessage={""}
        header={"Skills YO"}
        url="/api/skills"
        renderData={(skill) => (
          <Card onClick={() => handleClick(skill.id)}>
            <h1>{skill.name}</h1>
            <p>{skill.description}</p>
          </Card>
        )}
      />
    </div>
  );
}

import React from "react";
import { Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function UserListLoader() {
  return (
    <div>
      <h1>UserListLoader</h1>
      <ListLoader
        url="/api/users"
        renderData={(u) => {
          return (
            <Card>
              <p>{u.name}</p>
            </Card>
          );
        }}
      />
    </div>
  );
}

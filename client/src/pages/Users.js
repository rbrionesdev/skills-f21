import React from "react";
import SemanticLoadError from "../components/SemanticError";
import SematicLoader from "../components/SemanticLoader";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import UserListLoader from "./UsersListLoader";

export default function Users() {
  const { data: users, loading, error } = useAxiosOnMount("/api/users");

  const renderUsers = () => {
    if (loading) return <SematicLoader />;
    if (error)
      return (
        <SemanticLoadError
          header={"Error occurded getting users"}
          error={error}
        />
      );
    return users.map((u) => {
      return (
        <div>
          <p>{u.name}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>With Users list loader</h1>
      <UserListLoader />

      {/* 
      <h1>Users</h1>
      {renderUsers()} */}
    </div>
  );
}

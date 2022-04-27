import React from "react";
import BlogForm from "../components/BlogForm";
import BlogCard from  "../components/BlogCard"

const Dashboard = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "rgb(24,101,129)",
          fontFamily: "fantasy",
          marginTop: "1rem"
        }}
      >
        ──── DASHBOARD ────
      </h1>
      <BlogForm></BlogForm>
      <BlogCard></BlogCard>
    </div>
  );
};

export default Dashboard;

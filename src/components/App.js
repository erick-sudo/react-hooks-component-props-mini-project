import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList"

console.log(blogData.image);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} imageSrc={blogData.image}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;

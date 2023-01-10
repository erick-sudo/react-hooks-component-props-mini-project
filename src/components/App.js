import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList"

console.log(blogData.image);

function App() {
  return (
    <div className="App">
      <Header nameofblog={blogData.name}/>
      <About aboutText={blogData.about} imageSrc={blogData.image}/>
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;

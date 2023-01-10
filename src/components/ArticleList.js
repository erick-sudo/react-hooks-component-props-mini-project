import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const posts_ = posts.map(post => {
        return (
            <>
                <Article title={post.title} date={post.date} preview={post.preview}/>
            </>
        )
    })
    
    return (
        <main>
            {posts_}
        </main>
    );
}

export default ArticleList
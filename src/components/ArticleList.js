import React from "react";
import Article from "./Article";

function ArticleList({articles}) {
    const _articles = articles.map(article => {
        return (
            <>
                <Article title={article.title} date={article.date} preview={article.preview}/>
            </>
        )
    });
    return (
        <main>
            {_articles}
        </main>
    );
}

export default ArticleList
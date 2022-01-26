import React from 'react';

const Articles = ({articles}) => {
    console.log('FROM ARTICLES:', articles)
  return (
      <div>
          {articles.data.map((article) => {
              return (
                  <div>{article.id}</div>
              )
          })}
      </div>
  );
};

export default Articles;

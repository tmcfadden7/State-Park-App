import React from 'react';

const Articles = ({articles}) => {
    console.log('FROM ARTICLES:', articles)
  return (
      <>
          {articles.data.map((article) => {
              return (
                <div key={article.id} className='col-sm-4'>
                    <h4>{article.title}</h4>
                    <img className='img-thumbnail' src={article.listingImage.url} alt={article.listingImage.altText} />
                    <p>{article.listingDescription}</p>
                    
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#articleModal">
                    Read full article
                    </button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="articleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{article.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <iframe src={article.url} width="100%" height="400vh" title={article.title}></iframe>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              )
          })}
      </>
  );
};

export default Articles;

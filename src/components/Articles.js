import React from 'react';

const Articles = ({articles}) => {
    // console.log('FROM ARTICLES:', articles)
  return (
      <>
          {articles.data.map((article) => {
              return (
                <div key={article.id} className='col-sm-4'>
                    <img className='img-thumbnail' src={article.listingImage.url} alt={article.listingImage.altText} />
                    <h4 className='h4 mt-3'>{article.title}</h4>
                    <p>{article.listingDescription}</p>
                    
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={`#articleModal${article.id}`}>
                    Read full article
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={`articleModal${article.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{article.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <iframe src={article.url} width="100%" height="400vh" title={article.title}></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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

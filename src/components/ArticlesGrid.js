import Articles from "./Articles";

const ArticlesGrid = ({articles}) => {
  return (
    <div className="container py-4">
        <div className="row">
            <div className="col-12">
                <h2 className="h2 text-center mb-5">Articles</h2>
            </div>
        </div>
        <div className="row">
            <Articles articles={articles} />
        </div>
    </div>
  );
};

export default ArticlesGrid;

import Articles from "./Articles";

const ArticlesGrid = ({articles}) => {
  return (
    <div className="container py-4">
        <div className="row">
            <div className="col-sm-4">
                <Articles articles={articles} />
            </div>
        </div>
    </div>
  );
};

export default ArticlesGrid;

import Articles from "./Articles";

const ArticlesGrid = ({articles}) => {
  return (
    <div className="container py-4">
        <div className="row">
            <Articles articles={articles} />
        </div>
    </div>
  );
};

export default ArticlesGrid;

import Articles from "./Articles";

const ArticlesGrid = ({articles}) => {
  return (
    <div className="container pt-5" id='articles'>
        <div className="row">
            <Articles articles={articles} />
        </div>
    </div>
  );
};

export default ArticlesGrid;

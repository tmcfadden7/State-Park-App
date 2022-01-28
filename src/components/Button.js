const Button = ({offset, setOffset}) => {
  return (
    <div className="container">
        <div className="row">
            {offset === 0 ? '' : <button onClick={() => setOffset(offset - 3)} className="btn btn-danger">Last 3</button>}
            <button onClick={() => setOffset(offset + 3)} className="btn btn-success">Next 3</button>
        </div>
    </div>
    );
};

export default Button;

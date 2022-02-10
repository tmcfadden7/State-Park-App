const Button = ({offset, setOffset}) => {
  return (
    <div className="container pb-3 my-3">
        <div className={`row ${offset !== 0 ? 'justify-content-between' : 'justify-content-center '}`}>
            {offset === 0 ? '' : <button onClick={() => setOffset(offset - 3)} className="btn btn-warning">Last 3</button>}
            <button onClick={() => setOffset(offset + 3)} className={`btn btn-warning ${offset !== 0 ? '': 'btn-lg px-5' }`}>Next 3</button>
        </div>
    </div>
    );
};

export default Button;

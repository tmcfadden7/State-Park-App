const Button = ({ offset, setOffset }) => {
	console.log('OFFSET', offset);
	return (
		<section id='action-button'>
			<div className='container pb-3 my-5'>
				<div
					className={`row ${
						offset !== 0 ? 'justify-content-between' : 'justify-content-center '
					}`}
				>
					{offset === 0 ? (
						''
					) : (
						<div className='col-auto p-0'>
							<button
								onClick={() => setOffset(offset - 4)}
								className='btn btn-warning'
							>
								Last 4
							</button>
						</div>
					)}
					<div className='col-auto ms-auto p-0'>
						<button
							onClick={() => setOffset(offset + 4)}
							className={`btn btn-warning ${offset !== 0 ? '' : 'btn-lg px-5'}`}
						>
							Next 4
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Button;

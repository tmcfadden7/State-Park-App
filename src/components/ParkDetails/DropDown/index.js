import React from 'react';

const DropDown = ({ title, body, targetIndex }) => {
	return (
		<>
			<button
				className='btn w-100 p-3 fs-5 text fw-bolder border-bottom'
				style={{ backgroundColor: '#e39a37' }}
				type='button'
				data-bs-toggle='collapse'
				data-bs-target={`#multiCollapseExample${targetIndex}`}
				aria-expanded='false'
				aria-controls={`multiCollapseExample${targetIndex}`}
			>
				{title}
			</button>
			<div className='col'>
				<div
					className='collapse multi-collapse'
					id={`multiCollapseExample${targetIndex}`}
				>
					<div className='card card-body'>{body}</div>
				</div>
			</div>
		</>
	);
};

export default DropDown;

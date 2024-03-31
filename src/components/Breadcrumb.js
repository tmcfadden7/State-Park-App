import { Link } from 'react-router-dom';

const Breadcrumb = () => {
	return (
		<nav aria-label='breadcrumb' style={{ background: '#e9ecef' }}>
			<div className='container'>
				<div className='row justify-content-center align-items-center'>
					<div className='col col-lg-8'>
						<ol className='breadcrumb my-1'>
							<li className='breadcrumb-item'>
								<Link to='/'>Home</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								Park Details
							</li>
						</ol>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Breadcrumb;

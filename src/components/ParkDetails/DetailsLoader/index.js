import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const DetailsLoader = () => {
	return (
		<>
			<div className='row justify-content-center'>
				<div className='col-8'>
					<Skeleton count={1} height={'50px'} style={{ width: '175px' }} />
					<Skeleton count={2} style={{ width: '175px' }} />
				</div>
			</div>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-8'>
					<Skeleton height={'500px'} />
				</div>
				<div className='col-12 col-md-8 mb-2'>
					<Skeleton
						containerClassName='px-2 pt-4 d-flex flex-column'
						count={6}
					/>
				</div>
			</div>
		</>
	);
};

export default DetailsLoader;

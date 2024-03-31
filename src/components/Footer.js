function Footer() {
	return (
		<>
			<section id='footer'>
				<hr />
				<div className='container'>
					<div className='d-flex justify-content-center'>
						<div>
							<h1 className='h3 text-center'>State Parks</h1>
							<p className='text-center lead'>
								Copyright {new Date().getFullYear()}
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;

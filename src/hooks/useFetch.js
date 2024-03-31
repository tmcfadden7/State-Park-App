import { useEffect, useState } from 'react';

const useFetch = (endpoint, makeReq = true) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		const fetchData = async () => {
			try {
				if (makeReq) {
					const endpointPath = `${endpoint}&api_key=${process.env.REACT_APP_STATE_PARK_API_KEY}`;
					const fetchDataCall = await fetch(endpointPath, { signal });
					const dataRes = await fetchDataCall.json();

					// Check if the request was not aborted before updating the state
					if (!signal.aborted) {
						setData(dataRes);
						setIsLoading(false);
					}
				}
			} catch (error) {
				console.log('Debug: Fetch Error: ', error);
				setIsError(true);
				// Check if the request was not aborted before updating the state
				if (!signal.aborted) {
					console.log('Debug: Abort Fetch Error', error.message);
					// setError(err.message);
				}
			}
		};

		fetchData();

		// Clean-up function to abort the request when the component is unmounted
		return () => {
			abortController.abort();
		};
	}, [endpoint, makeReq]);

	return { data, isLoading, isError };
};

export default useFetch;

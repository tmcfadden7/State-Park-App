import { useMemo } from 'react';

export const useParkDetailsInfo = (parksData) => {
	const hoursOfOperation = useMemo(() => {
		return parksData?.data?.map((park) => {
			return (
				<>
					{park.operatingHours.length &&
						park.operatingHours.map((hours) => {
							return (
								<>
									<p>{hours.description}</p>
									{Object.entries(hours.standardHours).map(
										([key, value], index) => (
											<div key={index}>
												<p>
													<strong>{key.toLocaleUpperCase()}</strong>: {value}
												</p>
											</div>
										)
									)}
								</>
							);
						})}
				</>
			);
		});
	}, [parksData?.data]);

	const additionalAddresses = useMemo(() => {
		return parksData?.data?.map((park) => {
			return (
				<>
					{park.addresses.length &&
						park.addresses.map((address, index) => {
							return (
								<p key={address.line1 + index}>
									<strong>{address.type}</strong> <br />
									{address.line1},<br /> {address.city}, {address.stateCode}{' '}
									{address.postalCode}
									<br />
									{address.countryCode}
								</p>
							);
						})}
				</>
			);
		});
	}, [parksData?.data]);

	const contactInformation = useMemo(() => {
		return parksData?.data?.map((park) => {
			return (
				<>
					{park.contacts.phoneNumbers.length &&
						park.contacts.phoneNumbers.map((phone, index) => {
							return (
								<p key={phone.phoneNumber + index}>
									<strong>{phone.type}</strong>: {phone.phoneNumber}
								</p>
							);
						})}
					{park.contacts.emailAddresses.length &&
						park.contacts.emailAddresses.map((email, index) => {
							return (
								<p key={email.emailAddress + index}>
									<strong>Email</strong>: {email.emailAddress}
								</p>
							);
						})}
				</>
			);
		});
	}, [parksData?.data]);

	return { hoursOfOperation, additionalAddresses, contactInformation };
};

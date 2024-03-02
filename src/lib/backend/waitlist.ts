export async function isRegisteredWaitlist(principalId: string) {
	const req = await fetch(
		`https://getestatedaowaitlistentry-5nps3y6y6a-uc.a.run.app?principalId=${principalId}`
	);
	const res = await req.json();
	return res.exists;
}

export async function registerForWaitlist(principalId: string, data: object) {
	const req = await fetch(
		'https://us-central1-hot-or-not-aad91.cloudfunctions.net/submitEstateDAOWaitlist',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ principalId, ...data })
		}
	);
	const res = await req.json();
	return res.success;
}

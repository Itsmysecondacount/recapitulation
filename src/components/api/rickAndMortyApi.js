import { useEffect, useState } from 'react';

const urlBase = 'https://rickandmortyapi.com/api/character';

const rickAndMortyApi = () => {
	const [urlFinal, setUrlFinal] = useState(urlBase);
	const [allData, setAllData] = useState({});
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchFunction = async () => {
			const res = await fetch(urlFinal);
			console.log(res);
			const resJson = await res.json();
			console.log(resJson, 'clg');
			setAllData(resJson);
			setData((prev) => [...prev, ...resJson.results]);
		};

		fetchFunction();
	}, [urlFinal]);

	const loadMore = () => {
		setUrlFinal(allData.info.next);
	};

	return { data, loadMore };
};

export default rickAndMortyApi;

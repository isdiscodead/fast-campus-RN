import React, { useEffect } from 'react'

export default function useFetch() {
    const [data, setData] = useState(null);

    const fetchUrl = ( type ) => {
        fetch(baseUrl + '/' + type)
        .then((res) => res.json)
        .then((res) => setData(res));
    };

    // 1회만 실행 
    useEffect(() => {
        fetchUrl(initialType);
    }, []);


  return { data, fetchUrl }
}

import { useEffect, useState } from 'react';

function useFetch() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(`http://localhost:3000/datas/projects.json`);
          const datas = await response.json();
          setData(datas);
          setLoading(true);
      }
      fetchData();
    }, [loading])
  
    return ( data)
}  

export default useFetch;
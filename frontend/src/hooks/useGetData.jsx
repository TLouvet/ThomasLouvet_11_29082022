import { useEffect, useState } from "react";

/**
 * Query data from selected path
 * @param {string} id 
 * @param {string | undefined} path 
 * @returns { _{ data: any[], isLoading: boolean } } 
 */
export const useGetData = (id, path) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}/${path || ''}`)
      .then(res => res.json())
      .then(r => {
        setData(r.data);
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [id, path])

  return { data, isLoading };
}

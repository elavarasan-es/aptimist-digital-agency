import { useState, useEffect } from 'react';
import { axiosInstance_communication } from '../serviceFolder/axios/Api';

export function useQuery<TResponse, TParams = Record<string, any>>({
  endpoint,
  params,
  autofetch = false,
}: {
  endpoint: string;
  params?: TParams;
  autofetch?: boolean;
}) {
  const [data, setData] = useState<TResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (fetchEndpoint: string, fetchParams?: TParams) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance_communication.get<TResponse>(
        fetchEndpoint,
        { params: fetchParams }
      );
      setData(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (autofetch) {
      fetchData(endpoint, params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetch = (newConfig: { endpoint?: string; params?: TParams } = {}) => {
    fetchData(newConfig.endpoint || endpoint, newConfig.params || params);
  };

  return {
    data,
    isLoading: !data && isLoading,
    isRefreshing: !!data && isLoading,  // <- corrected here
    error,
    fetch,
  };
}

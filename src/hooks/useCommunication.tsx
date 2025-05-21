import {
  POLLING_NTERVAL,
  useGetCommunicationsListQuery,
  useGetNonStoreCommunicationListQuery,
} from '@redux/api/communication';

export const useCommunications = (locId: string) => {
  const { data, isLoading, isFetching, error, refetch } =
    useGetCommunicationsListQuery(locId, { pollingInterval: POLLING_NTERVAL });

  return {
    data: data,
    isLoading: isLoading,
    isFetching: isFetching,
    error: error,
    refetch,
  };
};

export const useNonStoreCommunications = (empId: string) => {
  const { data, isLoading, isFetching, error, refetch } =
    useGetNonStoreCommunicationListQuery(empId, {
      pollingInterval: POLLING_NTERVAL,
    });

    return {
        data: data,
        isLoading: isLoading,
        isFetching: isFetching,
        error: error,
        refetch,
      }; 
};

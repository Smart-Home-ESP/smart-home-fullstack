import { useQuery } from 'react-query';
import { getDevices } from '../api/getDevices';

export const useGetDevices = () => {
    return useQuery('products', getDevices);
};
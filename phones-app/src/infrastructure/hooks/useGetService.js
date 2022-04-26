import { useState, useEffect} from 'react';
import { getService } from '../../domain/service/get.service';


export const useGetService = (dataType, productId = undefined) => {
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    getService(dataType, productId).then(setReceivedData);
  }, []);

  return receivedData;
};

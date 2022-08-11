import { useEffect, useState } from 'react';
import { getService } from '../../domain/service/get.service';
import { persistData } from '../../domain/service/persistence.service';


export const useGetService = (dataType, productId = undefined) => {
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    const storedData = persistData.getWithExpiration(dataType, productId);
    if (storedData !== null) setReceivedData(storedData);
    else {
      getService(dataType, productId).then((response) => {
        setReceivedData(response);
        persistData.setWithExpiration(dataType, response, 1, productId);
      });
    }
  }, []);

  return receivedData;
};

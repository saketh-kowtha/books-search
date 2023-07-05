import { useEffect, useState } from "react";

//Helper functions
import errorHandler from "@/helpers/error-handler";

//Service
import request from "@/service/request";

enum RequestState {
  IDLE,
  PENDING,
  FULFILLED,
  REJECTED,
}

const { IDLE, PENDING, FULFILLED, REJECTED } = RequestState;

export default function useFetch<T>(url: string) {
  const [status, setStatus] = useState<RequestState>(IDLE);
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    setStatus(PENDING);
    request(url)
      .then((responseData) => {
        setData(responseData);
        setStatus(FULFILLED);
      })
      .catch((error) => {
        errorHandler(error);
        setStatus(REJECTED);
      });
  }, [url]);

  const isLoading = status === PENDING;

  return { isLoading, data };
}

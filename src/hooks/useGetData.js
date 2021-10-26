import { useState } from "react";

export const useGetData = (callback) => {
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const fetching = async (page) => {
    try {
      setIsLoading(true);
      await callback(page);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, loading, error];
};

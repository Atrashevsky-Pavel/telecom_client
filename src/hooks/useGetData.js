import { useState } from "react";

export const useGetData = (callback) => {
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, loading, error];
};

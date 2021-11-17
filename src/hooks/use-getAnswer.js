import { useState } from "react";

const useGetAnswer = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = async (input) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://capstone1-chatbotv1.herokuapp.com/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input }),
        }
      );

      const data = await response.json();
      applyData(data.mess);
      console.log(data);
    } catch (err) {
      setError(err.message || "Something wrent wrong");
    }

    setIsLoading(false);
  };

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useGetAnswer;

import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHanlder = (data) => {
    sendRequest(data);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHanlder} />
  );
};

export default NewQuote;

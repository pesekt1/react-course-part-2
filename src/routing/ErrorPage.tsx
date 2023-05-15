import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // we should log the error somewhere like Sentry.io

  console.log("error: ", error);

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error) ? "Invalid page." : "Unexpected error."}
      </p>
    </>
  );
};

export default ErrorPage;

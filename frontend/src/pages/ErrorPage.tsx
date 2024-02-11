import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex place-items-center flex-col mx-auto">
      <h1>Error 404</h1>
      <h2>Page Not Found</h2>
      <p>
        Go back to home page by clicking{" "}
        <Link to="/" className="text-blue-500 text-3xl">
          HERE
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;

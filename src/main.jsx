import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import App from './App'

import { inject } from "@vercel/analytics";
inject();

const { Buffer } = import("buffer");
Window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ErrorBoundary FallbackComponent={ErrorFallback}>
  <ErrorBoundary>
    <Suspense>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Suspense>
  </ErrorBoundary>
);

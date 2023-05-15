import React from "react";
import "normalize.css";
import "../styles/globals.css";
import IndexPage from ".";
import QuizPage from "./quiz";
import ResultsPage from "./results";

import { UserChoicesContextProvider } from "../ContextHooks/UserChoicesContext";

function MyApp({ Component, pageProps }) {
  if (Component === IndexPage) {
    return (
        <IndexPage {...pageProps} />

    );
  } else if (Component === QuizPage) {
    return (
      <UserChoicesContextProvider>
        <QuizPage {...pageProps} />
      </UserChoicesContextProvider>
    );
  } else if (Component === ResultsPage) {

    
    return (
      <UserChoicesContextProvider>
        <ResultsPage {...pageProps} />
        </UserChoicesContextProvider>)
  } else {
    return <Component {...pageProps} />;
  }
}

// MyApp.getInitialProps = async (appContext) => {
//     const { Component, ctx } = appContext;

//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   };

export default MyApp;

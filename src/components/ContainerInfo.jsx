import React from "react";
import Button from "./Button";
import "./styles/ContainerInfo.css";

const ContainerInfo = ({ quote, CreateNewQuote }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">Fortune Cookies</h1>

      <article className="containerInfo__quote">
        <p>{quote.quote}</p>
      </article>

      <article className="containerInfo__author">
        <h4>Author: {quote.author}</h4>
      </article>

      <Button CreateNewQuote={CreateNewQuote} />
    </section>
  );
};

export default ContainerInfo;

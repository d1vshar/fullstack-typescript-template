import Head from "next/head";
import { GlobalCounterButton } from "../components/GlobalCounterButton";
import { CounterButton } from "ui";

export default function Store() {
  console.log("Hey! This is Home.");
  return (
    <div className="container">
      <Head>
        <title>Full-stack Web Application Template</title>
      </Head>
      <h1 className="title">
        <span>Full-stack Web Application Template</span>
      </h1>
      <CounterButton />
      <GlobalCounterButton />
    </div>
  );
}

import Head from 'next/head';
import { Layout } from "../components";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>ICF Hyperautomation Chatbot Alternatives</title>
      </Head>
      <Layout>
        <h1 className="text-3xl">Chatbot Alternatives</h1>
        <p className="mt-4">
          Here you will find a comparison of Chatbots that allow your users to interact
          with your application, business, and organization.
        </p>
      </Layout>
    </>
  );
}
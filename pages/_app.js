import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { metaData } from "../public/content";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <meta
                    name="viewport"
                    content="viewport-fit=cover, width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Adoptuj swojego wymarzonego pieska z hodowli, która dba o każdy aspekt rozwoju malucha!"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;

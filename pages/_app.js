import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import { metaData } from "../public/content";
import Context from "../components/Context";

function MyApp({ Component, pageProps }) {
    const context = useState({});
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
            <Context.Provider value={context}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Context.Provider>
        </>
    );
}

export default MyApp;

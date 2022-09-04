import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { metaData } from "../public/content";
import Context from "../components/Context";

function MyApp({ Component, pageProps }) {
    const context = useState({});
    const { pathname } = useRouter();
    const [currentPathname, setCurrentPathname] = useState(pathname);

    useEffect(() => {
        setCurrentPathname(pathname);
        if (currentPathname !== pathname) {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
    }, [pathname]);

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

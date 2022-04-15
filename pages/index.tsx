import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import {Layout} from "../components/layout/Layout";
import {Device} from "../components/device/Device";
import {Devices} from "../components/device/Devices";
import {dehydrate, QueryClient} from "react-query";
import {getDevices} from "../components/device/api/getDevices";

const Home: NextPage = () => {
    return (
        <Layout>
            <Devices/>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('products', getDevices);

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
};

export default Home

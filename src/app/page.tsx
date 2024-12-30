"use client";
import {useEffect, useState} from "react";
import styles from "../styles/page.module.css";
import Content from "@/Documentos/content";
import Loader from "@/Documentos/Loader";


export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data] = useState({
        Nome: "Diogo Barbosa",
        Nome_Projeto: "League Of Heroes",
    });
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            SetLoading(false);

        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />
    }
    return (
        <div className={styles.page}>
            <Content />
        </div>
    );
}

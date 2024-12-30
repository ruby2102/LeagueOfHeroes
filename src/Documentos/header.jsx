// src/components/Header.jsx
"use client";

import Link from "next/link";
import styles from "../styles/Header.module.css";

const header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/page">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default header;

"use client";

import React from "react";
import { useHeroes } from "@/context/HeroContext";
import Link from "next/link";
import styles from "@/styles/Content.module.css";

const Content = () => {
    const { heroes } = useHeroes();
    const favoriteHeroes = heroes.filter((hero) => hero.favorite);

    return (
        <div className={styles.content}>
            <h1>Bem-vindo ao League Of Heroes</h1>
            <p>Explore os super-heróis e gerencie sua lista favorita!</p>

            <nav>
                <ul style={{listStyleType: "none"}} className={styles.navList}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            <h2 style={{ color: "Black" }}>Heróis Favoritos</h2>
            {favoriteHeroes.length === 0 ? (
                <p style={{ color: "black", marginTop: "20px" }}>
                    Nenhum herói favorito encontrado.
                </p>
            ) : (
                <ul>
                    {favoriteHeroes.map((hero) => (
                        <li key={hero.id}>
                            <img src={hero.image} alt={hero.name} width="50" />
                            <p>{hero.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Content;

"use client";

import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { useHeroes } from "../../context/HeroContext";
import Link from "next/link";

const Dashboard = () => {
    const { heroes, deleteHero, toggleFavoriteHero } = useHeroes();

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.dashboardTitle}>Dashboard</h1>
            <Link href="/" className={styles.navLink}>Página Inicial</Link>

            {heroes.length === 0 ? (
                <p className={styles.noHeroes}>Não há super-heróis Registados.</p>
            ) : (
                <table className={styles.table} aria-label="Tabela de Super-Heróis">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Superpoder</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {heroes.map((hero) => (
                        <tr key={hero.id}>
                            <td>{hero.id}</td>
                            <td>
                                <img
                                    src={hero.image}
                                    alt={`Imagem de ${hero.name}`}
                                    width="50"
                                    height="50"
                                    className={styles.heroImage}
                                />
                            </td>
                            <td>{hero.name}</td>
                            <td>{hero.power || "N/D"}</td>
                            <td>
                                <button
                                    className={`${styles.button} ${styles.deleteBtn}`}
                                    onClick={() => deleteHero(hero.id)}
                                    aria-label={`Apagar o super-herói ${hero.name}`}
                                >
                                    Apagar
                                </button>
                                <button
                                    className={`${styles.button} ${styles.favoriteBtn}`}
                                    onClick={() => toggleFavoriteHero (hero.id)}
                                    aria-label={
                                        hero.favorite
                                            ? `Remover ${hero.name} dos favoritos`
                                            : `Adicionar ${hero.name} aos favoritos`
                                    }
                                >
                                    {hero.favorite ? "Remover Favorito" : "Adicionar Favorito"}
                                </button>
                                <Link
                                    href={`/ManageHero/${hero.id}`}
                                    className={`${styles.button} ${styles.editBtn}`}
                                    aria-label={`Editar o super-herói ${hero.name}`}
                                >
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <Link
                href="/ManageHero"
                className={styles.addHeroBtn}
                aria-label="Adicionar um novo super-herói"
            >
                Adicionar Super-Herói
            </Link>
        </div>
    );
};

export default Dashboard;

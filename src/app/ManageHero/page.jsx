"use client";

import styles from "../../styles/page.module.css";
import { useSearchParams } from "next/navigation";
import HeroForm from "../../Documentos/HeroForm";
import { Suspense } from "react";

const ManageHeroContent = () => {
    const searchParams = useSearchParams();
    const heroId = searchParams.get("id");

    return (
        <div className={styles.page}>
            <h1>{heroId ? `Editando Herói com ID: ${heroId}` : "Adicionando Novo Herói"}</h1>
            <HeroForm isEdit={!!heroId} />
        </div>
    );
};

const ManageHero = () => {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ManageHeroContent />
        </Suspense>
    );
};

export default ManageHero;

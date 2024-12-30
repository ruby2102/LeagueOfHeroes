"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useHeroes } from "../context/HeroContext";

const HeroForm = ({ isEdit = false, heroId = null }) => {
    const { addHero, updateHero, heroes } = useHeroes();
    const router = useRouter();
    const [hero, setHero] = useState({ name: "", power: "", image: "" });

    // Preencher dados do herói se for edição
    useEffect(() => {
        if (isEdit && heroId) {
            const heroToEdit = heroes.find((h) => h.id === parseInt(heroId));
            if (heroToEdit) setHero(heroToEdit);
        }
    }, [isEdit, heroId, heroes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHero({ ...hero, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            updateHero(hero);
        } else {
            addHero(hero);
        }
        router.push("/dashboard");
    };

    return (
        <div>
            <h1>{isEdit ? "Editar Super-Herói" : "Adicionar Super-Herói"}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={hero.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Superpoder:</label>
                    <input
                        type="text"
                        name="power"
                        value={hero.power}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Imagem (URL):</label>
                    <input
                        type="text"
                        name="image"
                        value={hero.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Gravar</button>
                    <button type="button" onClick={() => router.push("/dashboard")}>
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HeroForm;

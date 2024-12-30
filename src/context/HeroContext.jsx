"use client";

import React, { createContext, useContext, useState } from "react";

const HeroContext = createContext();

export const useHeroes = () => useContext(HeroContext);

export const HeroProvider = ({ children }) => {
    const [heroes, setHeroes] = useState([
        {
            id: 1,
            name: "Hulk",
            power: "Strength",
            favorite: false,
            image: "https://www.disfarcesjarana.com/media/catalog/product/cache/5/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-superheroe-hulk-deluxe-para-nino.jpg",
        },
        {
            id: 2,
            name: "Spider-Man",
            power: "Intelligence",
            favorite: false,
            image: "https://www.shutterstock.com/image-vector/spiderman-art-design-icon-vector-260nw-2404385831.jpg",
        },
    ]);

    const addHero = (newHero) => {
        setHeroes((prev) => [...prev, { ...newHero, id: Date.now() }]);
    };

    const updateHero = (updatedHero) => {
        setHeroes((prev) =>
            prev.map((hero) => (hero.id === updatedHero.id ? updatedHero : hero))
        );
    };

    const deleteHero = (id) => {
        setHeroes((prev) => prev.filter((hero) => hero.id !== id));
    };

    return (
        <HeroContext.Provider value={{ heroes, addHero, updateHero, deleteHero }}>
            {children}
        </HeroContext.Provider>
    );
};

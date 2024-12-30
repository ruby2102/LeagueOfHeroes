"use client";


export default function RootLayout({ children }) {
    return (
        <>
            <header style={{ padding: "1rem", background: "#333", color: "#fff" }}>
                <h1>Gerenciador de Heróis</h1>
            </header>
            <main>{children}</main>
            <footer style={{ padding: "1rem", background: "#222", color: "#fff" }}>
                <p>© 2024 - Aplicação de Heróis</p>
            </footer>
        </>
    );
}

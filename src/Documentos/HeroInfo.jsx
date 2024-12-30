export default function HeroInfo({ nome, imagem }) {

    const sanitizedImage = imagem ? imagem.replace(/^"(.*)"$/, '$1') : '';
    console.log("Nome:", nome, "| Imagem Recebida:", imagem, "| Imagem Processada:", sanitizedImage);

    const boxStyle = {
        display: "inline-block",
        width: "30%",
        margin: "1%",
        padding: "20px",
        border: "1px solid #000",
        textAlign: "center",
    };

    return (
        <div style={boxStyle}>
            <img
                src={sanitizedImage || "https://via.placeholder.com/150"}
                alt={nome}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{nome}</p>
        </div>
    );
}

import React from "react";

const Buscador = ({ data, dataFilter }) => {
    const inputHandler = (e) => {
        const buscaPalabra = e.target.value.toLowerCase();

        const resultado = data.filter((digimon) =>
            digimon.name.toLowerCase().includes(buscaPalabra) ||
            digimon.level.toLowerCase().includes(buscaPalabra)
        );

        dataFilter(resultado);
    };

    return (
        <input
            type="text"
            placeholder="Busca un digimon"
            onChange={inputHandler}
        />
    );
};

export default Buscador;

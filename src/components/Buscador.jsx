import { useState, useEffect } from "react";

const Buscador = ({ data, dataFilter }) => {
    const inputHandler = (e) => {
        const buscaPalabra = e.target.value.toLowerCase();

        const resultado = data.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(buscaPalabra) ||
            usuario.correo.toLowerCase().includes(buscaPalabra) ||
            usuario.edad.toString().toLowerCase().includes(buscaPalabra) ||
            usuario.cargo.toLowerCase().includes(buscaPalabra) ||
            usuario.telefono.toString().toLowerCase().includes(buscaPalabra)
        );

        dataFilter(resultado);
    };

    return (
        <input
            type="text"
            placeholder="Busca un colaborador"
            onChange={inputHandler}
        />
    );
};

export default Buscador;
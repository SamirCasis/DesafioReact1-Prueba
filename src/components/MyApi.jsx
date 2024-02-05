import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MyApi = ({ data, setData }) => {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    const [sort, setSort] = useState('AZ');

    const fetchData = async () => {
        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error('Error de carga en la API');
            }
            const respuestaData = await respuesta.json();
            setData(respuestaData);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const sortData = [...data];

    sortData.sort((a, b) => {
        if (sort === 'AZ') {
            return a.name.localeCompare(b.name); // de la A a la Z
        } else {
            return b.name.localeCompare(a.name); // de la Z a la A
        }
    });

    return (
        <>
            <div className="select">
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="AZ">Nombre (A-Z)</option>
                    <option value="ZA">Nombre (Z-A)</option>
                </select>
            </div>
            <div className="galeria">
                {sortData.map((digimon, index) => (
                    <Card key={index} className="card">
                        <Card.Img variant="top" src={digimon.img} alt={digimon.name} />
                        <Card.Body>
                            <Card.Title>{digimon.name}</Card.Title>
                            <Card.Text>{digimon.level}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default MyApi;

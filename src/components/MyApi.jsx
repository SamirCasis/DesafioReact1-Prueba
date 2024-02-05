import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MyApi = ({ data, setData }) => {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    const [sortOrder, setSortOrder] = useState('AZ');

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

    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (sortOrder === 'AZ') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    return (
        <>
            <div className="sorting-select">
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="AZ">Nombre (A-Z)</option>
                    <option value="ZA">Nombre (Z-A)</option>
                </select>
            </div>
            <div className="gallery-container">
                {sortedData.map((digimon) => (
                    <Card key={digimon.name} className="gallery-card">
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

import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';

const MyApi = ({ data, setData }) => {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    const apiData = async () => {
        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error('Error de carga en la Api')
            }
            const data = await respuesta.json();
            setData(data.results);
        } catch (error) {
            alert({ message: error })
        }
    }

    useEffect(() => {
        apiData();
    }, [])


    return (
        <Card style={{ width: '18rem' }}>
            {data.map((e) => {
                <div key={e.name}>
                    <Card.Img variant="top" src={e.img} alt={e.name} />
                    <Card.Body>
                        <Card.Title>{e.name} </Card.Title>
                        <Card.Text>{e.level} </Card.Text>
                    </Card.Body>
                </div>
            })}
        </Card>
    )
}

export default MyApi
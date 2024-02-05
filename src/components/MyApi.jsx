import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MyApi = ({ data, setData }) => {
    const url = 'https://digimon-api.vercel.app/api/digimon';

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error de carga en la API');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row mt-5 mb-5 justify-content-center">
            <Card style={{ width: '18rem' }}>
                {data.map((e) => (
                    <div key={e.name}>
                        <Card.Img variant="top" src={e.img} alt={e.name} />
                        <Card.Body>
                            <Card.Title>{e.name} </Card.Title>
                            <Card.Text>{e.level} </Card.Text>
                        </Card.Body>
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default MyApi;

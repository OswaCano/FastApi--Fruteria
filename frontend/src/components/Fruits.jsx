import React, { useEffect, useState } from 'react';
import AddFruitForm from './AddFruitForm';
import api from '../api';

const FruitList = () => {
    const [fruits, setFruits] = useState([]);

    const fetchFruits = async () => {
        try {
            const response = await api.get('/fruits');
            setFruits(response.data.fruits);
        } catch (error) {
            console.error("Error fetching fruits", error);
        }
    };

    const addFruit = async (fruitName, fruitCount, fruitPrice) => {
        try {
            await api.post('/fruits', { name: fruitName, count: fruitCount, price: fruitPrice });
            fetchFruits();  // Refresh the list after adding a fruit
        } catch (error) {
            console.error("Error adding fruit", error);
        }
    };

    useEffect(() => {
        fetchFruits();
    }, []);

    return (
        <div className="max-w-lg mx-auto p-4 shadow-md rounded-lg bg-gray-600">
            <h2 className="text-2xl font-bold text-center mb-4">Almacén de Frutas</h2>
            <ul className="space-y-2">
                {fruits.map((fruit, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-2 bg-gray-300 rounded-lg shadow-sm"
                    >
                        <span className="font-semibold">{fruit.name}</span>
                        <span className="text-gray-600">{fruit.count} unidades</span>
                        <span className="text-green-600 font-bold">${fruit.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <AddFruitForm addFruit={addFruit} />
        </div>
    );
};

export default FruitList;
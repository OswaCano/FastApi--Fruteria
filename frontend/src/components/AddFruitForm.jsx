import React, { useState } from 'react';

const AddFruitForm = ({ addFruit }) => {
  const [fruitName, setFruitName] = useState('');
  const [fruitCount, setFruitCount] = useState(0);
  const [fruitPrice, setFruitPrice] = useState(0.0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fruitName && fruitCount && fruitPrice) {
      addFruit(fruitName, fruitCount, fruitPrice);
      setFruitName('');
      setFruitCount(0);
      setFruitPrice(0.0);
    }
  };

    return (
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={fruitName}
                    onChange={(e) => setFruitName(e.target.value)}
                    placeholder="Ingresa el nombre de la fruta"
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="number"
                    value={fruitCount}
                    onChange={(e) => setFruitCount(parseInt(e.target.value))}
                    placeholder="Ingresa la cantidad de frutas"
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="number"
                    value={fruitPrice}
                    onChange={(e) => setFruitPrice(parseFloat(e.target.value))}
                    placeholder="Ingresa el precio de la fruta ($)"
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                    Agregar Fruta
                </button>
            </form>
        </div>
    );

};

export default AddFruitForm;
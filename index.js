import React from "react";

const products = [
  { id: 1, name: "Iphone 13", price: 2999.99 },
  { id: 2, name: "Galaxy s23", price: 5999.99 },
  { id: 3, name: "Iphone 16", price: 8000.00 },
];

const Product = ({ product }) => {
  const handleBuy = () => {
    alert(`Você comprou: ${product.name} por R$${product.price.toFixed(2)}`);
  };

  return (
    <div className="border p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">R$ {product.price.toFixed(2)}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleBuy}
      >
        Comprar
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Loja de Eletrônicos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;

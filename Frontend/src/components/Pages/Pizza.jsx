import { useState, useEffect } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!res.ok) throw new Error("No encontramos la pizza seleccionada");
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, []);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Opps!: {error}</p>;
  if (!pizza) return <p>No se encontró la pizza :(</p>;

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-3" style={{ width: "24rem" }}>
        <img
          src={pizza.img}
          alt={pizza.name}
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h3 className="card-title">{pizza.name}</h3>
          <p className="card-text">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h4 className="text-success">Precio: ${pizza.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default Pizza;

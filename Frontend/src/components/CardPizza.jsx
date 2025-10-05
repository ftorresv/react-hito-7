function CardPizza({ name, price, ingredients, img, desc, onAddToCart }) {
  return (
    <div className="card m-3" style={{ width: "20rem" }}>
      <img src={img} className="card-img-top" alt={name} />  
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <p className="card-text text-start">{desc}</p>  Se deja como opcional para no renderizar tanto*/ }
        <p className="card-text">
          <b>Precio:</b> ${price.toLocaleString()}
        </p>
        <p className="card-text">
          <b>Ingredientes:</b> 
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <div className="d-flex justify-content-between gap-2">
          <button className="btn btn-outline-primary d-flex">Ver más 👀</button>
          <button className="btn btn-success d-flex" onClick={onAddToCart}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
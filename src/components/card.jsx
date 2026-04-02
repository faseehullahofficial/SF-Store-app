
import productsData from './products.jsx'
import './card.css'

const Card = () => {
  return (
    <div className="main-products-div">
      <h1>Our Products</h1>
    <div className="product-list">
      {productsData.map((product) => (

        <div key={product.id} className="product-card">

          <img  src={product.image} alt={product.title} />

          <h2>{product.title}</h2>
      <button>Add to Cart</button>


          <p>Price: PKR  {product.price} /= </p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Card

import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
    product,
    user,
    onDelete
}) {

    return (

        <div className="product-card">

            <div className="product-image">

                <img
    src={product.imageUrl}
    alt={product.name}
    onError={(e) => {
        e.target.src = "https://placehold.co/300x220";
    }}
/>
            </div>

            <div className="product-content">

                <h3 className="product-title">
                    {product.name}
                </h3>

                <p className="product-description">
                    {product.description}
                </p>

                <h2 className="product-price">
                    ₹ {product.price}
                </h2>

                <div className="product-buttons">

                    <Link to={`/products/${product.id}`}>
                        <button className="view-btn">
                            View Details
                        </button>
                    </Link>

                    {user?.role === "ADMIN" && (
                        <>
                            <Link to={`/admin/edit-product/${product.id}`}>
                                <button className="edit-btn">
                                    Edit
                                </button>
                            </Link>

                            <button
                                className="delete-btn"
                                onClick={() => onDelete(product.id)}
                            >
                                Delete
                            </button>
                        </>
                    )}

                </div>

            </div>

        </div>

    );

}
import AddToCart from "./AddToCart";
import ProductTable from "./ProductTable";

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface CartProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Cart({ products, setProducts }: CartProps) {
  return (
    <div>
        <h1>Mon panier</h1>
        <div>
            <ProductTable products={products} setProducts={setProducts}/>
            <div>
                <h2 className="total">Montant total de la commande : </h2>
                <p>
                    {products.reduce((total, product) => total + product.price * product.quantity, 0)} €
                </p>
            </div>
        </div>
        <AddToCart setProducts={setProducts} />
  </div>
  )
}

export default Cart
import AddToCart from "./AddToCart";

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface CartProps {
    product: Product[];
    setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Cart({ product, setProduct }: CartProps) {
    const hanbleQuantityChange = (id: number, quantity: number) => {
        if (quantity === 0) {
            window.confirm('Voulez-vous supprimer ce produit ?') 
            && setProduct((prevProduct) => prevProduct.filter((product) => product.id !== id))
        } else {
            setProduct((prevProduct) => 
                prevProduct.map((product) => 
                    product.id === id ? { ...product, quantity: Number(quantity) } : product
                )
            )
        }
    }
  return (
    <div>
        <h1>Mon panier</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <input 
                                    type="number" 
                                    value={product.quantity} 
                                    onChange={(e) => {hanbleQuantityChange(product.id, Number(e.target.value))}}
                                />
                            </td>
                            <td>{product.price * product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2 className="total">Montant total de la commande : </h2>
                <p>
                    {product.reduce((total, product) => total + product.price * product.quantity, 0)} €
                </p>
            </div>
        </div>
        <AddToCart setProduct={setProduct} />
  </div>
  )
}

export default Cart
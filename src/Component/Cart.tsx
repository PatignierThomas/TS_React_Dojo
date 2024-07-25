import AddToCart from "./AddToCart";

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
    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity === 0) {
            window.confirm('Voulez-vous supprimer ce produit ?') 
            && setProducts((prevProduct) => prevProduct.filter((product) => product.id !== id))
        } else {
            setProducts((prevProduct) => 
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
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <input 
                                    type="number" 
                                    value={product.quantity} 
                                    onChange={(e) => {handleQuantityChange(product.id, Number(e.target.value))}}
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
                    {products.reduce((total, product) => total + product.price * product.quantity, 0)} €
                </p>
            </div>
        </div>
        <AddToCart setProducts={setProducts} />
  </div>
  )
}

export default Cart
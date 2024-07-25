import { CartProps, Product } from './Cart.tsx'


function ProductTable({products, setProducts}: CartProps) {
    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity === 0) {
            window.confirm('Voulez-vous supprimer ce produit ?') 
            && setProducts((prevProduct: Product[]) => prevProduct.filter((product) => product.id !== id))
        } else {
            setProducts((prevProduct: Product[]) => 
                prevProduct.map((product) => 
                    product.id === id ? { ...product, quantity: Number(quantity) } : product
                )
            )
        }
    }
  return (
    <table>
        <thead>
            <tr>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
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
  )
}

export default ProductTable
import React from 'react'
import { useState } from 'react'
import { CartProps, Product } from './Cart.tsx'

function AddToCart({setProducts}: Pick<CartProps, "setProducts">) {
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement;
        const name: string = (form[0] as HTMLInputElement).value;
        const price: number = Number((form[1] as HTMLInputElement).value);
        if (!name || !price) {
            setError('Veuillez remplir tous les champs.');
            return
        }
        setProducts((prevProduct: Product[]) => {
            const productExists = prevProduct.some(product => product.name === name);
            if (productExists) {
                setError('Un produit avec ce nom existe déjà.');
                return prevProduct;
            }
            return [...prevProduct, { id: (Math.floor(Math.random() * Date.now())) , name, price, quantity: 1 }]
        })
    }

  return (
    <>
        <h2 className="addProduct">Ajouter un produit </h2>
        <form className="addProductForm" onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <input type="text" placeholder="Product name"/>
            <input type="number" placeholder="Price"/>
            <button type="submit">Ajouter</button>
        </form>
    </>
  )
}

export default AddToCart
import React from 'react'
import { CartProps, Product } from './Cart.tsx'

function AddToCart({setProducts}: Pick<CartProps, "setProducts">) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const name: string = (form[0] as HTMLInputElement).value
        const price: number = Number((form[1] as HTMLInputElement).value)
        setProducts((prevProduct: Product[]) => [...prevProduct, { id: (Math.floor(Math.random() * Date.now())) , name, price, quantity: 1 }])
    }

  return (
    <>
        <h2 className="addProduct">Ajouter un produit </h2>
        <form className="addProductForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Product name"/>
            <input type="number" placeholder="Price"/>
            <button type="submit">Ajouter</button>
        </form>
    </>
  )
}

export default AddToCart
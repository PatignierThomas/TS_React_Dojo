import { useState } from 'react';
import './App.css'
import Cart from './Component/Cart'

function App() {

    const [initialProductList, SetInitialProductList] = useState(    
        [
        { id: 1, name: 'produit 1', price: 50, quantity: 1 },
        { id: 2, name: 'produit 2', price: 75, quantity: 2 },
        { id: 3, name: 'produit 3', price: 20, quantity: 5 }
    ])
  return (
    <>
        <div className='App'>
            <h1>Ma commande</h1>
            <Cart products={initialProductList} setProducts={SetInitialProductList}/>
        </div>
    </>
  )
}

export default App

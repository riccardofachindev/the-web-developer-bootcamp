import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm"
import { v4 as uuid } from "uuid"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"

export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: 'Bananas', quantity: 8 },
        { id: uuid(), product: 'Eggs', quantity: 12 }
    ])

    const addToList = (item) => {
        setItems(oldItems => {
            return [...oldItems, { ...item, id: uuid() }]
        })
    }

    return (
        <>
            <h1>Shopping list</h1>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>
            <ValidatedShoppingListForm eventFunc={addToList} />
        </>
    )
}
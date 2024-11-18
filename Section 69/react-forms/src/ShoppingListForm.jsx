import { useState } from "react"

export default function ShoppingListForm({ eventFunc }) {
    const [formData, setFormData] = useState({ product: '', quantity: 0 });

    function handleChange(event) {
        setFormData(oldFormData => {
            return { ...oldFormData, [event.target.name]: event.target.value };
        })
    }

    const handleEventFunc = (e) => {
        e.preventDefault();
        eventFunc(formData);
        setFormData({ product: '', quantity: 0 })
    }

    return (
        <form onSubmit={handleEventFunc}>
            <label htmlFor="product">Type product</label>
            <input type="text" name="product" id="product" value={formData.product} onChange={handleChange} placeholder="product name" />
            <label htmlFor="quantity">Type quantity</label>
            <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} placeholder="quantity" />
            <button>Add item</button>
        </form>
    )
}
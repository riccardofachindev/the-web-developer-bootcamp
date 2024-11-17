import { useState } from "react"

export default function ValidatedShoppingListForm({ eventFunc }) {
    const [formData, setFormData] = useState({ product: '', quantity: 0 });
    const [productIsValid, setProductIsValid] = useState(false);

    function handleChange(event) {
        if (event.target.name === 'product') {
            validate(event.target.value);
        }
        setFormData(oldFormData => {
            return { ...oldFormData, [event.target.name]: event.target.value };
        })
    }

    const handleEventFunc = (e) => {
        e.preventDefault();
        if (productIsValid) {
            eventFunc(formData);
            setFormData({ product: '', quantity: 0 })
        }
    }

    function validate(product) {
        if (product.length > 0) {
            setProductIsValid(true);
        } else {
            setProductIsValid(false);
        }
    }

    return (
        <form onSubmit={handleEventFunc}>
            <div>
                <label htmlFor="product">Type product</label>
                <input type="text" name="product" id="product" value={formData.product} onChange={handleChange} placeholder="product name" />
                {!productIsValid && <span style={{ color: 'red' }}>Product cannot be empty</span>}
            </div>
            <div>
                <label htmlFor="quantity">Type quantity</label>
                <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} placeholder="quantity" />
            </div>
            <button disabled={!productIsValid}>Add item</button>
        </form>
    )
}
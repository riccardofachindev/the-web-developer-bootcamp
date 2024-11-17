function ShoppingListItem({ name, quantity, completed }) {
    const styles = { color: completed ? "grey" : "red", textDecoration: completed ? "line-through" : "none" }

    return (
        <>
            <li style={styles}>{name} - {quantity}</li>
        </>
    )
}

/* ShoppingListItem.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
} */

export default ShoppingListItem;
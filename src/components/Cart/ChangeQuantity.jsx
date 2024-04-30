const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (
        <div className="change-container">
            <button className="btn-change" onClick={removeQuantity}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="btn-change" onClick={addQuantity}>+</button>
        </div>
    )
}

export default ChangeQuantity;
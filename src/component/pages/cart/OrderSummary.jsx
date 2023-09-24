import "./cart.css"

const OrderSummary = ({count}) => {
  return (
    <div className="cart-summary">
    <h3>Orderd Summary</h3>
    <div className="total">
      <p>Total</p>
      <p>$ {count}</p>
    </div>
    <div className="discount">
      <p>Discount</p>
      <p>0</p>
    </div>
  </div>
  )
}

export default OrderSummary
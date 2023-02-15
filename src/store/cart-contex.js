import React from "react";

const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addIrem: (item) => {
  },
  removeItem: (id) => {}
})

export default CartContex
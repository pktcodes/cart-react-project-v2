export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  //   Map Instance - values()
  for (let { amount, price } of cart.values()) {
    totalAmount = totalAmount + amount;
    totalCost = totalCost + price * amount;

    // totalAmount += amount;
    // totalCost += price * amount;
  }

  return { totalAmount, totalCost };
};

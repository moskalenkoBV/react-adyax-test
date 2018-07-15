const calcPriceSingle = (price, amount, bonus) => (
  bonus === null ? price * amount : (price + (price * bonus)) * amount
)

export default calcPriceSingle
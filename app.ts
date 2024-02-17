type PriceConditions = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
};

const totalPrice = (pc: PriceConditions): number => {
  return pc.price * (1 - pc.discount / 100) / (pc.isInstallment ? pc.months : 1);
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250

function formatPrice(price) {
  return String(price.toFixed(2)).replace(".", ",");
}

function showSmallestNumber(...products) {
  const cheapestPrice = Math.min(...products.map((product) => product.price));
  const cheapestProduct = products.find(
    (product) => product.price === cheapestPrice
  );

  console.log(
    `O produto mais barato é ${cheapestProduct.name} custando R$${formatPrice(
      cheapestProduct.price
    )}`
  );
}

const productA = {
  name: "notebook",
  price: 1499,
};

const productB = {
  name: "Mouse sem fio",
  price: 59,
};

const productC = {
  name: "Cadeira gamer",
  price: 669,
};

showSmallestNumber(productA, productB, productC);

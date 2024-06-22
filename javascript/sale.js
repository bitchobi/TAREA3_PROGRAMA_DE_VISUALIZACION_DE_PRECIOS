const products = [
  {
    id: 1,
    name: "Mezcla original 200g",
    price: 500,
  },
  {
    id: 2,
    name: "Mezcla original 500g",
    price: 900,
  },
  {
    id: 3,
    name: "Mezcla especial 200g",
    price: 700,
  },
  {
    id: 4,
    name: "Mezcla especial 500g",
    price: 1200,
  },
];

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
function add() {
  const targetId = parseInt(priceElement.value);
  const product = products.find((item) => item.id == targetId);
  const number = numberElement.value;

  let purchase = {
    product: product,
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex(
    (item) => item.product.id === purchase.product.id
  );
  if (purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase);
  } else {
    purchases[newPurchase].number += purchase.number;
  }

  window.alert(`${display()}\n Subtotal ${subtotal()} Guaranies.`);
  priceElement.value = "";
  numberElement.value = "";
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0);
}

function display() {
  return purchases
    .map((purchase) => {
      return `${purchase.product.name} , ${purchase.product.price} Guaranies : ${purchase.number} item.\n`;
    })
    .join("");
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 1000) {
    return 500;
  } else {
    return 250;
  }
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\n El subtotal: ${sum} Guaranies.\n Los gastos de envío son: ${postage} Guaranies.\n Total: ${
      sum + postage
    } Guaranies.`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

/*

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  };
  purchases.push(purchase);
  window.alert(`${display()}\nsubtotal${subtotal()} $`);
}

function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].price}El círculo es.${purchases[i].number} punto\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`subtotalEs${sum}Yenes, los gastos de envío son.${postage}Yenes. Total.${sum + postage}Círculo.`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}*/
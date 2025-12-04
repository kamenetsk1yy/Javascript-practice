//2

// const laungueg = {
//   showItems() {
//     console.log("this is", this.items);
//   },
// };

// const css = {
//   items: ["css"],
// };

// const html = {
//   items: ["html"],
// };

// laungueg.showItems.bind(html)();
// laungueg.showItems.bind(css)();

// document
//   .querySelector("#css")
//   .addEventListener("click", laungueg.showItems.bind(css));

// document
//   .querySelector("#html")
//   .addEventListener("click", laungueg.showItems.bind(html));

//1

// //3

// const ShopItem = {
//    name: "banana",
//    price: 30,
//    number: 4.5,
//    showInfo: function () {
//       console.group("Shop");
//       console.log("item: " + this.name);
//       console.log("price: " + this.price)
//       console.log("amount: " + this.number)
//    },
// };

// const ShopItem2 = {
//   name: "cherry",
//   price: 58,
//   number: 1.3,
// };

// const ShopItem3 = {
//   name: "jrange",
//   price: 89,
//   number: 3.4,
// };

// ShopItem.showInfo();
// ShopItem.showInfo.apply(ShopItem2);
// ShopItem.showInfo.apply(ShopItem3);

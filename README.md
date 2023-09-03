# Cart 🛒

> PROD [Live] : https://react-usereducer-cart-v2-prod.netlify.app/

#### Cart consists of a straightforward user interface where there is a

- List of some of the items added to the cart, **Navbar** with the title *useReducer* , **cart amount** i.e. total number of items added by default, and a **`CLEAR CART`** button to clear all items in the cart which on click shows `YOUR BAG is currently empty`.
- Each cartItem has the `image` , `title` , `price` , `amount`, along with a few buttons i.e. **`remove`** to remove the item from the cart, 🔼 to increase , 🔽 to decrease the amount of that particular item and when the item amount gets less than 1, it is automatically removed from the cart.  
- For every change in cartItem, the **total price** and **cart amount** gets adjusted.  
- **`Loading`** spinner will be shown while fetching data, once the data is available cart will be shown. 
- Data is handled by **`API`**, and styles are handled by **`index.css`**
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm run dev` to start up the development server on default port 5173.

#### Languages
HTML, CSS, JavaScript, ECMAScript, React ~ ContextAPI - Hooks ~ useEffect, useReducer, useContext

#### Packages
[React Icons](https://www.npmjs.com/package/react-icons)

#### API
https://www.course-api.com/react-useReducer-cart-project

#### Deployment / Hosting
Netlify

---

#### Data Structure Options

- array

```js
const cart = [
  { id: 1, name: 'first', price: 10 },
  { id: 2, name: 'second', price: 20 },
];
```

Using an array to store shopping cart data may not be the best option because it can be less efficient for lookups and updates, especially for larger datasets. Arrays are also less flexible than Maps when it comes to associating values with unique identifiers.

- object

```js
const cart = {
  'id-1': { id: 1, name: 'first', price: 10 },
  'id-2': { id: 2, name: 'second', price: 20 },
};
```

The downsides of using an object to store shopping cart data include the risk of unintended property overwriting or unexpected behavior when iterating over inherited properties. Additionally, objects can only use string keys, which can be limiting if you need to use non-string keys. Deleting properties from an object can also be tricky, especially when dealing with inherited properties.

- new Map()

For a shopping cart application, using a new Map() to store the cart data is beneficial because it allows for efficient lookups and updates based on unique product IDs. Using a Map can also ensure that each item in the cart has a unique identifier and can easily be updated or removed without affecting other items in the cart.

#### Map

A Map is a built-in data structure in JavaScript that allows you to store key-value pairs, where both the keys and values can be any data type. Here's a simple example:

```js
// create a new Map instance
const cart = new Map();

// set some key-value pairs

cart.set('apple', { name: 'Apple', price: 0.5, quantity: 3 });
cart.set('banana', { name: 'Banana', price: 0.3, quantity: 6 });
cart.set('orange', { name: 'Orange', price: 0.4, quantity: 4 });

// get the value associated with a key
const appleDetails = cart.get('apple'); // returns { name: 'Apple', price: 0.5, quantity: 3 }

// check if a key exists in the map
const hasPear = cart.has('pear'); // returns false

// get the number of key-value pairs in the map
const size = cart.size; // returns 3

// delete a key-value pair from the map
cart.delete('banana');

// loop over the key-value pairs in the map
for (let [key, { name, price, quantity }] of cart) {
  console.log(key, name, price, quantity); // prints 'apple' 'Apple' 0.5 3, 'banana' 'Banana' 0.3 6, 'orange' 'Orange' 0.4 4
}
```

#### JS Nuggets Video

[Array.from](https://www.youtube.com/watch?v=zg1Bv4xubwo&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=11)

#### Converting

```js
const items = [
  { id: 1, name: 'first', price: 10 },
  { id: 2, name: 'second', price: 20 },
];
const cartItems = items.map((item) => [item.id, item]);

console.log(cartItems);
// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }],
// ];

// create a new Map instance
const cart = new Map(cartItems);

// convert the Map to an array of key-value pairs
const cartArray = Array.from(cart.entries());

console.log(cartArray);
// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }]
// ]
```
---

_Note: I have developed this project ~ [15] as part of React 18 Tutorial and Projects Course (2023) taught by John Smilga._

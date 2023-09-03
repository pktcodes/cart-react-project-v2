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

_Note: I have developed this project ~ [15] as part of React 18 Tutorial and Projects Course (2023) taught by John Smilga._



// import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //     items: [],
// //     totalQuantity: 0,
// //     localStorageItems: JSON.parse(localStorage.getItem("Cart")) || [],
// // };


// const initialCartData = JSON.parse(localStorage.getItem("Cart")) || [];

// const initialState = {
//     items: initialCartData,
//     totalQuantity: initialCartData.reduce((total, item) => total + item.quantity, 0),
//     localStorageItems: initialCartData,
// };

// const productItemsSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {
//         addProduct(state, action) {
//             const newItem = action.payload;
//             const existingItem = state.items.find((item) => item.id === newItem.product_id);

//             state.totalQuantity++;

//             if (!existingItem) {
//                 state.items.push({
//                     id: newItem.product_id,
//                     name: newItem.product_name,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                     image: newItem.product_images,
//                     category: newItem.category,
//                     // Add other properties as needed
//                 });
//             } else {
//                 existingItem.quantity++;
//                 existingItem.totalPrice += newItem.price;
//             }

//             // Update localStorage with the updated items
//             localStorage.setItem("Cart", JSON.stringify(state.items));
//             state.localStorageItems = JSON.parse(localStorage.getItem("Cart"));
//         },
//         removeProduct(state, action) {
//             const itemToRemove = action.payload;

//             // Find the index of the item to remove
//             const indexToRemove = state.items.findIndex((item) => item.id === itemToRemove.id);

//             if (indexToRemove !== -1) {
//                 // Update totalQuantity
//                 state.totalQuantity -= state.items[indexToRemove].quantity;

//                 // Remove item from items array
//                 state.items.splice(indexToRemove, 1);

//                 // Update localStorage with the updated items
//                 localStorage.setItem("Cart", JSON.stringify(state.items));
//                 state.localStorageItems = JSON.parse(localStorage.getItem("Cart"));
//             }
//         },
//     },
// });

// export const { addProduct, removeProduct } = productItemsSlice.actions;
// export default productItemsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialCartData = JSON.parse(localStorage.getItem("Cart")) || [];

// const initialState = {
//     items: initialCartData,
//     totalQuantity: initialCartData.reduce((total, item) => total + item.quantity, 0),
//     localStorageItems: initialCartData,
// };

// const productItemsSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {
//         addProduct(state, action) {
//             const newItem = action.payload;
//             const existingItem = state.items.find((item) => item.id === newItem.product_id);

//             if (!existingItem) {
//                 state.items.push({
//                     id: newItem.product_id,
//                     name: newItem.product_name,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                     image: newItem.product_images,
//                     category: newItem.category,
//                 });
//             } else {
//                 existingItem.quantity++;
//                 existingItem.totalPrice += newItem.price;
//             }

//             updateLocalStorage(state);
//         },
//         removeProduct(state, action) {
//             const itemToRemove = action.payload;
//             const indexToRemove = state.items.findIndex((item) => item.id === itemToRemove.id);

//             if (indexToRemove !== -1) {
//                 state.totalQuantity -= state.items[indexToRemove].quantity;
//                 state.items.splice(indexToRemove, 1);
//                 updateLocalStorage(state);
//             }
//         },
//         increaseQuantity(state, action) {
//             const itemId = action.payload;
//             const itemToIncrease = state.items.find((item) => item.id === itemId);

//             if (itemToIncrease) {
//                 itemToIncrease.quantity++;
//                 itemToIncrease.totalPrice += itemToIncrease.price;
//                 state.totalQuantity++;
//                 updateLocalStorage(state);
//             }
//         },
//         decreaseQuantity(state, action) {
//             const itemId = action.payload;
//             const itemToDecrease = state.items.find((item) => item.id === itemId);

//             if (itemToDecrease && itemToDecrease.quantity > 1) {
//                 itemToDecrease.quantity--;
//                 itemToDecrease.totalPrice -= itemToDecrease.price;
//                 state.totalQuantity--;
//                 updateLocalStorage(state);
//             }
//         },
//     },
// });

// const updateLocalStorage = (state) => {
//     localStorage.setItem("Cart", JSON.stringify(state.items));
//     state.localStorageItems = JSON.parse(localStorage.getItem("Cart"));
// };

// export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = productItemsSlice.actions;
// export default productItemsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialCartData = JSON.parse(localStorage.getItem("Cart")) || [];

const initialState = {
    items: initialCartData,
    totalQuantity: initialCartData.reduce((total, item) => total + item.quantity, 0),
    localStorageItems: initialCartData,
};

const productItemsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.product_id);

            if (!existingItem) {
                state.items.push({
                    id: newItem.product_id,
                    name: newItem.product_name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.product_images,
                    category: newItem.category,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            updateLocalStorage(state);
        },
        removeProduct(state, action) {
            const itemToRemove = action.payload;
            const indexToRemove = state.items.findIndex((item) => item.id === itemToRemove.id);

            if (indexToRemove !== -1) {
                state.totalQuantity -= state.items[indexToRemove].quantity;
                state.items.splice(indexToRemove, 1);
                updateLocalStorage(state);
            }
        },

        // increaseQuantity(state, action) {
        //     const itemToIncrease = action.payload;
        
        //     if (itemToIncrease) {
        //         const updatedItem = {
        //             ...itemToIncrease,
        //             quantity: itemToIncrease.quantity + 1,
        //             totalPrice: itemToIncrease.totalPrice + itemToIncrease.price
        //         };
        
        //         // Find the index of the item in the items array
        //         const index = state.items.findIndex(item => item.id === itemToIncrease.id);
        
        //         // Replace the item in the items array with the updated item
        //         state.items[index] = updatedItem;
        
        //         state.totalQuantity++;
        //         updateLocalStorage(state);
        //     }
        // }
        
        increaseQuantity(state, action) {
            const itemId = action.payload;
            const itemToIncrease = state.items.find((item) => item.id === itemId);
            // const itemToIncrease = action.payload;
            if (itemToIncrease) {
                itemToIncrease.quantity++;
                itemToIncrease.totalPrice += itemToIncrease.price;
                state.totalQuantity++;
                updateLocalStorage(state);
            }
        },
        decreaseQuantity(state, action) {
            const itemId = action.payload;
            const itemToDecrease = state.items.find((item) => item.id === itemId);

            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity--;
                itemToDecrease.totalPrice -= itemToDecrease.price;
                state.totalQuantity--;
                updateLocalStorage(state);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(productItemsSlice.actions.addProduct, (state, action) => {
            state.totalQuantity += action.payload.quantity;
        });
        builder.addCase(productItemsSlice.actions.removeProduct, (state, action) => {
            state.totalQuantity -= action.payload.quantity;
        });
    },
});

const updateLocalStorage = (state) => {
    localStorage.setItem("Cart", JSON.stringify(state.items));
    state.localStorageItems = JSON.parse(localStorage.getItem("Cart"));
};

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = productItemsSlice.actions;

export const selectGrandTotal = (state) => {
    return state.productItem.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export default productItemsSlice.reducer;

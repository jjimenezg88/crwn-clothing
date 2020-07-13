export const addItemtoCart = (cartItems, cartItemToAdd) => {
    const existingCarItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCarItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCarItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCarItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingCarItem.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}
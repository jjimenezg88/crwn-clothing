import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from './../../redux/cart/cart.selector';
import { toggleCartHidden } from './../../redux/cart/cart.actions'
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CartDropdownButton
} from './cart-dropdown.styles';
import CartItem from './../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : (
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                    )
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React, { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const API_SERVER = 'http://localhost:8080';

export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject<Cart | null>(null);

export const getCart = () =>
  fetch(`${API_SERVER}/cart`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      cart.next(data);
      return data;
    });

export const addToCart = (id: string) =>
  fetch(`${API_SERVER}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({id}),
  }).then(() => getCart());

export const clearCart = () =>
  fetch(`${API_SERVER}/cart`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.value}`,
    },
  }).then(() => getCart());

export const login = (username: string, password: string) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);
      getCart();
      return data.access_token;
    });

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    jwt.subscribe((token) => setLoggedIn(!!token));

    return () => jwt.unsubscribe();
  }, []);
  return loggedIn;
};

import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from '../../products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }): Promise<Cart> {
    const cart = this.carts[req.user.userId] ?? { cartItems: [] };
    const productToAdd = products.find((product) => product.id === id);
    if (!productToAdd) {
      return;
    }
    const cartItem = cart.cartItems.find((item) => item.id === id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.cartItems.push({ ...productToAdd, quantity: 1 });
    }
    this.carts[id] = cart;

    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() req): Promise<void> {
    this.carts[req.user.userId] = {
      cartItems: [],
    };
  }
}

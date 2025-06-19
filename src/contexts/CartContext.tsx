import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  size?: string;
  category: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discount: number;
  finalTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const cartData = JSON.parse(storedCart);
        setItems(cartData.items || []);
        setAppliedCoupon(cartData.appliedCoupon || null);
        setDiscount(cartData.discount || 0);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const cartData = {
      items,
      appliedCoupon,
      discount
    };
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [items, appliedCoupon, discount]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      // Convert numeric id to string if needed
      const itemId = typeof item.id === 'number' ? String(item.id) : item.id;
      const itemWithStringId = { ...item, id: itemId };
      
      const existingItem = prevItems.find(cartItem => cartItem.id === itemId);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...itemWithStringId, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string | number) => {
    const idStr = typeof id === 'number' ? String(id) : id;
    setItems(prevItems => prevItems.filter(item => item.id !== idStr));
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    const idStr = typeof id === 'number' ? String(id) : id;
    if (quantity <= 0) {
      removeFromCart(idStr);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === idStr ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
    setDiscount(0);
  };

  const applyCoupon = (code: string): boolean => {
    // Mock coupon validation
    const validCoupons = {
      'MONSOON': 0.15, // 15% off
      'WELCOME10': 0.10, // 10% off
      'LUXURY20': 0.20, // 20% off
    };

    if (validCoupons[code as keyof typeof validCoupons]) {
      setAppliedCoupon(code);
      setDiscount(validCoupons[code as keyof typeof validCoupons]);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const finalTotal = total * (1 - discount);

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discount,
    finalTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
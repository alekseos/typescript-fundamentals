
interface CartItem {
    name: string;
    price: number;
    quantity: number;
}
interface CartApi {
    length: number;
    total: number;
    addItem(item: CartItem): CartApi;
    add(name: string, price: number, quantity: number): CartApi;
}

export function cashier() {
    let items: CartItem[] = [];
    return {
        get length() {
            return items.reduce((acc, cartItem) => { 
                return acc + cartItem.quantity;
            }, 0)
        },
        get total() {
            return items.reduce((acc, cartItem) => {
                return acc + (cartItem.quantity * cartItem.price);
            }, 0)
        },
        addItem(item: CartItem): CartApi {
            items.push(item);
            return this;
        },
        add(name: string, price: number, quantity = 1): CartApi {
            items.push({
                name, price, quantity
            });
            return this;
        },
    }
}

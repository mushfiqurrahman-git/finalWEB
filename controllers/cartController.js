 
const Cart = require('../models/cart');

//for getting all the cart items
exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//for getting single cart item by id
exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//for creating a new cart
exports.createCart = async (req, res) => {
    const cart = new Cart({
        products: req.body.products,
        quantities: req.body.quantities,
        user: req.body.user
    });
    try {
        const newCart = await cart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//updating individual cart
exports.updateCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const updatedCart = await cart.save();
        res.json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//deleting cart by it's id
exports.deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        await cart.remove();
        res.json({ message: 'Cart deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

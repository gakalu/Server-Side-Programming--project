let bookss = [];

module.exports = class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(p => p.id === this.id);
        if (index > -1) {
            books.put(this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return books;
    }

    static findById(productId) {
        const index = books.findIndex(p => p.id === productId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(productId) {
        const index = books.findIndex(p => p.id === productId);
        if (index > -1) {
            products = books.filter(p => p.id !== productId);
        } else {
            throw new Error('NOT Found');
        }
    }

}
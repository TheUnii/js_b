import express from "express"

const app = express()

app.use(express.json())

class Product {
    constructor(id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
}

class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }
}

class Order {
    constructor(id, userId, productId) {
        this.id = id
        this.userId = userId
        this.productId = productId
    }
}

let products = [
    new Product(1, "Ноутбук", 50000),
    new Product(2, "Телефон", 30000)
]

let users = []

let orders = []

//product
app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id)

    const product = products.find(product => product.id === id);

    res.json(product);
})

app.post("/products", (req, res) => {
    const product = new Product(
        products.length + 1,
        req.body.name,
        req.body.price
    )

    products.push(product)

    res.json(product)
})

app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id)

    const product = products.find(product => product.id === id)

    product.name = req.body.name
    product.price = req.body.price

    res.json(product)
})

app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id)

    products = products.filter(product => product.id !== id)

    res.json({message: "Товар удалён"})
})

//user
app.get("/users", (req, res) => {
    res.json(users)
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id)

    const user = users.find(user => user.id === id)

    res.json(user)
})

app.post("/users", (req, res) => {
    const user = new User(
        users.length + 1,
        req.body.name,
        req.body.email
    )

    users.push(user)

    res.json(user)
})

app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id)

    const user = users.find(user => user.id === id)

    user.name = req.body.name
    user.email = req.body.email

    res.json(user)
})

app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id)

    users = users.filter(user => user.id !== id)

    res.json({message: "Пользователь удалён"})
})


//order
app.get("/orders", (req, res) => {
    res.json(orders)
});

app.get("/orders/:id", (req, res) => {
    const id = Number(req.params.id)

    const order = orders.find(order => order.id === id)

    res.json(order)
})

app.post("/orders", (req, res) => {
    const order = new Order(
        orders.length + 1,
        req.body.userId,
        req.body.productId
    );

    orders.push(order)

    res.json(order)
})

app.put("/orders/:id", (req, res) => {
    const id = Number(req.params.id)

    const order = orders.find(order => order.id === id)

    order.userId = req.body.userId
    order.productId = req.body.productId

    res.json(order)
})

app.delete("/orders/:id", (req, res) => {
    const id = Number(req.params.id)

    orders = orders.filter(order => order.id !== id)

    res.json({
        message: "Заказ удалён"
    })
})



app.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000")
})
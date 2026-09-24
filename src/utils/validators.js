export function isValEmail(email) {
    return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isValPassword(password) {
    return typeof password === "string" && password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[a-z]/.test(password) 
}

export function valUser(data) {
    if (typeof data.name !== "string") {
        return "Имя должно быть строкой"
    }

    if (!isValEmail(data.email)) {
        return "Некорректный email"
    }

    return null
}

export function valProduct(data) {
    if (typeof data.name !== "string") {
        return "Название товара должно быть строкой"
    }

    if (typeof data.price !== "number") {
        return "Цена должна быть числом"
    }

    return null
}

export function valOrder(data) {
    if (!Number.isInteger(data.userId)) {
        return "userId должен быть числом"
    }

    if (!Number.isInteger(data.productId)) {
        return "productId должен быть числом"
    }

    return null
}
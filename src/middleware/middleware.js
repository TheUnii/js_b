export function logger(req, res, next) {
    console.log(req.method, req.url, new Date())
    next()
}

export function adminAuthorization(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "Нет авторизации"
        })
    }

    next()
}

const requests = {}

export function rateLimit(req, res, next) {
    const ip = req.ip
    const time = Date.now()

    if (!requests[ip]) {
        requests[ip] = []
    }

    requests[ip] = requests[ip].filter(time2 => time - time2 < 10000)

    requests[ip].push(time)

    console.log(ip, requests[ip].length)

    if (requests[ip].length > 5) {
        return res.status(429).json({
            message: "Слишком много запросов"
        })
    }

    next()
}
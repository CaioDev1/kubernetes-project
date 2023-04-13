function exclude<T, Key extends keyof T>(user: T, keys: Key[]): Omit<T, Key> {
    for (let key of keys) {
        delete user[key]
    }

    return user
}

export default function main<T, K extends keyof T>(data: T, attribute: K[]) {
    const dataWithoutAttribute = exclude<T, K>(data, attribute)

    return dataWithoutAttribute
}
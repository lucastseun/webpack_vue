const merge = (target = {}, source = {}) => {
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key) && source[key]) {
            target[key] = source[key]
        }
    }
    return target
}

const bodyParms = (body = {}) => {
    const map = []
    for (const key in body) {
        if (Object.hasOwnProperty.call(body, key)) {
            const item = `${key}=${body[key]}`;
            map.push(item)
        }
    }
    return map.join('&')
}

const toUpperCase = (str = '') => Object.prototype.toUpperCase.call(str)

const toLowerCase = (str = '') => String.prototype.toLowerCase.call(str)

export {
    merge,
    bodyParms,
    toUpperCase,
    toLowerCase
}
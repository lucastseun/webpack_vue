const NODE_ENV = process.env.NODE_ENV

const env = {
    DEV: NODE_ENV === 'development',
    PROD: NODE_ENV === 'production'
}

if (env.DEV) {
    env.MOCK = true // 本地mocK数据，设置为true
}

export default env
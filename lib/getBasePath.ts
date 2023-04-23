const getBasePath = () => {
    let baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`

    return baseUrl
}

export default getBasePath
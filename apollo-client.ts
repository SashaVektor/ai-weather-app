import {ApolloClient, InMemoryCache} from "@apollo/client"

export const getClient = () => {
    const client = new ApolloClient({
        uri: 'https://abrera.stepzen.net/api/honking-hog/__graphql',
        headers: {'Authorization':`apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`},
        cache: new InMemoryCache(),
    })

    return client
}
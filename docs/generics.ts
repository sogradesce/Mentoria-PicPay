// Cria dois tipos distintos
type Store = {
    name: string
    address: string
    numberOfClients: number
}

type Ecommerce = {
    name: string
    website: string
    numberOfClients: number
}

// Cria função com generics
function addNewClient<T>(place: T): T {
    if ("numberOfClients" in place) {
        place["numberOfClients"] += 1
    }
    return place
}

// Cria duas variáveis, uma de cada tipo, e usa a função com generics
let store: Store = {
    name: "Centauro",
    address: "Shopping Blabla",
    numberOfClients: 0
}

let ecom: Ecommerce = {
    name: "Kabum",
    website: "www.kabum.com.br",
    numberOfClients: 0
}

addNewClient(store)
addNewClient(ecom)
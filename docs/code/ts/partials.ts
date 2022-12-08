type Address = {
    street: string
    city: string
    state: string
}

function createAddr(street: string, city: string) {
    let addr: Address = { // Erro: Property 'state' is missing
        street: street,
        city: city
    }

    return addr
}

function createPartialAddr(street: string, city: string) {
    let addr: Partial<Address> = {
        street: street,
        city: city
    }

    return addr
}
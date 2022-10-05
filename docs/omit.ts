type User = {
    name: string
    age: number
    password: string
}

function printUser(usr: User) {
    console.log(usr.name)
    console.log(usr.age)
    console.log(usr.password)
}

function printOmitUser(usr: Omit<User, "password">) {
    console.log(usr.name)
    console.log(usr.age)
    console.log(usr.password) // Erro: Property 'password' does not exist
}
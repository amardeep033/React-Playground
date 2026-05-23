import { v4 as uuid } from "uuid";
const db = [
    { id: uuid(), title: "chicken", desc: "chicken is tasty", price: 100 },
    { id: uuid(), title: "paneer", desc: "paneer is tasty", price: 200 },
    { id: uuid(), title: "noodles", desc: "noodles is tasty", price: 300 }
]

export default db
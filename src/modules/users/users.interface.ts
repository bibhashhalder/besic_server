export type FullName ={
    firstName:string
    lastName:string
}
export type Address ={
    street:string
    city:string
    country:string
}
export type Orders ={
    productName:string
    price:number
    quantity:number
}
export type users ={
    userId:number
    username:string
    password:string
    fullName:FullName
    age:number
    email:string
    isActive:boolean
    hobbis:string[]
    address:Address
    orders:Orders
}

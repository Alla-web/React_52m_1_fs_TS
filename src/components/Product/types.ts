export interface ProductProps {
    productName: string,
    productPrice?: number | string
    // productPrice: number | bigint // не работает?
}
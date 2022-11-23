import axios from "axios";

export const fetchProducts = async () => {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
    // );
    const response = await axios.get( `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`)
    console.log(response.data, "productget")
    console.log(process.env.NEXT_PUBLIC_BASE_URL, "envfile")

    
    // const products = [] as Product[]
    // console.log(res, "fetch product")
    

    // const data = await res.json();
    // console.log(data, "Pass")

    // const products: Product[] = data.products;
    // console.log(products, "fetch product")

    return [];
}
import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    description:string;
    // image:string;  //Este es un beneficio de usar interface, cuando le cambio algo , 
    //luego luego saltan los errores de lo que tengo que corregir y esto lo hace mas facil.
    creationAt: string;
    category:Category;  // Category es otro interface 

}
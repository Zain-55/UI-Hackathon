export interface Product{
    originalPrice(originalPrice: any, price: number): unknown;
    category: string;
    colors: any;
    reviews: any;
    sizes: any;
    comments: any;
    rating: number;
    image: string;
    quantity: number;
    
    
    _id:string;
    _type : "products";
    title : string;
    price :number;
    productImage: {
        
        asset : {
            _ref : string
            _type : "image";
        }
    };
   
    tags: string;
    description : string;
    dicountPercentage : number;
    isNew : boolean;
    slug: {
        _type : "slug";
        current : string
    }

    product : number
}
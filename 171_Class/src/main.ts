// Class
class Product 
{
    id:number; //this is called member of class
    name:string;
    price:number;

    constructor (ID:number , Name:string , Price:number)
    {
        this.id = ID;
        this.name = Name;
        this.price = Price;
    }

    info() : string //class method
    {
        return `
        ID:${this.id},
        Name:${this.name},
        Price:$${this.price}
        `
    }
}

let product = new Product(9 ,"Shoes" , 10 );

console.log(product.info());


export interface IHouse{
    name : string;
    id : string;
    location : string;
    area : string;
    imgSrc : string;
    bedroomNumber : number;
    type : 'Rent' | 'Sale';
    price : number;
    link : string;
}
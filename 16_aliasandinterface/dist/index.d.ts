interface Fruit {
    name: string;
    taste: string;
    color: string;
    allSeason: boolean;
}
interface Mango extends Fruit {
    price: number;
}
declare let fruit1: Mango;
declare let fruit2: Fruit;

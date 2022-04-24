
class Coordinate {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    protected abcd() { }
}

class MyCoordinate extends Coordinate {
    get anything() {
        return this.x
    }

    set anything(value: number) {
        this.x = value
    }
}

const point = new MyCoordinate(44, 5)
point.anything = 55
console.log(point.anything);
/* class Coordinate {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

   
    protected abc(){

    }
}

class MyCoordinate extends Coordinate {
        public get X() {
            return this.x
        }

        public set X(value:number){
            this.x= value
        }


}
 
const point = new MyCoordinate(44, 5)
point.X = 55

console.log(point.X); */
class Beverage {
    constructor(desc, cost) {
        this._description = desc;
        this._cost = cost;
    }

    get Description() {
        return this._description;
    }

    set Description(value) {
        this._description = value;
    }

    get Cost() {
        return this._cost;
    }

    set Cost(value) {
        this._cost = value;
    }
}

class DarkRoast extends Beverage {
    constructor() {
        super("Dark Roast Coffee", 0.99);
    }
}

class Decaf extends Beverage {
    constructor() {
        super("Decaf Coffee", 1.05);
    }
}

class Espresso extends Beverage {
    constructor() {
        super("Espresso", 1.99);
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super("House Blend Coffee", 0.89);
    }
}

///////////////////////////////////////////////////////////////
class CondimentDecorator extends Beverage {
    constructor(beverage) {
        super(beverage.Description, beverage.Cost);
        this._beverage = beverage;
    }
}

///////////////////////////////////////////////////////////////
class Whip extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    get Description() {
        return this._beverage.Description + ", Whip";
    }

    get Cost() {
        return .10 + this._beverage.Cost;
    }
}

class Milk extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    get Description() {
        return this._beverage.Description + ", Milk";
    }

    get Cost() {
        return .10 + this._beverage.Cost;
    }
}

class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    get Description() {
        return this._beverage.Description + ", Mocha";
    }

    get Cost() {
        return .20 + this._beverage.Cost;
    }
}

class Soy extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    get Description() {
        return this._beverage.Description + ", Soy";
    }

    get Cost() {
        return .15 + this._beverage.Cost;
    }
}


function Run()
{
    let beverage = new Espresso();

    console.log(beverage.Description + " $" + beverage.Cost);

    let beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.Description + " $" + beverage2.Cost);

    let beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(beverage3.Description + " $" + beverage3.Cost);
}
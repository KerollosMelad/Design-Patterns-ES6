class Person {

    constructor(iIPaymentStrategy) {
        this._IPaymentStrategy = iIPaymentStrategy;
    }

    Pay(amount) {
        this._IPaymentStrategy.Pay(amount);
    }
}

class Wife extends Person {
    constructor() {
        super(new DebitCard());
    }

    Pay(amount) {
        console.log("Wife: ")
        super.Pay(amount);
    }
}


class Husband extends Person {
    constructor(iIPaymentStrategy) {
        super(iIPaymentStrategy);
    }

    Pay(amount) {
        console.log("Husband: ")
        super.Pay(amount);
    }

    set PaymentStrategy(iIPaymentStrategy) {
        this._IPaymentStrategy = iIPaymentStrategy;
    }
}
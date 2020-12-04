class IStore {
    constructor() {
    }

    // add event listener
    Attach (Observer){
        console.log('customer wants to notify');
        this.observers.push(Observer);
    }

    //remove event listener
    Dettach (Observer){
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    // invoke
    Notify (newProduct){
        for(var i in this.observers){
            this.observers[i].Update(newProduct);
        }
    }
}

class Store extends IStore {
    constructor() {
        super()
        this.observers = []
    }

    NotfiyWithNewProduct(newProduct) {
        this.Notify(newProduct)
    }
}

class ICustomer {
    constructor() {
    }

    Update (newProduct){
    }
}

class Customer extends ICustomer {
    constructor(name) {
        super()
        this.name = name;
        console.log('customer created', this.name);
    }

    Update (newProduct){
        console.log(this.name , 'new mail with ' + newProduct)
    }
}



function init_Observer() {
    var customer1 = new Customer("Ali");
    var customer2 = new Customer("Ahmed");
    var customer3 = new Customer("Ibrahem");
    
    var store = new Store();
    store.Attach(customer1);
    store.Attach(customer2);

    store.NotfiyWithNewProduct("Iphone 12");
}
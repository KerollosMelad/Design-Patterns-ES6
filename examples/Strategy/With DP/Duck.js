class Duck {

    ///Has A can be better Than Is A
    ///Composition is Way Better than Inheritance

    constructor(iFly, iQuack) {
        ///Develop Against Abstraction not Against Concrete Implementation
        ///Declare Ref from Base Type no Derived 

        this._FlyBehavior = iFly;
        this._QuackBehavior = iQuack;
    }

    set FlyBehavior(iFly) {
        this._FlyBehavior = iFly;
    }

    set QuackBehavior(iQuack) {
        this._QuackBehavior = iQuack;
    }

    Fly() {
        ///Delegation 
        ///Redirect Message to Has-A (Composite Object)
        this._FlyBehavior.Fly();
    }

    Quack() {
        this._QuackBehavior.Quack();
    }

    Swim() {
        console.log("Swimming");
    }

    Display() { }
}
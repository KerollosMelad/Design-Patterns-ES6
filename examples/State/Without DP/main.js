const ObjectState = {
    Silver: 0,
    Gold: 1,
    Platinum: 2
};

class StateMachine {
    constructor() {
        this._state = ObjectState.Silver;
    }

    set State(objectState) {
        this._state = objectState;
    }

    get State() {
        return this._state;
    }

    BehaviorA() {
        switch (this._state) {
            case ObjectState.Silver:
                //this._state = ObjectState.Gold;
                return 10;
                break;
            case ObjectState.Gold:
                return 20;
                break;
            case ObjectState.Platinum:
                return 30;
                break;
        }
        return 0;
    }

    BehaviorB() {
        switch (this._state) {
            case ObjectState.Silver:
                console.log("One");
                break;
            case ObjectState.Gold:
                console.log("Two");
                break;
            case ObjectState.Platinum:
                console.log("Three");
                break;
        }
    }

    BehaviorC() {
        switch (this._state) {
            case ObjectState.Silver:
            case ObjectState.Gold:
                ///State Transition
                //this._state = ObjectState.Platinum;
                return true;
                break;
            case ObjectState.Platinum:
                return false;
                break;
        }
        return false;
    }
}

function Run() {
    let machine = new StateMachine();

    console.log(machine.State);

    console.log(machine.BehaviorA());
    machine.BehaviorB();
    console.log(machine.BehaviorC());

    ///State Transition
    machine.State = ObjectState.Gold;
    console.log(machine.State);
    
    console.log(machine.BehaviorA());;
    machine.BehaviorB();
    console.log(machine.BehaviorC());;
}
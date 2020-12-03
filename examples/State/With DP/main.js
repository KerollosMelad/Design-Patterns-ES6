class IState {
    BehaviorA() {}
    BehaviorB() {}
    BehaviorC() {}
}

///Concrete State
class Silver extends IState {
    //StateMachine _Maching; /// To Enable Concrete State to Manage State Transitions

    BehaviorA() {
        return 10;
    }

    BehaviorB() {
       console.log("One");
    }

    BehaviorC() {
        return true;
    }

    toString() {
        return "Silver State Object";
    }
}

///Concrete State
class Gold extends IState {
    BehaviorA() {
        return 20;
    }

    BehaviorB() {
       console.log("Two");
    }

    BehaviorC() {
        return true;
    }

    toString() {
        return "Gold State Object";
    }
}


///Intorduce New Object State - Platinum 
///Open for Extension - Closed for Modification

class Platinum extends IState {
    BehaviorA() {
        return 30;
    }

    BehaviorB() {
       console.log("Three");
    }

    BehaviorC() {
        return false;
    }

    toString() {
        return "New Platinum State";
    }
}


//////////////////////////////////////////////////////////////////////////////////
class StateMachine {
    constructor() {
        this._state = new Silver();
    }

    set State(iState) {
        this._state = iState;
    }

    get State() {
        return this._state;
    }

    BehaviorA() {
        ///Delegation 
        return this._state.BehaviorA();
    }

    BehaviorB() {
        this._state.BehaviorB();
    }


    BehaviorC() {
        return this._state.BehaviorC();
    }
}


function Run() {
    let machine = new StateMachine();

    console.log(machine.State);

    console.log(machine.BehaviorA());
    machine.BehaviorB();
    console.log(machine.BehaviorC());

    ///State Transition
    machine.State = new Platinum();
    
    console.log(machine.State);
    console.log(machine.BehaviorA());
    machine.BehaviorB();
    console.log(machine.BehaviorC());
}




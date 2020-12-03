'use strict';

class IMediator {
    constructor() {}
    Send(message, colleague){}
}


class ConcreteMediator extends IMediator {
    constructor() {
        super()
        console.log('ConcreteMediator created')
        this._colleague1 = new ConcreteColleague1(this)
        this._colleague2 = new ConcreteColleague2(this)
    }

    set Colleague1(colleague1) {
        this._colleague1 = colleague1;
    }

    set Colleague2(colleague2) {
        this._colleague2 = colleague2;
    }

    Send(message, colleague) {
        if (colleague == this._colleague1) {
            this._colleague2.Notify(message);
        } else {
            this._colleague1.Notify(message);
        }
    }
}

class Colleague {
    constructor(mediator) {
        this._mediator = mediator;
    }
}

class ConcreteColleague1 extends Colleague {
    constructor(mediator) {
        super(mediator)
        console.log('ConcreteColleague1 created')
    }

    Send(message) {
        this._mediator.Send(message, this);
    }

    Notify(message) {
        console.log("Colleague1 gets message: " + message);
    }
}


class ConcreteColleague2 extends Colleague {
    constructor(mediator) {
        super(mediator)
        console.log('ConcreteColleague2 created')
    }

    Send(message) {
        this._mediator.Send(message, this);
    }

    Notify(message) {
        console.log("Colleague2 gets message: " + message);
    }
}


function init_Mediator() {
    var mediator = new ConcreteMediator()

    var c1 = new ConcreteColleague1(mediator);
    var c2 = new ConcreteColleague2(mediator);

    mediator.Colleague1 = c1;
    mediator.Colleague2 = c2;

    c1.Send("How are you?");
    c2.Send("Fine, thanks");
}
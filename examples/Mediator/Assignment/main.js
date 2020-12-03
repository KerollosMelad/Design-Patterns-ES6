class AbstractChatroom {
    Register(participant) {}
    Send(message, from, to) {}
}

class Chatroom extends AbstractChatroom {
    constructor() {
        super();
        // name Participant
        this._participants = new Map();
    }

    Register(participant) {
        if (!this._participants.has(participant.Name)) {
            this._participants.set(participant.Name, participant);
        }

        participant.Chatroom = this;
    }

    Send(message, fromName, toName) {
        if (toName) { // single message
            let participant = this._participants.get(toName);

            if (participant != null) {
                participant.Receive(message, fromName);
            }
        } else { // broadcast message
            this._participants.forEach((value, key, map) => {
                if (key !== fromName) {
                    value.Receive(message, fromName);
                }
            });
        }
    }
}

class AbstractParticipant {
    constructor(name) {
        this.Name = name;
    }

    set Chatroom(chatroom) {
        this._chatroom = chatroom;
    }

    // Send a message to given participant
    Send(message, toName) {
        this._chatroom.Send(message, this.Name, toName);
    }

    // Receive message from participant
    Receive(message, fromName) {
        console.log(`from ${fromName}: to ${this.Name}: ${message}`);
    }
}

class Participant extends AbstractParticipant {
    constructor(name) {
        super(name);
    }

    Receive(message, fromName) {
        //   console.log("To a Beatle: ");
        super.Receive(message, fromName);
    }
}

function init_Mediator() {
    // Create chatroom participants
    let Peter = new Participant("Peter");
    let Samy = new Participant("Samy");
    let Pola = new Participant("Pola");
    let Fady = new Participant("Fady");
    let Sara = new Participant("Sara");

    // Create chatroom and register participants
    var chatroom = new Chatroom();
    chatroom.Register(Peter);
    chatroom.Register(Samy);
    chatroom.Register(Pola);
    chatroom.Register(Fady);
    chatroom.Register(Sara);

    // Chatting participants
    Peter.Send("All you need is love.");
    Sara.Send("I love you John.");
    Fady.Send("Hey, no need to broadcast", Sara.Name);
    Samy.Send("Ha, I heard that!");
    Pola.Send("Paul, what do you think?", Samy.Name);
}
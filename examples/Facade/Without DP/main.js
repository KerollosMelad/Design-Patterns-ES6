class DVD {
    turnOn() {
        console.log('DVD, Turned ON');
    }

    turnOff() {
        console.log('DVD, Turned OFF');
    }

    start() {
        console.log('DVD, Started');
    }
}

class SoundSystem {
    turnOn() {
        console.log('SoundSystem, Turned ON');
    }

    turnOff() {
        console.log('SoundSystem, Turned OFF');
    }

    start() {
        console.log('SoundSystem, Started');
    }
}

class Projector {
    turnOn() {
        console.log('Projector, Turned ON');
    }

    turnOff() {
        console.log('Projector, Turned OFF');
    }

    start() {
        console.log('Projector, Started');
    }
}

////............


function withoutFacade() {
    // client
    let dvd = new DVD();
    dvd.turnOn();

    let soundSysm = new SoundSystem();
    soundSysm.turnOn();

    let projector = new Projector();
    projector.turnOn();

    ///
    soundSysm.start();
    dvd.start();
    projector.start();


    //
    soundSysm.turnOff();
    dvd.turnOff();
    projector.turnOff();
}
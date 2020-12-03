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
class HomeFacade{
    constructor()
    {
        this.dvd = new DVD();
        this.soundSysm = new SoundSystem();
        this.projector = new Projector();
    }
    WatchMovie(moveName){
        this.dvd.turnOn();
        this.soundSysm.turnOn();
        this.projector.turnOn();
    
        ///
        this.soundSysm.start();
        this.dvd.start();
        this.projector.start();
    
    
        //
        this.soundSysm.turnOff();
        this.dvd.turnOff();
        this.projector.turnOff();
    }
}

function withFacade() {
  // client
  let homeSystem = new HomeFacade();
  homeSystem.WatchMovie('the queen\'s gambit');
}
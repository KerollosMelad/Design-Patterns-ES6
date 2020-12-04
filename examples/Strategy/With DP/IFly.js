//interface
class IFly {
    Fly() {};
}

class FlyNormalSpeed extends IFly {
    Fly() {
        console.log("Fly Normal Speed");
    }
}

class NoFly extends IFly {
    Fly() {
        console.log("No Wing To Fly");
    }
}

class FlyRocketSpeed extends IFly {
    Fly() {
        console.log("Fly Rocket Speed");
    }
}
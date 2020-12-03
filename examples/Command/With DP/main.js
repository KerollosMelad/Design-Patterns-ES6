'use strict';
//////////////////////// client //////////////////////////////
function Run() {
    var remoteControl = new RemoteControl();

    var livingRoomLight = new Light("Living Room");
    var kitchenLight = new Light("Kitchen");
    var ceilingFan = new CeilingFan("Living Room");
    var stereo = new Stereo("Living Room");

    var livingRoomLightOn = new LightOnCommand(livingRoomLight);
    var livingRoomLightOff = new LightOffCommand(livingRoomLight);
    var kitchenLightOn = new LightOnCommand(kitchenLight);
    var kitchenLightOff = new LightOffCommand(kitchenLight);
    var ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
    var ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
    var stereoOnWithCD = new StereoOnWithCDCommand(stereo);
    var stereoOff = new StereoOffCommand(stereo);


    remoteControl.SetCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.SetCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.SetCommand(2, ceilingFanMedium, ceilingFanOff);
    remoteControl.SetCommand(3, stereoOnWithCD, stereoOff);

    remoteControl.OnButtonWasPushed(0);
    remoteControl.OffButtonWasPushed(0);
    remoteControl.OnButtonWasPushed(1);
    remoteControl.OffButtonWasPushed(1);
    remoteControl.OnButtonWasPushed(2);
    remoteControl.OffButtonWasPushed(2);
    remoteControl.OnButtonWasPushed(3);
    remoteControl.OffButtonWasPushed(3);
}

//////////////////////// invoker //////////////////////////////
class RemoteControl {
    constructor() {
        this._onCommands = new Array(7);
        this._offCommands = new Array(7);

        let noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this._onCommands[i] = noCommand;
            this._offCommands[i] = noCommand;
        }
        this._undoCommand = noCommand;
    }

    SetCommand(slot, onCommand, offCommand) {
        this._onCommands[slot] = onCommand;
        this._offCommands[slot] = offCommand;
    }

    OnButtonWasPushed(slot) {
        console.log('on button was pushed', slot);
        this._onCommands[slot].Execute();
        this._undoCommand = this._onCommands[slot];
    }

    OffButtonWasPushed(slot) {
        console.log('off button was pushed', slot);
        this._offCommands[slot].Execute();
        this._undoCommand = this._offCommands[slot];
    }

    UndoButtonWasPushed() {
        this._undoCommand.Undo();
    }
}

//////////////////////// Command //////////////////////////////
class ICommand {
    Execute() {}
    Undo() {}
}

class NoCommand extends ICommand {
    Execute() {}
    Undo() {}
}

class TVOnCommand extends ICommand {
    constructor(tv) {
        super();
        this._tv = tv;
    }

    Execute() {
        this._tv.On();
        this._tv.SetInputChannel(3);
    }

    Undo() {
        this._tv.Off();
    }
}

class TVOffCommand extends ICommand {
    constructor(tv) {
        super();
        this._tv = tv;
    }

    Execute() {
        this._tv.Off();
    }

    Undo() {
        this._tv.On();
    }
}

class StereoOnCommand extends ICommand {
    constructor(stereo) {
        super();
        this._stereo = stereo;
    }

    Execute() {
        this._stereo.On();
    }

    Undo() {
        this._stereo.Off();
    }
}

class StereoOffCommand extends ICommand {
    constructor(stereo) {
        super();
        this._stereo = stereo;
    }

    Execute() {
        this._stereo.Off();
    }

    Undo() {
        this._stereo.On();
    }
}

class StereoOnWithCDCommand extends ICommand {

    constructor(stereo) {
        super();
        this._stereo = stereo;
    }

    Execute() {
        this._stereo.On();
        this._stereo.SetCD();
        this._stereo.SetVolume(11);
    }

    Undo() {
        this._stereo.Off();
    }
}

class LivingroomLightOnCommand extends ICommand {
    constructor(light) {
        super();
        this._light = light;
    }

    Execute() {
        this._light.On();
    }

    Undo() {
        this._light.Off();
    }
}

class LivingroomLightOffCommand extends ICommand {
    constructor(light) {
        super();
        this._light = light;
    }

    Execute() {
        this._light.Off();
    }

    Undo() {
        this._light.On();
    }
}

class LightOnCommand extends ICommand {
    constructor(light) {
        super();
        this._light = light;
    }

    Execute() {
        this._light.On();
    }

    Undo() {
        this._light.Off();
    }
}

class LightOffCommand extends ICommand {
    constructor(light) {
        super();
        this._light = light;
    }

    Execute() {
        this._light.Off();
    }

    Undo() {
        this._light.On();
    }
}

class CeilingFanOffCommand extends ICommand {
    constructor(ceilingFan) {
        super();
        this._ceilingFan = ceilingFan;
    }

    Execute() {
        this._prevSpeed = this._ceilingFan.Speed;
        this._ceilingFan.Off();
    }

    Undo() {
        switch (this._prevSpeed) {
            case CeilingFanSpeed.High:
                this._ceilingFan.High();
                break;
            case CeilingFanSpeed.Medium:
                this._ceilingFan.Medium();
                break;
            case CeilingFanSpeed.Low:
                this._ceilingFan.Low();
                break;
            case CeilingFanSpeed.Off:
                this._ceilingFan.Off();
                break;
        }
    }
}

class CeilingFanMediumCommand extends ICommand {
    constructor(ceilingFan) {
        super();
        this._ceilingFan = ceilingFan;
    }

    Execute() {
        this._prevSpeed = this._ceilingFan.Speed;
        this._ceilingFan.Medium();
    }

    Undo() {
        switch (this._prevSpeed) {
            case CeilingFanSpeed.High:
                this._ceilingFan.High();
                break;
            case CeilingFanSpeed.Medium:
                this._ceilingFan.Medium();
                break;
            case CeilingFanSpeed.Low:
                this._ceilingFan.Low();
                break;
            case CeilingFanSpeed.Off:
                this._ceilingFan.Off();
                break;
        }
    }
}

class CeilingFanHighCommand extends ICommand {
    constructor(ceilingFan) {
        super();
        this._ceilingFan = ceilingFan;
    }

    Execute() {
        this._prevSpeed = this._ceilingFan.Speed;
        this._ceilingFan.high();
    }

    Undo() {
        switch (this._prevSpeed) {
            case CeilingFanSpeed.High:
                this._ceilingFan.High();
                break;
            case CeilingFanSpeed.Medium:
                this._ceilingFan.Medium();
                break;
            case CeilingFanSpeed.Low:
                this._ceilingFan.Low();
                break;
            case CeilingFanSpeed.Off:
                this._ceilingFan.Off();
                break;
        }
    }
}


////////////////// Receiver ////////////////////////
class TV {
    constructor(location) {
        this._location = location;
    }

    On() {
        console.log(this._location + " TV is on");
    }

    Off() {
        console.log(this._location + " TV is off");
    }

    SetInputChannel(channel) {
        this._channel = channel;
        console.log(this._location + " TV channel " + this._channel + " is set for DVD");
    }
}

class Stereo {
    constructor(location) {
        this._location = location;
    }

    On() {
        console.log(this._location + " stereo is on");
    }

    Off() {
        console.log(this._location + " stereo is off");
    }

    SetCD() {
        console.log(this._location + " stereo is set for CD input");
    }

    setDVD() {
        console.log(this._location + " stereo is set for DVD input");
    }

    SetRadio() {
        console.log(this._location + " stereo is set for Radio");
    }

    SetVolume(volume) {
        console.log(this._location + " Stereo volume set to " + volume);
    }
}

class Light {
    constructor(location) {
        this._location = location;
    }

    On() {
        this._level = 100;
        console.log(this._location,"Light is on");
    }

    Off() {
        this._level = 0;
        console.log(this._location,"Light is off");
    }

    Dim(level) {
        if (Level == 0) {
            Off();
        } else {
            this._level = level;
            console.log(this._location, "Light is dimmed to " + Level + "%");
        }
    }
}

class CeilingFan {
    constructor(location) {
        this._location = location;
        this._speed = CeilingFanSpeed.Off;
    }

    High() {
        this._speed = CeilingFanSpeed.High;
        console.log(this._location + " ceiling fan is on high");
    }

    Medium() {
        this._speed = CeilingFanSpeed.Medium;
        console.log(this._location + " ceiling fan is on medium");
    }

    Low() {
        this._speed = CeilingFanSpeed.Low;
        console.log(this._location  + " ceiling fan is on low");
    }

    Off() {
        this._speed = CeilingFanSpeed.Off;
        console.log(this._location  + " ceiling fan is off");
    }
}

const CeilingFanSpeed = {
    High : 1,
    Medium : 2,
    Low : 3,
    Off : 4
};
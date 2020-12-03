class IPicture {
    constructor(type) {
        this._type = type;
    }

    get Type() {
        return this._type;
    }

    set Type(value) {
        this._type = value;
    }

    show() {
        console.log(this._type);
    }
}

class Photo extends IPicture {
    constructor() {
        super("Photo");
    }
}

class Portrait extends IPicture {
    constructor() {
        super("Portrait");
    }
}

///////////////////////////////////////////////////////////////
class PictureDecorator extends IPicture {
    constructor(picture) {
        super(picture.Type);
        this._picture = picture;
    }
}

///////////////////////////////////////////////////////////////
class Tag extends PictureDecorator {
    constructor(picture, tag) {
        super(picture);
        this._tag = tag;
    }

    show() {
        this._picture.show();
        console.log('with ', this._tag);
    }
}

class Border extends PictureDecorator {
    constructor(picture, borderColor) {
        super(picture);
        this._borderColor = borderColor;
    }

    show() {
        this._picture.show();
        console.log('with border Color', this._borderColor);
    }
}


function Run() {
    let myPic = new Photo();
    myPic = new Tag(myPic, "first Tag");
    myPic = new Tag(myPic, "Second Tag");
    myPic = new Border(myPic, "Blue");
    myPic = new Tag(myPic, "Third Tag");
    myPic = new Border(myPic, "Red");
    myPic.show();
}
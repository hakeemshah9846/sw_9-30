

class Button {

    constructor(content) {
        this.button = document.createElement('button');
        this.button.innerHTML = content;
        document.body.appendChild(this.button);
    }

    set width(width) {
        this.button.style.width = width + "px";
    }

    set height(height) {
        this.button.style.height = height + "px";
    }

     get width() {
        return this.button.style.width;
    }

    get height() {
        return this.button.style.height;
    }

    onClick(fn) {
        this.button.onclick = fn;
    }

}

let myButton = new Button('click here');
console.log("myButton : ", myButton);

myButton.width = 200;
myButton.height = 50;

console.log("Button width : ", myButton.width);
console.log("Button height : ", myButton.height);

myButton.onClick(function () {
    console.log("My button clicked...");
});


//Inheritance
class YellowButton extends Button {


    //Method overRiding
     onClick(fn) {
        this.button.onclick = function () {
            this.button.style.background = "yellow";
            fn();
        }.bind(this);
    }

}

let myYellowButton = new YellowButton("Yellow Button");
console.log("myYellowButton : ", myYellowButton);



myYellowButton.width = 300;
myYellowButton.height = 75;

console.log("myYellowButton width : ", myYellowButton.width);
console.log("myYellowButton height : ", myYellowButton.height);

myYellowButton.onClick(function() {
    console.log("Button clicked...");
})



 





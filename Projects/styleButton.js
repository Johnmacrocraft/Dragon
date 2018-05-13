"use strict";

/*
There's a story behind this...
about couple years or so ago me and godsoft on hangouts
were discussing ways to set a color or more to all buttons
without taking up too much space in the script(which takes up memory)
godsoft decided to send/code me this which would return a normal button
but also allow us to set a color etc to it.
*/

var color = "white";

/*
func styleButton(context)
made by Godsoft029 & ArceusMatt
This is a button that you can style & make as a default button.
*/
function styleButton(ctx) {
let button = new android.widget.Button(ctx);
button.setTextColor(color);
return button;
}

/* This is how you basically use it:
var myButton = new styleButton(ctx);
myButton.setText("BlahBlahBlah");
*/

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*This is the connection between the launcher's MainActivity.java & this script.
The MainActivity.java has it's own usable functions like enabling/disabling scripts.
(also connects to the ModPE api which is handling minecraft's c++ code.)
With the MainActivity.java we can run android code as the launcher.*/
"use strict";
var MainActivity = ctx;
const GL10 = javax.microedition.khronos.opengles.GL10;

/*

Made by ArceusMatt & sulfuricbliss3
copyright 2018 all rights reserved.

Do not copy code from this client or share this client without permission.

To share the client please use the following:
https://arceusmatt.github.io/dragon

   ____                              
  |  _ \ _ __ __ _  __ _  ___  _ __  
  | | | | '__/ _` |/ _` |/ _ \| '_ \ 
  | |_| | | | (_| | (_| | (_) | | | |
  |____/|_|  \__,_|\__, |\___/|_| |_|
                   |___/             

*/

/*
values
*/
var aimrange = 7;
var checkslapper = false;
var shadow1X = 30;
var shadow1Y = 2;
var pre = '§a[§fDragon§a]§r ';
var prefix = '*/';
var pdir = [0,0,0];
var max = 5;
var legalenchant = false;
var cd = new Date;
var min = cd.getMinutes();
var sec = 1;
var text = "";
var que = false;
var chestTracersRange = 10;
var chestTracersGroundMode = "on";
var getLang = ModPE.getLanguage();
var elevatorRange = 10;
var rainbow = false;
var ghost = false;
var reply = "";
var keybind = false;
var movable = false;
var pList = [];
var lockon = false;
var side = false;

/*interface*/
var background = android.graphics.Color.TRANSPARENT;
var btnColor = android.graphics.Color.parseColor("#93000000");
var stroke = android.graphics.Color.CYAN;
var btnText = android.graphics.Color.WHITE;
var btnTextSize = 12;

var background1 = "transparent";
var btnColor1 = "not yet";
var stroke1 = "green";
var btnText1 = "white";
var btnTextSize1 = 12;
//this second set of variables is for the settings saver.

/*
func styleButton() 
func styleInput()
made by ArceusMatt & godsoft029
*/
function styleButton() {
let button = new android.widget.Button(ctx);
button.setTextColor(btnText);
button.setTextSize(btnTextSize);
button.setFocusableInTouchMode(false);
button.setTransformationMethod(null);
button.setSoundEffectsEnabled(true);
var buttonBg = new android.graphics.drawable.GradientDrawable();
buttonBg.setColor(btnColor);
buttonBg.setStroke(3, stroke);
buttonBg.setCornerRadius(11);
button.setBackgroundDrawable(buttonBg);
return button;
}

function styleInput() {
let input = new android.widget.EditText(ctx);
input.setTextColor(android.graphics.Color.BLACK);
var inputBg = new android.graphics.drawable.GradientDrawable();	inputBg.setColor(android.graphics.Color.WHITE);
inputBg.setStroke(3, stroke);
inputBg.setCornerRadius(10);
input.setBackgroundDrawable(inputBg);
return input;
}

function dip2px(dips) {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

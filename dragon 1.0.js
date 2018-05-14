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
var stroke = android.graphics.Color.GREEN;
var btnText = android.graphics.Color.WHITE;
var btnTextSize = 12;

var background1 = "transparent";
var btnColor1 = "not yet";
var stroke1 = "green";
var btnText1 = "white";
var btnTextSize1 = 12;
//this second set of variables is for the settings saver.

/*
misc functions
*/
var dragon = {
deg_to_rad: function () {
return Math.PI / 180;
},
toDirectionalVector: function (dir, a, b) {
dir[0] = Math.cos(a) * Math.cos(b);
dir[1] = Math.sin(b);
dir[2] = Math.sin(a) * Math.cos(b);
},
sortSword: function (id) {
switch(id) {
case 268:
case 283:
return 5;
break;
case 272:
return 6;
break;
case 267:
return 7;
break;
case 276:
return 8;
break;
}
},
sortPots: function (id, dam) {
if(id == 438){
switch(dam){
case 21:
return 1;
break;
case 22:
return 2;
break;
}
}
},
sortFood: function (id) {
switch(id){
case 394:
case 367:
return 1;
break;
case 392:
return 2;
break;
case 319:
case 363:
case 391:
case 357:
case 360:
return 3;
break;
case 349:
case 460:
case 423:
case 411:
case 365:
return 4;
break;
case 432:
return 5;
break;
case 392:
case 297:
case 350:
return 6;
break;
case 463:
case 412:
case 396:
return 7;
break;
case 400:
case 260:
case 424:
return 8;
break;
case 366:
case 320:
case 364:
return 9;
break;
case 282:
case 459:
return 10;
break;
case 354:
case 322:
return 11;
break;
case 413:
return 12;
break;
case 466:
return 13;
break;
}
},
slapper: function(ent) {
/*hacky method to check for slappers.*/
var eid = Entity.getEntityTypeId(ent);
var name = Entity.getNameTag(ent);
if(eid == 63){

if(name != null && typeof(name) != "undefined"){
if(typeof(name) == "string"){
if(name != ""){
if(name.length <= 16){
if(!name.match(']') || !name.includes(']')){
if(name.match('§') || name.includes('§')){
return false;
} else {
return true;
}
} else {
return true;
}
} else {
return false;
}
}
}
}

} else {
return false;
}
},
rainbow: function () {
var sym = ["§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§0", "§a", "§b", "§c", "§d", "§e", "§f"];
return sym[Math.floor(Math.random() * sym.length)];
},
yawDir: function (where, yaw) {
/*
-45 & 45 = +z
-135 & -44 = +x
131 & -134 = -z
45 & 130 = -x
*/
if(where == 0){
if(yaw >= -45 && yaw <= 45){
return true;
}
}
if(where == 1){
if(yaw >= -135 && yaw <= -44){
return true;
}
}
if(where == 2){
if(yaw >= 131 && yaw >= -134 && yaw != -135){
return true;
}
}
if(where == 3){
if(yaw >= 45 && yaw <= 130){
return true;
}
}
},
getEid: function () {
var ent = Entity.getEntityTypeId(Player.getPointedEntity());
if(ent != null || typeof(ent) != "undefined"){
return ent;
} else {
return "null";
}
},
draw: function (x, y, z, mode) {
for (var i = 0; i <= 10; i++) {
Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / i, mode ? 0 : ((getPlayerY() - y) / i), (getPlayerZ() - z) / i, 1);
}
},
randChar: function() {
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
return char[Math.floor(Math.random() * char.length)];
},
setColor: function(which, color) {
var mc = color.toLowerCase();
/*
TRANSPARENT
MAGENTA;
BLUE;
BLACK;
WHITE;
RED;
GRAY;
LTGRAY;
YELLOW;
CYAN;
DKGRAY;
GREEN;

background,
button,
stroke,
text,
prefix
*/
if(which == 0){
if(mc == "cyan"){
background = android.graphics.Color.CYAN;
background1 = "cyan";
}
if(mc == "red"){
background = android.graphics.Color.RED;
background1 = "red";
}
if(mc == "green"){
background = android.graphics.Color.GREEN;
background1 = "green";
}
if(mc == "blue"){
background = android.graphics.Color.BLUE;
background1 = "blue";
}
if(mc == "pink" || mc == "purple" || mc == "magenta"){
background = android.graphics.Color.MAGENTA;
background1 = "magenta";
}
if(mc == "white"){
background = android.graphics.Color.WHITE;
background1 = "white";
}
if(mc == "yellow"){
background = android.graphics.Color.YELLOW;
background1 = "yellow";
}
if(mc == "black"){
background = android.graphics.Color.BLACK;
background1 = "black";
}
if(mc == "transparent"){
background = android.graphics.Color.TRANSPARENT;
background1 = "transparent";
}
}
if(which == 1){
if(mc == "cyan"){
btnColor = android.graphics.Color.CYAN;
btnColor1 = "cyan";
}
if(mc == "red"){
btnColor = android.graphics.Color.RED;
btnColor1 = "red";
}
if(mc == "green"){
btnColor = android.graphics.Color.GREEN;
btnColor1 = "green";
}
if(mc == "blue"){
btnColor = android.graphics.Color.BLUE;
btnColor1 = "blue";
}
if(mc == "pink" || mc == "purple" || mc == "magenta"){
btnColor = android.graphics.Color.MAGENTA;
btnColor1 = "magenta";
}
if(mc == "white"){
btnColor = android.graphics.Color.WHITE;
btnColor1 = "white";
}
if(mc == "yellow"){
btnColor = android.graphics.Color.YELLOW;
btnColor1 = "yellow";
}
if(mc == "black"){
btnColor = android.graphics.Color.BLACK;
btnColor1 = "black";
}
if(mc == "transparent"){
btnColor = android.graphics.Color.TRANSPARENT;
btnColor1 = "transparent";
}
}
if(which == 2){
if(mc == "cyan"){
stroke = android.graphics.Color.CYAN;
stroke1 = "cyan";
}
if(mc == "red"){
stroke = android.graphics.Color.RED;
stroke1 = "red";
}
if(mc == "green"){
stroke = android.graphics.Color.GREEN;
stroke1 = "green";
}
if(mc == "blue"){
stroke = android.graphics.Color.BLUE;
stroke1 = "blue";
}
if(mc == "pink" || mc == "purple" || mc == "magenta"){
stroke = android.graphics.Color.MAGENTA;
stroke1 = "magenta";
}
if(mc == "white"){
stroke = android.graphics.Color.WHITE;
stroke1 = "white";
}
if(mc == "yellow"){
stroke = android.graphics.Color.YELLOW;
stroke1 = "yellow";
}
if(mc == "black"){
stroke = android.graphics.Color.BLACK;
stroke1 = "black";
}
if(mc == "transparent"){
stroke = android.graphics.Color.TRANSPARENT;
stroke1 = "transparent";
}
}
},
clean: function(nme) {
if(nme != null){
var name = nme.toLowerCase();
if(name.match('§') || name.includes('§')){
var allColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "k", "l", "m", "n", "o", "r"];
allColor.forEach(function (entry) {
name = name.replace(new RegExp("\u00A7" + entry, 'g'), "");
});
}
if(name.match(']') || name.includes(']')){
name = name.substring(name.indexOf("]") + 1);
}
if(name.match('|') || name.includes('|')){
name = name.substring(name.indexOf("|") + 1);
}
if(name.match(' ') || name.includes(' ')){
name = name.replace(/ /g, '_');
}
if(name[0] == "_"){
name = name.substr(1);
}
return name;
} else {
return "";
}
},
addFriend: function(name) {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon/friends", name);
if(file.exists()){
android.widget.Toast.makeText(MainActivity, "Friend already exists.", 1)
.show();
} else {
var str = "";
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(str).getBytes());
android.widget.Toast.makeText(MainActivity, "Friend added.", 1)
.show();
}
},
removeFriend: function(name) {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon/friends", name);
if(file.exists()){
file.delete();
android.widget.Toast.makeText(MainActivity, "Friend removed.", 1)
.show();
} else {
android.widget.Toast.makeText(MainActivity, "Friend does not exist.", 1)
.show();
}
},
isFriend: function(name) {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon/friends", name);
if(file.exists()){
return true;
}
for(var i = 0; i < pList.length; i++){
if(pList[i].match(String(name)+"") || pList[i].includes(String(name)+"")){
return true;
} else {
return false;
}
}

},
load: function() {
var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon");
if(!dir.exists() || !dir.isDirectory()){
dir.mkdir();
}
var dir2 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon/friends");
if(!dir2.exists() || !dir2.isDirectory()){
dir2.mkdir();
}
pList.push("arceusmatt");
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon", "beta.json");
if(file.exists()){
var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
var data = new java.lang.StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append("\n");
}
var json = JSON.parse(data.toString());
dragon.setColor(0, json.background);
dragon.setColor(1, json.button);
dragon.setColor(2, json.stroke);
dragon.setColor(3, json.text);
prefix = json.prefix;
} else {
var json = '{"background":"'+background1+'","button":"'+btnColor1+'","stroke":"'+stroke1+'","text":"'+btnText1+'","prefix":"'+prefix+'"}';
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(json).getBytes());
}
var list = dir2.listFiles();
for(var i = 0; i < list.length; i++){
if (list[i].isFile()) {
pList.push(list[i].getName());
}
}
},
save: function() {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon", "beta.json");
var json = '{"background":"'+background1+'","button":"'+btnColor1+'","stroke":"'+stroke1+'","text":"'+btnText1+'","prefix":"'+prefix+'"}';
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(json).getBytes());
},
deleteCid: function(){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe", "clientId.txt");
if(file.exists()){
file.delete();
android.widget.Toast.makeText(MainActivity, "Client id deleted.", 1)
.show();
} else {
android.widget.Toast.makeText(MainActivity, "Client id does not exist.\nChange storage to external.", 1)
.show();
}
},
sortGive: function(id, slot) {
switch(slot){
case id:
return 1;
break;
}
}
}
dragon.load();

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

/*
Main button
func showMenuBtn()
Any clients with this has skidded from me.
*/
var bx = 0;
var by = 0;
var nx = 0;
var ny = 0;
var bgravity = android.view.Gravity.LEFT;

function showMenuBtn() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {
try {
var layout = new android.widget.LinearLayout(MainActivity);
layout.setOrientation(1);

var isMoving = false;

var menuBtn = new styleButton();
menuBtn.setVisibility(android.view.View.VISIBLE);
menuBtn.setText("Dragon");
menuBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
if(isMoving == false){
mainMenu();
GUI.dismiss();
menuBtn.setVisibility(android.view.View.GONE);
}
}
}));
menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
bx = e.getX();
by = e.getY();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
nx = e.getRawX();
ny = e.getRawY();
GUI.update(parseInt(nx)-parseInt(bx), parseInt(ny)-parseInt(by), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN){
isMoving = false;
}
return false;
}
}));
layout.addView(menuBtn);

GUI = new android.widget.PopupWindow(layout, dip2px(65), dip2px(35));
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(MainActivity.getWindow()
.getDecorView(), bgravity, bx, by);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}
showMenuBtn();

/*
jump button
*/
var jumpBtn = new styleButton();
jumpBtn.setVisibility(android.view.View.GONE);
function showJumpButton() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var jumpLayout = new android.widget.LinearLayout(MainActivity);
jumpLayout.setOrientation(1);
jumpBtn.setVisibility(android.view.View.VISIBLE);
jumpBtn.setText("Jump");
jumpBtn.setTextSize(7);
jumpBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Entity.setVelY(Player.getEntity(), 0.4);
}
}));
jumpLayout.addView(jumpBtn);

jumpGui = new android.widget.PopupWindow(jumpLayout, dip2px(45), dip2px(45));

jumpGui.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

jumpGui.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

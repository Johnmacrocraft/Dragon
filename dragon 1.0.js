var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
"use strict";
var MainActivity = ctx;
const GL10 = javax.microedition.khronos.opengles.GL10;

/*

Made by ArceusMatt
copyright 2018 all rights reserved.

Do not copy from this content,
Do not sell this content,
Do not modify this content,
Do not reupload/release this content.

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
modules
*/
var aimbot = false;
var airwalk = false;
var autofood = false;
var autolog = false;
var autopot = false;
var autosword = false;
var autowalk = false;
var autoreply = false;
var behind = false;
var bridge = false;
var bhop = false;
var chestesp = false;
var derp = false;
var effect;
var elevator = false;
var enchant;
var fasteat = false;
var find = false;
var fly1 = false;
var fov;
var give;
var glide = false;
var grapple = false;
var hitbox = false;
var hitjump = false;
var hud = false;
var instabreak = false;
var jesus = false;
var jump = false;
var nullify = false;
var phase = false;
var sendToAll;
var spam = false;
var speed;
var spider = false;
var tapjump = false;
var taptp = false;
var teleport;
var tower = false;
var tpaura = false;
var twerk = false;
var vel = false;

var multiaim = false;
var sign = false;
var autosign = false;
var leetSpeak = false;
var nullify2 = false;
var autobreak = false;
var autospawn = false;
var autoswim = false;
var autotool = false;
var cfly = false;
var bright = false;
var highjump = false;
var nuke = false;
var sprint = false;
var armoresp = false;
var autoclick = false;
var blockhunt = false;

/*
values
*/
const version = "1.0";
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

/*
this is the interface variables
*/
var background = android.graphics.Color.TRANSPARENT;
var btnColor = android.graphics.Color.parseColor("#93000000");
var stroke = android.graphics.Color.BLUE;
var btnText = android.graphics.Color.WHITE;
var btnTextSize = 12;

var background1 = "transparent";
var btnColor1 = "not yet";
var stroke1 = "blue";
var btnText1 = "white";
var btnTextSize1 = 12;

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
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon", "setting.json");
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
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon", "setting.json");
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

/* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
 */
ModPE.getFromUrl = function (url, errs) {
	errs = errs || 0;
	try {
		var url = new java.net.URL(url);
		var connection = url.openConnection();
		var inputStream = connection.getInputStream();
		var data = "";
		var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var line = "";
		while ((line = bufferedReader.readLine()) != null) {
			data += line + "\n";
		}
		var result = data.toString();
		bufferedReader.close();
	} catch (err) {
		result = (errs ? "Getting URL Failed. Error: " + err : 0);
		print("Error ModPE.getFromUrl(): " + err);
	} finally {
		if (result == null || result == undefined) {
			result = (errs ? "Result is null" : 0);
		}
	}
	return result;
};
ModPE.JSON = {
	parse: function (str) {
		return Function("return " + str)();
	}
};

/*
func getUpdate()
made by ArceusMatt
By using a get request to a github json file
we grab json that contains the new version number
& compare it to the version number in the script.
*/
function getUpdate(){
var url = "https://raw.githubusercontent.com/ArceusMatt/Dragon/master/version.json";
var content = ModPE.getFromUrl(url);
var update2 = ModPE.JSON.parse(content);
var newupdate = update2.version;
if(version != newupdate)update(newupdate);
}
getUpdate();

var files1_ = [];
var mods1_ = [];

/* setting dir1 variable as the download folder. */
var mods_ = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download");

/*
func deleteScript(String client)
made by ArceusMatt
This deletes the file from downloads.
*/
function deleteScript(client){
var file = java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download", client);
file.delete();
}

/*
func checkScripts()
made by ArceusMatt
This runs through all the js files then executes the delete function if the file matches in an array.
*/
function checkScripts(){
if(files1_[0] != null){
for(var i = 0; i < files1_.length; i++){
for(var j = 0; j < mods1_.length; j++){

if(files1_[i].match(mods1_[j]) || files1_[i].includes(mods1_[j])){
deleteScript(files1_[i]);
print("Deleted: "+files1_[i]);
}

}
}
}
}

/*
func getScripts()
made by ArceusMatt
This gets all mod files in the downloads folder then begins the check process.
*/
function getScripts(){
if(mods_.exists() || mods_.isDirectory()){
var list = mods_.listFiles();
for(var i = 0; i < list.length; i++){
if(list[i].isFile()) {
if(list[i].getName().endsWith(".js") || list[i].getName().endsWith(".modpkg")){
files1_.push(list[i].getName().toLowerCase());
}}}
checkScripts();
}
}

function detect(){
var url2 = "https://raw.githubusercontent.com/ArceusMatt/Dragon/master/Projects/skid_list.json";
var content2 = ModPE.getFromUrl(url2);
var update3 = ModPE.JSON.parse(content2);
for(var a = 0; a < update3.menus.length; a++){
mods1_.push(update3.menus[a]);
}
getScripts();
}
detect();

/*
custom designs
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

function keyButton() {
let button = new android.widget.Button(ctx);
button.setTextColor(btnText);
button.setTextSize(8);
button.setFocusableInTouchMode(false);
button.setTransformationMethod(null);
button.setSoundEffectsEnabled(true);
var buttonBg = new android.graphics.drawable.GradientDrawable();
buttonBg.setColor(btnColor);
buttonBg.setStroke(2, stroke);
buttonBg.setCornerRadius(11);
button.setBackgroundDrawable(buttonBg);
return button;
}

function toggle(mod, desc){
let btn = new styleButton();
btn.setText(mod);
btn.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (v) {
android.widget.Toast.makeText(MainActivity, desc, 1)
.show();
return true;
}
}));
return btn;
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
function showJumpButton() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var jumpLayout = new android.widget.LinearLayout(MainActivity);
jumpLayout.setOrientation(1);

var jumpBtn = new styleButton();
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

/*
keybinds
*/
function showKeys() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var keyLayout = new android.widget.LinearLayout(MainActivity);
var keyScroll = new android.widget.ScrollView(MainActivity);
var keyLayout1 = new android.widget.LinearLayout(MainActivity);
keyLayout.setOrientation(1);
keyLayout1.setOrientation(1);
keyScroll.addView(keyLayout);
keyLayout1.addView(keyScroll);

var k1 = new keyButton();
var k2 = new keyButton();
var k3 = new keyButton();
var k4 = new keyButton();
var k5 = new keyButton();
var k6 = new keyButton();

k1.setText("Aimbot");
if(aimbot == true)k1.setTextColor(android.graphics.Color.GREEN);
k1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
aimbot ? aimbot = false : aimbot = true;
if(aimbot == true)k1.setTextColor(android.graphics.Color.GREEN);
if(aimbot == false)k1.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k1);

k2.setText("Autosword");
if(autosword == true)k2.setTextColor(android.graphics.Color.GREEN);
k2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autosword ? autosword = false : autosword = true;
if(autosword == true)k2.setTextColor(android.graphics.Color.GREEN);
if(autosword == false)k2.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k2);

k3.setText("Hit-Behind");
if(behind == true)k3.setTextColor(android.graphics.Color.GREEN);
k3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
behind ? behind = false : behind = true;
if(behind == true)k3.setTextColor(android.graphics.Color.GREEN);
if(behind == false)k3.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k3);

k4.setText("Hitbox");
if(hitbox == true)k4.setTextColor(android.graphics.Color.GREEN);
k4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
hitbox ? hitbox = false : hitbox = true;
if(hitbox == true)k4.setTextColor(android.graphics.Color.GREEN);
if(hitbox == false)k4.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k4);

k5.setText("FastEat");
if(fasteat == true)k5.setTextColor(android.graphics.Color.GREEN);
k5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fasteat ? fasteat = false : fasteat = true;
if(fasteat == true){k5.setTextColor(android.graphics.Color.GREEN);
fastEat(true);}
if(fasteat == false){k5.setTextColor(android.graphics.Color.RED);
fastEat(false);}
}
}));
keyLayout.addView(k5);

k6.setText("Spider");
if(spider == true)k6.setTextColor(android.graphics.Color.GREEN);
k6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
spider ? spider = false : spider = true;
if(spider == true)k6.setTextColor(android.graphics.Color.GREEN);
if(spider == false)k6.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k6);

keyGui = new android.widget.PopupWindow(keyLayout1, dip2px(45), MainActivity.getWindowManager().getDefaultDisplay().getHeight() / 3);

keyGui.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

keyGui.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 130);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

/*
The interface
func mainMenu()
*/
function mainMenu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var menuLayout = new android.widget.LinearLayout(MainActivity);
var menuScroll = new android.widget.HorizontalScrollView(MainActivity);
var menuLayout1 = new android.widget.LinearLayout(MainActivity);
menuLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
menuLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

menuScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)menu.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Dragon "+version);
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
menu.dismiss();
showMenuBtn();
}
}));
menuLayout.addView(exit);

var settings = new styleButton();
var combat = new styleButton();
var move = new styleButton();
var player = new styleButton();
var world = new styleButton();
var other = new styleButton();
var credits = new styleButton();

/*italian*/
if(getLang == "it_IT")settings.setText("Impostazione");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")settings.setText("Ajustes");
/*korean*/
if(getLang == "ko_KR")settings.setText("설정");
/*german*/
if(getLang == "de_DE")settings.setText("Einstellungen");
/*japanese*/
if(getLang == "ja_JP")settings.setText("オプション");
/*dutch*/
if(getLang == "nl_NL")settings.setText("Instellingen");
/*chinese*/
if(getLang == "zh_CN")settings.setText("设置");
/*russian*/
if(getLang == "ru_RU")settings.setText("конфигурация");
/*greek*/
if(getLang == "el_GR")settings.setText("Ρυθμίσεις");
/*czech*/
if(getLang == "cs_CZ")settings.setText("Nastavení");

/*italian*/
if(getLang == "it_IT")combat.setText("Combattimento");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")combat.setText("Combate");
/*korean*/
//if(getLang == "ko_KR")combat.setText("");
/*german*/
if(getLang == "de_DE")combat.setText("Combat");
/*japanese*/
if(getLang == "ja_JP")combat.setText("戦闘");
/*dutch*/
if(getLang == "nl_NL")combat.setText("Gevecht");
/*chinese*/
//if(getLang == "zh_CN")combat.setText("");
/*russian*/
if(getLang == "ru_RU")combat.setText("бой");
/*greek*/
if(getLang == "el_GR")combat.setText("Combat");
/*czech*/
if(getLang == "cs_CZ")combat.setText("Útok");

/*italian*/
if(getLang == "it_IT")move.setText("Movimento");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")move.setText("Movimiento");
/*korean*/
//if(getLang == "ko_KR")move.setText("");
/*german*/
if(getLang == "de_DE")move.setText("Movement");
/*japanese*/
if(getLang == "ja_JP")move.setText("移動");
/*dutch*/
if(getLang == "nl_NL")move.setText("Beweging");
/*chinese*/
//if(getLang == "zh_CN")move.setText("");
/*russian*/
if(getLang == "ru_RU")move.setText("движение");
/*greek*/
if(getLang == "el_GR")move.setText("Κίνηση");
/*czech*/
if(getLang == "cs_CZ")move.setText("Pohyb");

/*italian*/
if(getLang == "it_IT")player.setText("Giocatore");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")player.setText("Jugador");
/*korean*/
//if(getLang == "ko_KR")player.setText("");
/*german*/
if(getLang == "de_DE")player.setText("Spieler");
/*japanese*/
if(getLang == "ja_JP")player.setText("プレーヤー");
/*dutch*/
if(getLang == "nl_NL")player.setText("Speler");
/*chinese*/
//if(getLang == "zh_CN")player.setText("");
/*russian*/
if(getLang == "ru_RU")player.setText("игрок");
/*greek*/
if(getLang == "el_GR")player.setText("Παίκτης");
/*czech*/
if(getLang == "cs_CZ")player.setText("Hráč");

/*italian*/
if(getLang == "it_IT")world.setText("Mondo");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")world.setText("Mundo");
/*korean*/
//if(getLang == "ko_KR")world.setText("");
/*german*/
if(getLang == "de_DE")world.setText("Welt");
/*japanese*/
if(getLang == "ja_JP")world.setText("世界");
/*dutch*/
if(getLang == "nl_NL")world.setText("Wereld");
/*chinese*/
//if(getLang == "zh_CN")world.setText("");
/*russian*/
if(getLang == "ru_RU")world.setText("мира");
/*greek*/
if(getLang == "el_GR")world.setText("Κόσμος");
/*czech*/
if(getLang == "cs_CZ")world.setText("Svět");

/*italian*/
if(getLang == "it_IT")other.setText("Altro");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")other.setText("Otro");
/*korean*/
//if(getLang == "ko_KR")other.setText("");
/*german*/
if(getLang == "de_DE")other.setText("Verschiedenes");
/*japanese*/
if(getLang == "ja_JP")other.setText("その他");
/*dutch*/
if(getLang == "nl_NL")other.setText("Anders");
/*chinese*/
//if(getLang == "zh_CN")other.setText("");
/*russian*/
if(getLang == "ru_RU")other.setText("Другие");
/*greek*/
if(getLang == "el_GR")other.setText("Υπόλοιπα");
/*czech*/
if(getLang == "cs_CZ")other.setText("Jiný");

/*italian*/
if(getLang == "it_IT")credits.setText("Crediti");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")credits.setText("Creditos");
/*korean*/
//if(getLang == "ko_KR")credits.setText("");
/*german*/
if(getLang == "de_DE")credits.setText("Credits");
/*japanese*/
if(getLang == "ja_JP")credits.setText("クレジット");
/*dutch*/
if(getLang == "nl_NL")credits.setText("Credits");
/*chinese*/
//if(getLang == "zh_CN")credits.setText("");
/*russian*/
if(getLang == "ru_RU")credits.setText("зачет");
/*greek*/
if(getLang == "el_GR")credits.setText("Δημιουργός");
/*czech*/
if(getLang == "cs_CZ")credits.setText("Kredity");

settings.setText("Settings");
settings.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
settings_menu();
}
});
menuLayout.addView(settings);

combat.setText("Combat");
combat.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
combat_menu();
}
});
menuLayout.addView(combat);

move.setText("Movement");
move.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
movement_menu();
}
});
menuLayout.addView(move);

player.setText("Player");
player.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
player_menu();
}
});
menuLayout.addView(player);

world.setText("World");
world.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
world_menu();
}
});
menuLayout.addView(world);

other.setText("Other");
other.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
other_menu();
}
});
menuLayout.addView(other);

credits.setText("Credits");
credits.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
menu.dismiss();
credit();
}
});
menuLayout.addView(credits);

menu = new android.widget.PopupWindow(menuLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20, 0, 20, 0);

menu.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function settings_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var settingLayout = new android.widget.LinearLayout(MainActivity);
var settingScroll = new android.widget.HorizontalScrollView(MainActivity);
var settingLayout1 = new android.widget.LinearLayout(MainActivity);
settingLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
settingLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
settingScroll.addView(settingLayout);
settingLayout1.addView(settingScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

settingScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)settings.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
settings.dismiss();
mainMenu();
}
}));
settingLayout.addView(exit);

var s1 = new toggle("Check slapper", "Don't lock onto slappers/NPCs.");
if(checkslapper)s1.setTextColor(android.graphics.Color.GREEN);
if(!checkslapper)s1.setTextColor(btnText);
s1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
checkslapper ? checkslapper = false : checkslapper = true;
if(checkslapper) {
s1.setTextColor(android.graphics.Color.GREEN);
checkslapper = true;
} else {
s1.setTextColor(android.graphics.Color.RED);
checkslapper = false;
}
}
}));
settingLayout.addView(s1);

var s2 = new styleButton();
s2.setText("Aim range");
s2.setTextColor(btnText);
s2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
settings.dismiss();
setRange("Default is 7", "Set range");
}
}));
s2.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (viewarg) {
android.widget.Toast.makeText(MainActivity, "Set aimbot range.", 1)
.show();
return true;
}
}));
settingLayout.addView(s2);

var s3 = new styleButton();
s3.setText("Hitbox shadow");
s3.setTextColor(btnText);
s3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
settings.dismiss();
setShadow("Default range is 30", "Default height is 2", "Set range");
}
}));
s3.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (viewarg) {
android.widget.Toast.makeText(MainActivity, "Set hitbox range.", 1)
.show();
return true;
}
}));
settingLayout.addView(s3);

var s4 = new styleButton();
s4.setText("Command prefix");
s4.setTextColor(btnText);
s4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
settings.dismiss();
setPrefix("Default is */", "Set prefix");
}
}));
s4.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (viewarg) {
android.widget.Toast.makeText(MainActivity, "Set dragon's command prefix.", 1)
.show();
return true;
}
}));
settingLayout.addView(s4);

var s5 = new styleButton();
s5.setText("Heart trigger");
s5.setTextColor(btnText);
s5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
settings.dismiss();
setHeart("Default is 5", "Set trigger");
}
}));
s5.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (viewarg) {
android.widget.Toast.makeText(MainActivity, "Set how many hearts till autofood etc activates.", 1)
.show();
return true;
}
}));
settingLayout.addView(s5);

var s6 = new toggle("Legal enchants", "Prevent you from setting bad enchant levels.");
if(legalenchant)s6.setTextColor(android.graphics.Color.GREEN);
if(!legalenchant)s6.setTextColor(btnText);
s6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
legalenchant ? legalenchant = false : legalenchant = true;
if(legalenchant) {
s6.setTextColor(android.graphics.Color.GREEN);
legalenchant = true;
} else {
s6.setTextColor(android.graphics.Color.RED);
legalenchant = false;
}
}
}));
settingLayout.addView(s6);

var s7 = new toggle("Rainbow HUD", "Make the HUD display rainbow colors.");
if(rainbow)s7.setTextColor(android.graphics.Color.GREEN);
if(!rainbow)s7.setTextColor(btnText);
s7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
rainbow ? rainbow = false : rainbow = true;
if(rainbow) {
s7.setTextColor(android.graphics.Color.GREEN);
rainbow = true;
} else {
s7.setTextColor(android.graphics.Color.RED);
rainbow = false;
}
}
}));
settingLayout.addView(s7);

var s8 = new toggle("Ghost button", "Make the dragon button disappear.");
if(ghost)s8.setTextColor(android.graphics.Color.GREEN);
if(!ghost)s8.setTextColor(btnText);
s8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
ghost ? ghost = false : ghost = true;
if(ghost) {
s8.setTextColor(android.graphics.Color.GREEN);
btnColor = android.graphics.Color.TRANSPARENT;
stroke = android.graphics.Color.TRANSPARENT;
settings.dismiss();
showMenuBtn();
ghost = true;
} else {
s8.setTextColor(android.graphics.Color.RED);
btnColor = android.graphics.Color.parseColor("#93000000");
stroke = android.graphics.Color.BLUE;
settings.dismiss();
showMenuBtn();
ghost = false;
}
}
}));
settingLayout.addView(s8);

var s9 = new toggle("Keybinds", "Enable shortcuts.");
if(keybind)s9.setTextColor(android.graphics.Color.GREEN);
if(!keybind)s9.setTextColor(btnText);
s9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
keybind ? keybind = false : keybind = true;
if(keybind) {
s9.setTextColor(android.graphics.Color.GREEN);
showKeys();
keybind = true;
} else {
s9.setTextColor(android.graphics.Color.RED);
keyGui.dismiss();
keybind = false;
}
}
}));
settingLayout.addView(s9);

var s10 = new toggle("Movable menus", "Make all menus movable.");
if(movable)s10.setTextColor(android.graphics.Color.GREEN);
if(!movable)s10.setTextColor(btnText);
s10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
movable ? movable = false : movable = true;
if(movable) {
s10.setTextColor(android.graphics.Color.GREEN);
movable = true;
} else {
s10.setTextColor(android.graphics.Color.RED);
movable = false;
}
}
}));
settingLayout.addView(s10);

var s11 = new toggle("Lockon display", "Display the player name you locked onto.");
if(lockon)s11.setTextColor(android.graphics.Color.GREEN);
if(!lockon)s11.setTextColor(btnText);
s11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
lockon ? lockon = false : lockon = true;
if(lockon) {
s11.setTextColor(android.graphics.Color.GREEN);
lockon = true;
} else {
s11.setTextColor(android.graphics.Color.RED);
lockon = false;
}
}
}));
settingLayout.addView(s11);

var s12 = new toggle("Side HUD", "Display HUD on side of screen.");
if(side)s12.setTextColor(android.graphics.Color.GREEN);
if(!side)s12.setTextColor(btnText);
s12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
side ? side = false : side = true;
if(side) {
s12.setTextColor(android.graphics.Color.GREEN);
side = true;
} else {
s12.setTextColor(android.graphics.Color.RED);
side = false;
}
}
}));
settingLayout.addView(s12);

/*background*/

var colors_0 = [];
var colors0 = {
select: [0, -1],
list: [["Transparent"],["Magenta"],["Blue"],["Black"],["White"],["Red"],["Gray"],["Light gray"],["Yellow"],["Cyan"],["Dark gray"],["Green"]]
}
colors0.list.forEach(function (entry, index) {
colors_0.push(colors0.list[index][0]);
});

var adapter = new android.widget.ArrayAdapter(MainActivity, android.R.layout.select_dialog_multichoice, colors_0);

var sc1 = new styleButton();
sc1.setText("Menu color");
sc1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Select menu color");
alert.setAdapter(adapter, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
dragon.setColor(0, colors0.list[pos]+"");
for(var t = 0; t < 5; t++){
if(t == 1){
settings_menu();
dragon.save();
}}

}
}));
var dialog = alert.create();
dialog.show();
}
});
settingLayout.addView(sc1);

/*button*/

var colors_1 = [];
var colors1 = {
select: [0, -1],
list: [["Transparent"],["Magenta"],["Blue"],["Black"],["White"],["Red"],["Gray"],["Light gray"],["Yellow"],["Cyan"],["Dark gray"],["Green"]]
}
colors1.list.forEach(function (entry, index) {
colors_1.push(colors1.list[index][0]);
});

var adapter = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_single_choice, colors_1);

var sc2 = new styleButton();
sc2.setText("Button color");
sc2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Select button color");
alert.setAdapter(adapter, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
dragon.setColor(1, colors1.list[pos]+"");
for(var t = 0; t < 5; t++){
if(t == 1){
settings_menu();
dragon.save();
}}

}
}));
var dialog = alert.create();
dialog.show();
}
});
settingLayout.addView(sc2);

/*stroke*/

var colors_2 = [];
var colors2 = {
select: [0, -1],
list: [["Transparent"],["Magenta"],["Blue"],["Black"],["White"],["Red"],["Gray"],["Light gray"],["Yellow"],["Cyan"],["Dark gray"],["Green"]]
}
colors2.list.forEach(function (entry, index) {
colors_2.push(colors2.list[index][0]);
});

var adapter = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_single_choice, colors_2);

var sc3 = new styleButton();
sc3.setText("Stroke color");
sc3.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Select stroke color");
alert.setAdapter(adapter, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
dragon.setColor(2, colors2.list[pos]+"");
for(var t = 0; t < 5; t++){
if(t == 1){
settings_menu();
dragon.save();
}}

}
}));
var dialog = alert.create();
dialog.show();
}
});
settingLayout.addView(sc3);

settings = new android.widget.PopupWindow(settingLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
settingLayout1.setBackgroundDrawable(bg);
settingLayout1.setPadding(20, 0, 20, 0);

settings.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function combat_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var cLayout = new android.widget.LinearLayout(MainActivity);
var cScroll = new android.widget.HorizontalScrollView(MainActivity);
var cLayout1 = new android.widget.LinearLayout(MainActivity);
cLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
cLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
cScroll.addView(cLayout);
cLayout1.addView(cScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

cScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)mods.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
mods.dismiss();
mainMenu();
}
}));
cLayout.addView(exit);

var c1 = new toggle("Aimbot", "Lock onto nearby players.");
if(aimbot)c1.setTextColor(android.graphics.Color.GREEN);
if(!aimbot)c1.setTextColor(btnText);
c1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
aimbot ? aimbot = false : aimbot = true;
if(aimbot) {
c1.setTextColor(android.graphics.Color.GREEN);
aimbot = true;
} else {
c1.setTextColor(android.graphics.Color.RED);
aimbot = false;
}
}
}));
cLayout.addView(c1);

var c2 = new toggle("Autofood", "Select best food in hotbar when low health.");
if(autofood)c2.setTextColor(android.graphics.Color.GREEN);
if(!autofood)c2.setTextColor(btnText);
c2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autofood ? autofood = false : autofood = true;
if(autofood) {
c2.setTextColor(android.graphics.Color.GREEN);
autofood = true;
} else {
c2.setTextColor(android.graphics.Color.RED);
autofood = false;
}
}
}));
cLayout.addView(c2);

var c3 = new toggle("Auto logoff", "Logoff when near players.");
if(autolog)c3.setTextColor(android.graphics.Color.GREEN);
if(!autolog)c3.setTextColor(btnText);
c3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autolog ? autolog = false : autolog = true;
if(autolog) {
c3.setTextColor(android.graphics.Color.GREEN);
autolog = true;
} else {
c3.setTextColor(android.graphics.Color.RED);
autolog = false;
}
}
}));
cLayout.addView(c3);

var c4 = new toggle("Autopot", "Select best pot in hotbar when low health.");
if(autopot)c4.setTextColor(android.graphics.Color.GREEN);
if(!autopot)c4.setTextColor(btnText);
c4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autopot ? autopot = false : autopot = true;
if(autopot) {
c4.setTextColor(android.graphics.Color.GREEN);
autopot = true;
} else {
c4.setTextColor(android.graphics.Color.RED);
autopot = false;
}
}
}));
cLayout.addView(c4);

var c5 = new toggle("Autosword", "Select best sword in hotbar when near players.");
if(autosword)c5.setTextColor(android.graphics.Color.GREEN);
if(!autosword)c5.setTextColor(btnText);
c5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autosword ? autosword = false : autosword = true;
if(autosword) {
c5.setTextColor(android.graphics.Color.GREEN);
autosword = true;
} else {
c5.setTextColor(android.graphics.Color.RED);
autosword = false;
}
}
}));
cLayout.addView(c5);

var c6 = new toggle("Hit behind", "Teleport behind the player when you hit them.");
if(behind)c6.setTextColor(android.graphics.Color.GREEN);
if(!behind)c6.setTextColor(btnText);
c6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
behind ? behind = false : behind = true;
if(behind) {
c6.setTextColor(android.graphics.Color.GREEN);
behind = true;
} else {
c6.setTextColor(android.graphics.Color.RED);
behind = false;
}
}
}));
cLayout.addView(c6);

var c7 = new toggle("Hitbox", "Increase your hit range / reach.");
if(hitbox)c7.setTextColor(android.graphics.Color.GREEN);
if(!hitbox)c7.setTextColor(btnText);
c7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
hitbox ? hitbox = false : hitbox = true;
if(hitbox) {
c7.setTextColor(android.graphics.Color.GREEN);
hitbox = true;
} else {
c7.setTextColor(android.graphics.Color.RED);
hitbox = false;
}
}
}));
cLayout.addView(c7);

var c8 = new toggle("Hit & jump", "Jump when you hit a player.");
if(hitjump)c8.setTextColor(android.graphics.Color.GREEN);
if(!hitjump)c8.setTextColor(btnText);
c8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
hitjump ? hitjump = false : hitjump = true;
if(hitjump) {
c8.setTextColor(android.graphics.Color.GREEN);
hitjump = true;
} else {
c8.setTextColor(android.graphics.Color.RED);
hitjump = false;
}
}
}));
cLayout.addView(c8);

var c9 = new toggle("TPaura", "Teleport on top of nearby players.");
if(tpaura)c9.setTextColor(android.graphics.Color.GREEN);
if(!tpaura)c9.setTextColor(btnText);
c9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
tpaura ? tpaura = false : tpaura = true;
if(tpaura) {
c9.setTextColor(android.graphics.Color.GREEN);
tpaura = true;
} else {
c9.setTextColor(android.graphics.Color.RED);
tpaura = false;
}
}
}));
cLayout.addView(c9);

var c10 = new toggle("Grapple", "Teleport to a player when you hit them.");
if(grapple)c10.setTextColor(android.graphics.Color.GREEN);
if(!grapple)c10.setTextColor(btnText);
c10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
grapple ? grapple = false : grapple = true;
if(grapple) {
c10.setTextColor(android.graphics.Color.GREEN);
grapple = true;
} else {
c10.setTextColor(android.graphics.Color.RED);
grapple = false;
}
}
}));
cLayout.addView(c10);

var c11 = new toggle("FastEat", "Change food duration/eating speed to zero.");
if(fasteat)c11.setTextColor(android.graphics.Color.GREEN);
if(!fasteat)c11.setTextColor(btnText);
c11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
fasteat ? fasteat = false : fasteat = true;
if(fasteat) {
c11.setTextColor(android.graphics.Color.GREEN);
fastEat(true);
fasteat = true;
} else {
c11.setTextColor(android.graphics.Color.RED);
fastEat(false);
fasteat = false;
}
}
}));
cLayout.addView(c11);

var c12 = new toggle("MultiAim", "Lock onto random nearby players.");
if(multiaim)c12.setTextColor(android.graphics.Color.GREEN);
if(!multiaim)c12.setTextColor(btnText);
c12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
multiaim ? multiaim = false : multiaim = true;
if(multiaim) {
c12.setTextColor(android.graphics.Color.GREEN);
multiaim = true;
} else {
c12.setTextColor(android.graphics.Color.RED);
multiaim = false;
}
}
}));
cLayout.addView(c12);

/*var c13 = new toggle("ArmorESP", "Display your & facing player armor damage.");
if(armoresp)c13.setTextColor(android.graphics.Color.GREEN);
if(!armoresp)c13.setTextColor(btnText);
c13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
armoresp ? armoresp = false : armoresp = true;
if(armoresp) {
c13.setTextColor(android.graphics.Color.GREEN);
armoresp = true;
} else {
c13.setTextColor(android.graphics.Color.RED);
armoresp = false;
}
}
}));
cLayout.addView(c13);*/

var c14 = new toggle("Autoclick (root)", "Auto tap center of screen once per second.");
if(autoclick)c14.setTextColor(android.graphics.Color.GREEN);
if(!autoclick)c14.setTextColor(btnText);
c14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autoclick ? autoclick = false : autoclick = true;
if(autoclick) {
c14.setTextColor(android.graphics.Color.GREEN);
sec = 1;
autoclick = true;
} else {
c14.setTextColor(android.graphics.Color.RED);
autoclick = false;
}
}
}));
cLayout.addView(c14);

var c15 = new toggle("Blockhunt aim", "Lock onto nearby blockhunt players.");
if(blockhunt)c15.setTextColor(android.graphics.Color.GREEN);
if(!blockhunt)c15.setTextColor(btnText);
c15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
blockhunt ? blockhunt = false : blockhunt = true;
if(blockhunt) {
c15.setTextColor(android.graphics.Color.GREEN);
blockhunt = true;
} else {
c15.setTextColor(android.graphics.Color.RED);
blockhunt = false;
}
}
}));
cLayout.addView(c15);

mods = new android.widget.PopupWindow(cLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

mods.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
cLayout1.setBackgroundDrawable(bg);
cLayout1.setPadding(20, 0, 20, 0);

mods.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function movement_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var mLayout = new android.widget.LinearLayout(MainActivity);
var mScroll = new android.widget.HorizontalScrollView(MainActivity);
var mLayout1 = new android.widget.LinearLayout(MainActivity);
mLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
mLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
mScroll.addView(mLayout);
mLayout1.addView(mScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

mScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)movement.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
movement.dismiss();
mainMenu();
}
}));
mLayout.addView(exit);

var m1 = new toggle("Autowalk", "Automatically walk.");
if(autowalk)m1.setTextColor(android.graphics.Color.GREEN);
if(!autowalk)m1.setTextColor(btnText);
m1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autowalk ? autowalk = false : autowalk = true;
if(autowalk) {
m1.setTextColor(android.graphics.Color.GREEN);
autowalk = true;
} else {
m1.setTextColor(android.graphics.Color.RED);
autowalk = false;
}
}
}));
mLayout.addView(m1);

var m2 = new toggle("FastBridge", "Teleport to next block when sneaking.");
if(bridge)m2.setTextColor(android.graphics.Color.GREEN);
if(!bridge)m2.setTextColor(btnText);
m2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
bridge ? bridge = false : bridge = true;
if(bridge) {
m2.setTextColor(android.graphics.Color.GREEN);
bridge = true;
} else {
m2.setTextColor(android.graphics.Color.RED);
bridge = false;
}
}
}));
mLayout.addView(m2);

var m3 = new toggle("Bunnyhop", "Hop like a bunny when you walk.");
if(bhop)m3.setTextColor(android.graphics.Color.GREEN);
if(!bhop)m3.setTextColor(btnText);
m3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
bhop ? bhop = false : bhop = true;
if(bhop) {
m3.setTextColor(android.graphics.Color.GREEN);
bhop = true;
} else {
m3.setTextColor(android.graphics.Color.RED);
bhop = false;
}
}
}));
mLayout.addView(m3);

var m4 = new toggle("Glide", "Glide in the sky when falling.");
if(glide)m4.setTextColor(android.graphics.Color.GREEN);
if(!glide)m4.setTextColor(btnText);
m4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
glide ? glide = false : glide = true;
if(glide) {
m4.setTextColor(android.graphics.Color.GREEN);
glide = true;
} else {
m4.setTextColor(android.graphics.Color.RED);
glide = false;
}
}
}));
mLayout.addView(m4);

var m5 = new toggle("Limitless jump", "Enable a special jump button.");
if(jump)m5.setTextColor(android.graphics.Color.GREEN);
if(!jump)m5.setTextColor(btnText);
m5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
jump ? jump = false : jump = true;
if(jump) {
m5.setTextColor(android.graphics.Color.GREEN);
showJumpButton();
jump = true;
} else {
m5.setTextColor(android.graphics.Color.RED);
jumpGui.dismiss();
jump = false;
}
}
}));
mLayout.addView(m5);

var b16 = new styleButton();
b16.setText("Speed");
b16.setTextColor(btnText);
b16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
movement.dismiss();
editSpeed("Default is 20", "Set speed");
}
}));
mLayout.addView(b16);

var m6 = new toggle("Spider", "Climb everything like a spider.");
if(spider)m6.setTextColor(android.graphics.Color.GREEN);
if(!spider)m6.setTextColor(btnText);
m6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
spider ? spider = false : spider = true;
if(spider) {
m6.setTextColor(android.graphics.Color.GREEN);
spider = true;
} else {
m6.setTextColor(android.graphics.Color.RED);
spider = false;
}
}
}));
mLayout.addView(m6);

var m7 = new toggle("TapTP", "Tap to teleport there.");
if(taptp)m7.setTextColor(android.graphics.Color.GREEN);
if(!taptp)m7.setTextColor(btnText);
m7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
taptp ? taptp = false : taptp = true;
if(taptp) {
m7.setTextColor(android.graphics.Color.GREEN);
taptp = true;
} else {
m7.setTextColor(android.graphics.Color.RED);
taptp = false;
}
}
}));
mLayout.addView(m7);

var m8 = new toggle("Tower", "Build a tower when holding a block.");
if(tower)m8.setTextColor(android.graphics.Color.GREEN);
if(!tower)m8.setTextColor(btnText);
m8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
tower ? tower = false : tower = true;
if(tower) {
m8.setTextColor(android.graphics.Color.GREEN);
tower = true;
} else {
m8.setTextColor(android.graphics.Color.RED);
tower = false;
}
}
}));
mLayout.addView(m8);

var m9 = new toggle("Walk on liquid", "Walk on lava & water.");
if(jesus)m9.setTextColor(android.graphics.Color.GREEN);
if(!jesus)m9.setTextColor(btnText);
m9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
jesus ? jesus = false : jesus = true;
if(jesus) {
m9.setTextColor(android.graphics.Color.GREEN);
jesus = true;
} else {
m9.setTextColor(android.graphics.Color.RED);
jesus = false;
}
}
}));
mLayout.addView(m9);

var m10 = new toggle("Walk on air", "Walk on void blocks.\ngo up by looking up\ngo down by looking down.");
if(airwalk)m10.setTextColor(android.graphics.Color.GREEN);
if(!airwalk)m10.setTextColor(btnText);
m10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
airwalk ? airwalk = false : airwalk = true;
if(airwalk) {
m10.setTextColor(android.graphics.Color.GREEN);
airwalk = true;
} else {
m10.setTextColor(android.graphics.Color.RED);
airwalk = false;
}
}
}));
mLayout.addView(m10);

var m11 = new toggle("Elevator", "Teleport to a platform above you.");
if(elevator)m11.setTextColor(android.graphics.Color.GREEN);
if(!elevator)m11.setTextColor(btnText);
m11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
elevator ? elevator = false : elevator = true;
if(elevator) {
m11.setTextColor(android.graphics.Color.GREEN);
elevator = true;
} else {
m11.setTextColor(android.graphics.Color.RED);
elevator = false;
}
}
}));
mLayout.addView(m11);

var m12 = new toggle("Fly in survival", "Fly while in survival mode.");
if(fly1)m12.setTextColor(android.graphics.Color.GREEN);
if(!fly1)m12.setTextColor(btnText);
m12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
fly1 ? fly1 = false : fly1 = true;
if(fly1) {
m12.setTextColor(android.graphics.Color.GREEN);
Player.setCanFly(true);
fly1 = true;
} else {
m12.setTextColor(android.graphics.Color.RED);
Player.setCanFly(false);
fly1 = false;
}
}
}));
mLayout.addView(m12);

/*var m13 = new toggle("Twerk", "Automatically twerk.");
mLayout.addView(m13);*/

var m14 = new toggle("TapJump", "Tap ground to jump.");
if(tapjump)m14.setTextColor(android.graphics.Color.GREEN);
if(!tapjump)m14.setTextColor(btnText);
m14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
tapjump ? tapjump = false : tapjump = true;
if(tapjump) {
m14.setTextColor(android.graphics.Color.GREEN);
tapjump = true;
} else {
m14.setTextColor(android.graphics.Color.RED);
tapjump = false;
}
}
}));
mLayout.addView(m14);

/*var m15 = new toggle("Phase", phase, "Sneak through walls.");
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
mLayout.addView(m15);*/

/*var m16 = new toggle("Derp", derp, "derpy.", 0);
mLayout.addView(m16);*/

/*var m18 = new toggle("AutoRespawn", autospawn, "Spawn back if you die.");
mLayout.addView(m18);*/

/*var m19 = new toggle("AutoSwim", autoswim, "Automatically swim.");
mLayout.addView(m19);*/

/*var m20 = new toggle("Fly controls", cfly, "Enable special flight buttons.");
mLayout.addView(m20);*/

/*var m21 = new toggle("High jump", highjump, "Jump higher than before.");
mLayout.addView(m21);*/

var m22 = new toggle("AutoSprint", "Automatically sprint.");
if(sprint)m22.setTextColor(android.graphics.Color.GREEN);
if(!sprint)m22.setTextColor(btnText);
m22.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
sprint ? sprint = false : sprint = true;
if(sprint) {
m22.setTextColor(android.graphics.Color.GREEN);
sprint = true;
} else {
m22.setTextColor(android.graphics.Color.RED);
sprint = false;
}
}
}));
mLayout.addView(m22);

movement = new android.widget.PopupWindow(mLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

movement.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
mLayout1.setBackgroundDrawable(bg);
mLayout1.setPadding(20, 0, 20, 0);

movement.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function player_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var pLayout = new android.widget.LinearLayout(MainActivity);
var pScroll = new android.widget.HorizontalScrollView(MainActivity);
var pLayout1 = new android.widget.LinearLayout(MainActivity);
pLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
pLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
pScroll.addView(pLayout);
pLayout1.addView(pScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

pScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)players.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
players.dismiss();
mainMenu();
}
}));
pLayout.addView(exit);

var b15 = new styleButton();
b15.setText("Fov");
b15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
players.dismiss();
editFov("Fov percentage", "Change fov");
}
}));
pLayout.addView(b15);

var b17 = new styleButton();
b17.setText("Give");
b17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
players.dismiss();
give("Item id", "item damage/meta", "item amount", "Give");
clientMessage(pre + "btw give will work on servers if you are in creative & the item doesn't go in your hotbar.");
}
}));
pLayout.addView(b17);

var b18 = new styleButton();
b18.setText("Effect");
b18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
players.dismiss();
effect_menu();
}
}));
pLayout.addView(b18);

var b19 = new styleButton();
b19.setText("Enchant");
b19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
players.dismiss();
enchant_menu();
}
}));
pLayout.addView(b19);

var b20 = new styleButton();
b20.setText("Set offhand");
b20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
players.dismiss();
offhand("Item id", "meta/damage", "amount", "Set");
}
}));
pLayout.addView(b20);

var insta = new styleButton();
insta.setText("Instant break");
if(instabreak == false)insta.setTextColor(btnText);
if(instabreak == true)insta.setTextColor(android.graphics.Color.GREEN);
insta.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
instabreak ? instabreak = false : instabreak = true;
if(instabreak == true) {
insta.setTextColor(android.graphics.Color.GREEN);
instabreak = true;
instantBreak();
}
if(instabreak == false) {
insta.setTextColor(android.graphics.Color.RED);
instabreak = false;
defaultBreak();
}
}
}));
pLayout.addView(insta);

var vdis = new styleButton();
vdis.setText("Vel display");
if(vel == false)vdis.setTextColor(btnText);
if(vel == true)vdis.setTextColor(android.graphics.Color.GREEN);
vdis.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
vel ? vel = false : vel = true;
if(vel == true) {
vdis.setTextColor(android.graphics.Color.GREEN);
vel = true;
}
if(vel == false) {
vdis.setTextColor(android.graphics.Color.RED);
vel = false;
}
}
}));
pLayout.addView(vdis);

var w7 = new styleButton();
w7.setText("AutoBreak");
if(autobreak == false)w7.setTextColor(btnText);
if(autobreak == true)w7.setTextColor(android.graphics.Color.GREEN);
w7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autobreak ? autobreak = false : autobreak = true;
if(autobreak == true) {
w7.setTextColor(android.graphics.Color.GREEN);
autobreak = true;
clientMessage(pre+"Autobreak enabled.");
}
if(autobreak == false) {
w7.setTextColor(android.graphics.Color.RED);
autobreak = false;
}
}
}));
pLayout.addView(w7);

players = new android.widget.PopupWindow(pLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

players.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
pLayout1.setBackgroundDrawable(bg);
pLayout1.setPadding(20, 0, 20, 0);

players.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function world_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var wLayout = new android.widget.LinearLayout(MainActivity);
var wScroll = new android.widget.HorizontalScrollView(MainActivity);
var wLayout1 = new android.widget.LinearLayout(MainActivity);
wLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
wLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
wScroll.addView(wLayout);
wLayout1.addView(wScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

wScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)worlds.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
worlds.dismiss();
mainMenu();
}
}));
wLayout.addView(exit);

var b9 = new styleButton();
b9.setText("HUD");
if(hud == false)b9.setTextColor(btnText);
if(hud == true)b9.setTextColor(android.graphics.Color.GREEN);
b9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
hud ? hud = false : hud = true;
if(hud == true) {
b9.setTextColor(android.graphics.Color.GREEN);
hud = true;
clientMessage(pre+"HUD enabled.");
}
if(hud == false) {
b9.setTextColor(android.graphics.Color.RED);
hud = false;
}
}
}));
wLayout.addView(b9);

var b12 = new styleButton();
b12.setText("Player finder");
if(find == false)b12.setTextColor(btnText);
if(find == true)b12.setTextColor(android.graphics.Color.GREEN);
b12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
find ? find = false : find = true;
if(find == true) {
b12.setTextColor(android.graphics.Color.GREEN);
find = true;
clientMessage(pre+"Player finder enabled.");
}
if(find == false) {
b12.setTextColor(android.graphics.Color.RED);
find = false;
}
}
}));
wLayout.addView(b12);

var esp1 = new styleButton();
esp1.setText("Storage ESP");
if(chestesp == false)esp1.setTextColor(btnText);
if(chestesp == true)esp1.setTextColor(android.graphics.Color.GREEN);
esp1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
chestesp ? chestesp = false : chestesp = true;
if(chestesp == true) {
esp1.setTextColor(android.graphics.Color.GREEN);
chestesp = true;
}
if(chestesp == false) {
esp1.setTextColor(android.graphics.Color.RED);
chestesp = false;
}
}
}));
wLayout.addView(esp1);

var tele = new styleButton();
tele.setText("Teleport");
tele.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
worlds.dismiss();
teleport("x", "y", "z", "teleport");
}
}));
wLayout.addView(tele);

var m17 = new toggle("Nullify doors/gates", "Walk through doors & gates.");
if(nullify2)m17.setTextColor(android.graphics.Color.GREEN);
if(!nullify2)m17.setTextColor(btnText);
m17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
nullify2 ? nullify2 = false : nullify2 = true;
if(nullify2) {
m17.setTextColor(android.graphics.Color.GREEN);
Block.setShape(0, null, null, null, null, null, null);
Block.setShape(107, null, null, null, null, null, null);
Block.setShape(324, null, null, null, null, null, null);
Block.setShape(330, null, null, null, null, null, null);
Block.setShape(96, null, null, null, null, null, null);
Block.setShape(167, null, null, null, null, null, null);
nullify2 = true;
} else {
m17.setTextColor(android.graphics.Color.RED);
Block.setShape(0, 1, 1, 1, 1, 1, 1);
Block.setShape(107, 1, 1, 1, 1, 1, 1);
Block.setShape(324, 1, 1, 1, 1, 1, 1);
Block.setShape(330, 1, 1, 1, 1, 1, 1);
Block.setShape(96, 1, 1, 1, 1, 1, 1);
Block.setShape(167, 1, 1, 1, 1, 1, 1);
nullify2 = false;
}
}
}));
wLayout.addView(m17);

var nibby = new styleButton();
nibby.setText("Nullify barriers");
if(nullify == false)nibby.setTextColor(btnText);
if(nullify == true)nibby.setTextColor(android.graphics.Color.GREEN);
nibby.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
nullify ? nullify = false : nullify = true;
if(nullify == true) {
nibby.setTextColor(android.graphics.Color.GREEN);
nullify = true;
Block.setShape(0, null, null, null, null, null, null);
Block.setShape(65, null, null, null, null, null, null);
Block.setShape(95, null, null, null, null, null, null);
Block.setShape(255, null, null, null, null, null, null);
clientMessage(pre+"All barriers have been nullified.");
}
if(nullify == false) {
nibby.setTextColor(android.graphics.Color.RED);
nullify = false;
Block.setShape(0, 1, 1, 1, 1, 1, 1);
Block.setShape(65, 1, 1, 1, 1, 1, 1);
Block.setShape(95, 1, 1, 1, 1, 1, 1);
Block.setShape(255, 1, 1, 1, 1, 1, 1);
}
}
}));
wLayout.addView(nibby);

/*var w1 = new styleButton();
w1.setText("Sign editor");
if(sign == false)w1.setTextColor(btnText);
if(sign == true)w1.setTextColor(android.graphics.Color.GREEN);
w1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
sign ? sign = false : sign = true;
if(sign == true) {
w1.setTextColor(android.graphics.Color.GREEN);
sign = true;
clientMessage(pre+"Sign editor enabled.\nTap a sign to edit.");
}
if(sign == false) {
w1.setTextColor(android.graphics.Color.RED);
sign = false;
}
}
}));
wLayout.addView(w1);

var w2 = new styleButton();
w2.setText("AutoSign");
if(autosign == false)w2.setTextColor(btnText);
if(autosign == true)w2.setTextColor(android.graphics.Color.GREEN);
w2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autosign ? autosign = false : autosign = true;
if(autosign == true) {
w2.setTextColor(android.graphics.Color.GREEN);
autosign = true;
clientMessage(pre+"AutoSign enabled.");
}
if(autosign == false) {
w2.setTextColor(android.graphics.Color.RED);
autosign = false;
}
}
}));
wLayout.addView(w2);

var w3 = new styleButton();
w3.setText("AutoTool");
if(autotool == false)w3.setTextColor(btnText);
if(autotool == true)w3.setTextColor(android.graphics.Color.GREEN);
w3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
autotool ? autotool = false : autotool = true;
if(autotool == true) {
w3.setTextColor(android.graphics.Color.GREEN);
autotool = true;
clientMessage(pre+"AutoTool enabled.");
}
if(autotool == false) {
w3.setTextColor(android.graphics.Color.RED);
autotool = false;
}
}
}));
wLayout.addView(w3);*/

/*var w4 = new styleButton();
w4.setText("Brightness");
if(bright == false)w4.setTextColor(btnText);
if(bright == true)w4.setTextColor(android.graphics.Color.GREEN);
w4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
bright ? bright = false : bright = true;
if(bright == true) {
w4.setTextColor(android.graphics.Color.GREEN);
bright = true;
clientMessage(pre+"Brightness enabled.");
}
if(bright == false) {
w4.setTextColor(android.graphics.Color.RED);
bright = false;
}
}
}));
wLayout.addView(w4);*/

var w6 = new styleButton();
w6.setText("Nuke");
if(nuke == false)w6.setTextColor(btnText);
if(nuke == true)w6.setTextColor(android.graphics.Color.GREEN);
w6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
nuke ? nuke = false : nuke = true;
if(nuke == true) {
w6.setTextColor(android.graphics.Color.GREEN);
nuke = true;
clientMessage(pre+"Nuke enabled.");
}
if(nuke == false) {
w6.setTextColor(android.graphics.Color.RED);
nuke = false;
}
}
}));
wLayout.addView(w6);

worlds = new android.widget.PopupWindow(wLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

worlds.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
wLayout1.setBackgroundDrawable(bg);
wLayout1.setPadding(20, 0, 20, 0);

worlds.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function other_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var oLayout = new android.widget.LinearLayout(MainActivity);
var oScroll = new android.widget.HorizontalScrollView(MainActivity);
var oLayout1 = new android.widget.LinearLayout(MainActivity);
oLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
oLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
oScroll.addView(oLayout);
oLayout1.addView(oScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

oScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)others.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
others.dismiss();
mainMenu();
}
}));
oLayout.addView(exit);

var f1 = new styleButton();
f1.setText("Add friend");
f1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
setFriend("name", "Add friend");
}
}));
oLayout.addView(f1);

var f2 = new styleButton();
f2.setText("Remove friend");
f2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
rmFriend("name", "Remove friend");
}
}));
oLayout.addView(f2);

var f3 = new styleButton();
f3.setText("Friend list");
f3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
friends();
}
}));
oLayout.addView(f3);

var spamy = new styleButton();
spamy.setText("Spam");
if(spam == false)spamy.setTextColor(btnText);
if(spam == true)spamy.setTextColor(android.graphics.Color.GREEN);
spamy.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
spam ? spam = false : spam = true;
if(spam == true) {
spamy.setTextColor(android.graphics.Color.GREEN);
spam = true;
others.dismiss();
doSpam("Message", "Seconds (default is 1)", "Spam");
}
if(spam == false) {
spamy.setTextColor(android.graphics.Color.RED);
spam = false;
que = false;
}
}
}));
oLayout.addView(spamy);

var ssa = new styleButton();
ssa.setText("Send to all");
ssa.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
others.dismiss();
putTell("Message", "Send");
}
}));
oLayout.addView(ssa);

var tidate = new styleButton();
tidate.setText("Device time/date");
tidate.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
var datime = new android.content.Intent(MainActivity);
datime.setAction(android.provider.Settings.ACTION_DATE_SETTINGS);
MainActivity.startActivity(datime);
}
}));
oLayout.addView(tidate);

var delcid = new styleButton();
delcid.setText("Delete client id");
delcid.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
dragon.deleteCid();
}
}));
oLayout.addView(delcid);

var coip = new styleButton();
coip.setText("Copy IP & port");
coip.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
var ClipboardManager = android.content.ClipboardManager;
var clipboard = ctx.getSystemService(android.content.Context.CLIPBOARD_SERVICE);
var cdata = android.content.ClipData.newPlainText("Dragon "+Math.random(12 * 7), Server.getAddress()+":"+Server.getPort());
clipboard.setPrimaryClip(cdata);
android.widget.Toast.makeText(MainActivity, "Copied to clipboard.", 1)
.show();
}
}));
oLayout.addView(coip);

others = new android.widget.PopupWindow(oLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

others.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
oLayout1.setBackgroundDrawable(bg);
oLayout1.setPadding(20, 0, 20, 0);

others.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function credit() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var aLayout = new android.widget.LinearLayout(MainActivity);
var aScroll = new android.widget.ScrollView(MainActivity);
var aLayout1 = new android.widget.LinearLayout(MainActivity);
aLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
aLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
aScroll.addView(aLayout);
aLayout1.addView(aScroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
credit1.dismiss();
mainMenu();
}
}));
aLayout.addView(exit);

var title = new android.widget.TextView(ctx);
title.setText("Dragon made by ArceusMatt");
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
aLayout.addView(title);

var twitter = new styleButton();
twitter.setText("Twitter");
twitter.setTextColor(android.graphics.Color.CYAN);
twitter.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var twi = new android.content.Intent(MainActivity);
twi.setAction(android.content.Intent.ACTION_VIEW);
twi.setData(android.net.Uri.parse("https://twitter.com/ArceusMatt?s=09"));
MainActivity.startActivity(twi);
}
}));
aLayout.addView(twitter);

var discord = new styleButton();
discord.setText("Discord");
discord.setTextColor(android.graphics.Color.WHITE);
discord.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var dis = new android.content.Intent(MainActivity);
dis.setAction(android.content.Intent.ACTION_VIEW);
dis.setData(android.net.Uri.parse("https://discord.gg/Fm29dG3"));
MainActivity.startActivity(dis);
}
}));
aLayout.addView(discord);

var gl = new styleButton();
gl.setText("Google+");
gl.setTextColor(android.graphics.Color.RED);
gl.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var gol = new android.content.Intent(MainActivity);
gol.setAction(android.content.Intent.ACTION_VIEW);
gol.setData(android.net.Uri.parse("https://plus.google.com/communities/103695355587842948163"));
MainActivity.startActivity(gol);
}
}));
aLayout.addView(gl);

var yt = new styleButton();
yt.setText("Youtube");
yt.setTextColor(android.graphics.Color.WHITE);
yt.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var tub = new android.content.Intent(MainActivity);
tub.setAction(android.content.Intent.ACTION_VIEW);
tub.setData(android.net.Uri.parse("https://www.youtube.com/user/Arceusmatt"));
MainActivity.startActivity(tub);
}
}));
aLayout.addView(yt);

credit1 = new android.widget.PopupWindow(aLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

credit1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.BLACK);
aLayout1.setBackgroundDrawable(bg);
aLayout1.setPadding(20, 0, 20, 0);

credit1.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function update(newupdate) {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var uLayout = new android.widget.LinearLayout(MainActivity);
var uScroll = new android.widget.ScrollView(MainActivity);
var uLayout1 = new android.widget.LinearLayout(MainActivity);
uLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
uLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
uScroll.addView(uLayout);
uLayout1.addView(uScroll);

var exit = new styleButton();
exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
updates.dismiss();
}
}));
uLayout.addView(exit);

var title = new android.widget.TextView(ctx);
title.setText("New update is here! "+newupdate);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
uLayout.addView(title);

var linkz = new styleButton();
linkz.setText("Update");
linkz.setTextColor(android.graphics.Color.CYAN);
linkz.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var myl = new android.content.Intent(MainActivity);
myl.setAction(android.content.Intent.ACTION_VIEW);
myl.setData(android.net.Uri.parse("https://arceusmatt.github.io/dragon"));
MainActivity.startActivity(myl);
}
}));
uLayout.addView(linkz);

updates = new android.widget.PopupWindow(uLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

updates.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.BLACK);
uLayout1.setBackgroundDrawable(bg);
uLayout1.setPadding(20, 0, 20, 0);

updates.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function friends() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var fLayout = new android.widget.LinearLayout(MainActivity);
var fScroll = new android.widget.ScrollView(MainActivity);
var fLayout1 = new android.widget.LinearLayout(MainActivity);
fLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
fLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
fScroll.addView(fLayout);
fLayout1.addView(fScroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
friend.dismiss();
other_menu();
}
}));
fLayout.addView(exit);

var list = new android.widget.TextView(ctx);
list.setText(pList.join(",\n"));
list.setTextSize(20);
list.setTextColor(android.graphics.Color.WHITE);
list.setGravity(android.view.Gravity.CENTER);
fLayout.addView(list);

friend = new android.widget.PopupWindow(fLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

friend.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.BLACK);
fLayout1.setBackgroundDrawable(bg);
fLayout1.setPadding(20, 0, 20, 0);

friend.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

/*
*
============
EditText / input dialogs
============
*
*/

function editFov(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
	layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number" && final >= 1 && final <= 120){
ModPE.setFov(final);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function editSpeed(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number"){
ModPE.setGameSpeed(final);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function give(hint, hint2, hint3, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input3 = new styleInput();
input3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(input3);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
input3.setText("");
input3.setHint(hint3);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
final3 = input3.getText();
if(typeof(parseInt(final)) == "number" && typeof(parseInt(final2)) == "number" && typeof(parseInt(final3)) == "number"){
var id = parseInt(final);
var dam = parseInt(final3);
var amo = parseInt(final2);
Player.addItemInventory(id, dam, amo);
let item = [-1, -1];
for (let i = 0; i < 10; i++) {
let dmg = dragon.sortGive(id, Player.getInventorySlot(i));
if (dmg > item[0]) {
item[0] = dmg;
item[1] = i;
}
if (item[1] != -1)Player.setSelectedSlotId(item[1]);
}
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function offhand(hint, hint2, hint3) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input3 = new styleInput();
input3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(input3);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
input3.setText("");
input3.setHint(hint3);
Exit.setText("Submit");
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
final3 = input3.getText();
if(typeof(parseInt(final)) == "number" && typeof(parseInt(final2)) == "number" && typeof(parseInt(final3)) == "number"){
Entity.setOffhandSlot(getPlayerEnt(), final, final3, final2);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setRange(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number"){
aimrange = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setShadow(hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
if(typeof(parseInt(final)) == "number" && typeof(parseInt(final2)) == "number"){
shadow1X = final;
shadow1Y = final2;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setPrefix(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
var final = input.getText()+"";
if(typeof(final) == "string"){
prefix = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setHeart(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number"){
max = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function discord(msg) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var yes = new styleButton(ctx);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(yes);
layout.addView(Exit);
yes.setText(msg);
Exit.setText("No");
yes.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
var dis = new android.content.Intent(MainActivity);
dis.setAction(android.content.Intent.ACTION_VIEW);
dis.setData(android.net.Uri.parse("https://discord.gg/SzwJaEc"));
MainActivity.startActivity(dis);
editor.dismiss();
}
});
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function doSpam(hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText()+"";
final2 = input2.getText();
if(typeof(parseInt(final2)) == "number"){
text = final;
sec = final2;
que = true;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function teleport(hint, hint2, hint3, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input3 = new styleInput();
input3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(input3);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
input3.setText("");
input3.setHint(hint3);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
final3 = input3.getText();
if(typeof(parseInt(final)) == "number" || typeof(parseInt(final2)) == "number" || typeof(parseInt(final3)) == "number"){
x = parseInt(final);
y = parseInt(final2);
z = parseInt(final3);
Entity.setPosition(Player.getEntity(), x, y, z);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function putTell(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
final = input.getText()+"";
if(typeof(final) == "string"){
sendToAll(final);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setFriend(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
var final = input.getText()+"";
if(typeof(final) == "string"){
dragon.addFriend(dragon.clean(final));
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function rmFriend(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
var final = input.getText()+"";
if(typeof(final) == "string"){
dragon.removeFriend(dragon.clean(final));
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

/*
*
============
effect & enchant menus
============
*
*/

function effect_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var eLayout = new android.widget.LinearLayout(MainActivity);
var eScroll = new android.widget.HorizontalScrollView(MainActivity);
var eLayout1 = new android.widget.LinearLayout(MainActivity);
eLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
eLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
eScroll.addView(eLayout);
eLayout1.addView(eScroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
effects.dismiss();
mainMenu();
}
}));
eLayout.addView(exit);

var e0 = new styleButton();
e0.setText("Clear");
e0.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Entity.removeAllEffects(getPlayerEnt());
}
}));
eLayout.addView(e0);

var e1 = new styleButton();
e1.setText("Absorption");
e1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(1, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e1);

var e2 = new styleButton();
e2.setText("Blindness");
e2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(2, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e2);

var e3 = new styleButton();
e3.setText("Confusion");
e3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(3, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e3);

var e4 = new styleButton();
e4.setText("Strength");
e4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(4, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e4);

var e5 = new styleButton();
e5.setText("Resistance");
e5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(5, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e5);

var e6 = new styleButton();
e6.setText("Fatigue");
e6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(6, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e6);

var e7 = new styleButton();
e7.setText("Haste");
e7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(7, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e7);

var e8 = new styleButton();
e8.setText("Fatal poison");
e8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(8, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e8);

var e9 = new styleButton();
e9.setText("Fire resistance");
e9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(9, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e9);

var e10 = new styleButton();
e10.setText("Harm");
e10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(10, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e10);

var e11 = new styleButton();
e11.setText("Heal");
e11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(11, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e11);

var e12 = new styleButton();
e12.setText("Health boost");
e12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(12, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e12);

var e13 = new styleButton();
e13.setText("Hunger");
e13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(13, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e13);

var e14 = new styleButton();
e14.setText("Invisibility");
e14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(14, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e14);

var e15 = new styleButton();
e15.setText("Jump boost");
e15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(15, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e15);

var e16 = new styleButton();
e16.setText("Levitation");
e16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(16, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e16);

var e17 = new styleButton();
e17.setText("Slowness");
e17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(17, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e17);

var e18 = new styleButton();
e18.setText("Speed");
e18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(18, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e18);

var e19 = new styleButton();
e19.setText("Night vision");
e19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(19, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e19);

var e20 = new styleButton();
e20.setText("Poison");
e20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(20, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e20);

var e21 = new styleButton();
e21.setText("Regeneration");
e21.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(21, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e21);

var e22 = new styleButton();
e22.setText("Saturation");
e22.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(22, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e22);

var e23 = new styleButton();
e23.setText("Water breathing");
e23.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(23, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e23);

var e24 = new styleButton();
e24.setText("Weakness");
e24.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(24, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e24);

var e25 = new styleButton();
e25.setText("Wither");
e25.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(25, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e25);

function effect(we, hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
s = input.getText();
l = input2.getText();
if(typeof(parseInt(s)) == "number" && typeof(parseInt(l)) == "number"){
if(we == 1)Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s, l, false, true);
if(we == 2)Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s, l, false, true);
if(we == 3)Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s, l, false, true);
if(we == 4)Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s, l, false, true);
if(we == 5)Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s, l, false, true);
if(we == 6)Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s, l, false, true);
if(we == 7)Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s, l, false, true);
if(we == 8)Entity.addEffect(getPlayerEnt(), MobEffect.fatalPoison, s, l, false, true);
if(we == 9)Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s, l, false, true);
if(we == 10)Entity.addEffect(getPlayerEnt(), MobEffect.harm, s, l, false, true);
if(we == 11)Entity.addEffect(getPlayerEnt(), MobEffect.heal, s, l, false, true);
if(we == 12)Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s, l, false, true);
if(we == 13)Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s, l, false, true);
if(we == 14)Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s, l, false, true);
if(we == 15)Entity.addEffect(getPlayerEnt(), MobEffect.jump, s, l, false, true);
if(we == 16)Entity.addEffect(getPlayerEnt(), MobEffect.levitation, s, l, false, true);
if(we == 17)Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s, l, false, true);
if(we == 18)Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s, l, false, true);
if(we == 19)Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s, l, false, true);
if(we == 20)Entity.addEffect(getPlayerEnt(), MobEffect.poison, s, l, false, true);
if(we == 21)Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s, l, false, true);
if(we == 22)Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s, l, false, true);
if(we == 23)Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s, l, false, true);
if(we == 24)Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s, l, false, true);
if(we == 25)Entity.addEffect(getPlayerEnt(), MobEffect.wither, s, l, false, true);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

effects = new android.widget.PopupWindow(eLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

effects.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.TRANSPARENT);
bg.setStroke(3, android.graphics.Color.CYAN);
eLayout1.setPadding(20, 0, 20, 0);

effects.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function enchant_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var e2Layout = new android.widget.LinearLayout(MainActivity);
var e2Scroll = new android.widget.HorizontalScrollView(MainActivity);
var e2Layout1 = new android.widget.LinearLayout(MainActivity);
e2Layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
e2Layout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
e2Scroll.addView(e2Layout);
e2Layout1.addView(e2Scroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
enchants.dismiss();
mainMenu();
}
}));
e2Layout.addView(exit);

function godsword() {
if (Player.getSelectedSlotId() != null) {
var lvl = "29000";
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Dragon sword");
}
}

function godpickaxe() {
if (Player.getSelectedSlotId() != null) {
var lvl = "29000";
var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Dragon pickaxe");
}
}

function godaxe() {
if (Player.getSelectedSlotId() != null) {
var lvl = "29000";
var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Dragon axe");
}
}

function godbow() {
if (Player.getSelectedSlotId() != null) {
var lvl = "29000";
var flamelvl = '80';
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, flamelvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Dragon bow");
}
}

function godarmor() {
if (Player.getSelectedSlotId() != null) {
var lvl = "29000";
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Dragon armor");
}
}

function wearGodArmor() {
var lvl = "29000";
if (Player.getArmorSlot(0) != null) {
Player.enchant(Player.getArmorSlot(0), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(0), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(0), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(0), "Dragon helmet");
}
if (Player.getArmorSlot(1) != null) {
Player.enchant(Player.getArmorSlot(1), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(1), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(1), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(1), "Dragon chestplate");
}
if (Player.getArmorSlot(2) != null) {
Player.enchant(Player.getArmorSlot(2), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(2), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(2), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(2), "Dragon pants");
}
if (Player.getArmorSlot(3) != null) {
Player.enchant(Player.getArmorSlot(3), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(3), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(3), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(3), "Dragon boots");
}
}

var enchants_0 = [];
var enchants0 = {
select: [0, -1],
list: [["God sword"],["God pickaxe"],["God axe"],["God bow"],["God armor (holding)"],["God armor (wearing)"]]
}
enchants0.list.forEach(function (entry, index) {
enchants_0.push(enchants0.list[index][0]);
});

var adapter = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_single_choice, enchants_0);

var e0 = new styleButton();
e0.setText("Max enchants");
e0.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Select enchant");
alert.setAdapter(adapter, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {
if(pos == 0)godsword();
if(pos == 1)godpickaxe();
if(pos == 2)godaxe();
if(pos == 3)godbow();
if(pos == 4)godarmor();
if(pos == 5)wearGodArmor();
}
}));
var dialog = alert.create();
dialog.show();
}
});
e2Layout.addView(e0);

var e1 = new styleButton();
e1.setText("Aqua affinity");
e1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(1, "Level", "Set enchant");
}
}));
e2Layout.addView(e1);

var e2 = new styleButton();
e2.setText("Bane of arthropods");
e2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(2, "Level", "Set enchant");
}
}));
e2Layout.addView(e2);

var e3 = new styleButton();
e3.setText("Blast protection");
e3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(3, "Level", "Set enchant");
}
}));
e2Layout.addView(e3);

var e4 = new styleButton();
e4.setText("Depth strider");
e4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(4, "Level", "Set enchant");
}
}));
e2Layout.addView(e4);

var e5 = new styleButton();
e5.setText("Efficiency");
e5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(5, "Level", "Set enchant");
}
}));
e2Layout.addView(e5);

var e6 = new styleButton();
e6.setText("Feather falling");
e6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(6, "Level", "Set enchant");
}
}));
e2Layout.addView(e6);

var e7 = new styleButton();
e7.setText("Fire aspect");
e7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(7, "Level", "Set enchant");
}
}));
e2Layout.addView(e7);

var e8 = new styleButton();
e8.setText("Fire protection");
e8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(8, "Level", "Set enchant");
}
}));
e2Layout.addView(e8);

var e9 = new styleButton();
e9.setText("Flame");
e9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(9, "Level", "Set enchant");
}
}));
e2Layout.addView(e9);

var e10 = new styleButton();
e10.setText("Fortune");
e10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(10, "Level", "Set enchant");
}
}));
e2Layout.addView(e10);

var e11 = new styleButton();
e11.setText("Frost walker");
e11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(11, "Level", "Set enchant");
}
}));
e2Layout.addView(e11);

var e12 = new styleButton();
e12.setText("Infinity");
e12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(12, "Level", "Set enchant");
}
}));
e2Layout.addView(e12);

var e13 = new styleButton();
e13.setText("Knockback");
e13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(13, "Level", "Set enchant");
}
}));
e2Layout.addView(e13);

var e14 = new styleButton();
e14.setText("Looting");
e14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(14, "Level", "Set enchant");
}
}));
e2Layout.addView(e14);

var e15 = new styleButton();
e15.setText("Luck of the sea");
e15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(15, "Level", "Set enchant");
}
}));
e2Layout.addView(e15);

var e16 = new styleButton();
e16.setText("Lure");
e16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(16, "Level", "Set enchant");
}
}));
e2Layout.addView(e16);

var e17 = new styleButton();
e17.setText("Mending");
e17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(17, "Level", "Set enchant");
}
}));
e2Layout.addView(e17);

var e18 = new styleButton();
e18.setText("Power");
e18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(18, "Level", "Set enchant");
}
}));
e2Layout.addView(e18);

var e19 = new styleButton();
e19.setText("Projectile protection");
e19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(19, "Level", "Set enchant");
}
}));
e2Layout.addView(e19);

var e20 = new styleButton();
e20.setText("Protection");
e20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(20, "Level", "Set enchant");
}
}));
e2Layout.addView(e20);

var e21 = new styleButton();
e21.setText("Punch");
e21.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(21, "Level", "Set enchant");
}
}));
e2Layout.addView(e21);

var e22 = new styleButton();
e22.setText("Respiration");
e22.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(22, "Level", "Set enchant");
}
}));
e2Layout.addView(e22);

var e23 = new styleButton();
e23.setText("Sharpness");
e23.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(23, "Level", "Set enchant");
}
}));
e2Layout.addView(e23);

var e24 = new styleButton();
e24.setText("Silk touch");
e24.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(24, "Level", "Set enchant");
}
}));
e2Layout.addView(e24);

var e25 = new styleButton();
e25.setText("Smite");
e25.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(25, "Level", "Set enchant");
}
}));
e2Layout.addView(e25);

var e26 = new styleButton();
e26.setText("Thorns");
e26.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(26, "Level", "Set enchant");
}
}));
e2Layout.addView(e26);

var e27 = new styleButton();
e27.setText("Unbreaking");
e27.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(27, "Level", "Set enchant");
}
}));
e2Layout.addView(e27);

function enchant(we, hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton(ctx);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function (view) {
ench = input.getText();
if(typeof(parseInt(ench)) == "number"){
if(we == 1)Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITYA, ench);
if(we == 2)Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, ench);
if(we == 3)Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, ench);
if(we == 4)Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, ench);
if(we == 5)Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, ench);
if(we == 6)Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, ench);
if(we == 7)Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, ench);
if(we == 8)Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, ench);
if(we == 9)Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, ench);
if(we == 10)Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, ench);
if(we == 11)Player.enchant(Player.getSelectedSlotId(), Enchantment.FROST_WALKER, ench);
if(we == 12)Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, ench);
if(we == 13)Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, ench);
if(we == 14)Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, ench);
if(we == 15)Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, ench);
if(we == 16)Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, ench);
if(we == 17)Player.enchant(Player.getSelectedSlotId(), Enchantment.MENDING, ench);
if(we == 18)Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, ench);
if(we == 19)Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, ench);
if(we == 20)Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, ench);
if(we == 21)Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, ench);
if(we == 22)Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, ench);
if(we == 23)Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, ench);
if(we == 24)Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, ench);
if(we == 25)Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, ench);
if(we == 26)Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, ench);
if(we == 27)Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, ench);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

enchants = new android.widget.PopupWindow(e2Layout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

enchants.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.TRANSPARENT);
bg.setStroke(3, android.graphics.Color.CYAN);
e2Layout1.setPadding(20, 0, 20, 0);

enchants.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

/*
*
============
code
============
*
*/

function getNearestEntity(maxrange) {
	var mobs = Entity.getAll();
	var small = maxrange;
	var ent = null;
	if (mobs != null) {
		for (var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
			var y = Entity.getY(mobs[i]) - getPlayerY();
			var z = Entity.getZ(mobs[i]) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(mobs[i]) >= 1) {
				small = dist;
				ent = mobs[i];
			}
		}
		return ent;
	}
}

function getNearestPlayer(maxrange) {
	var players = Server.getAllPlayers();
	var small = maxrange;
	var ent = null;
	if (players != null) {
		for (var i = 0; i < players.length; i++) {
			var x = Entity.getX(players[i]) - getPlayerX();
			var y = Entity.getY(players[i]) - getPlayerY();
			var z = Entity.getZ(players[i]) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
				small = dist;
				ent = players[i];
			}
		}
		return ent;
	}
}

function getRandPlayer(maxrange) {
	var players = Server.getAllPlayers();
	var small = maxrange;
	var ent = null;
	if (players != null) {
var p = players[Math.floor(Math.random() * players.length)];
			var x = Entity.getX(p) - getPlayerX();
			var y = Entity.getY(p) - getPlayerY();
			var z = Entity.getZ(p) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(p) >= 1) {
				small = dist;
				ent = p;
			}
		return ent;
	}
}

function crosshairAimAt(ent, pos) {
	if (ent != null) {
		var x = Entity.getX(ent) - getPlayerX();
		var y = Entity.getY(ent) - getPlayerY();
		var z = Entity.getZ(ent) - getPlayerZ();
		if (pos != null && pos instanceof Array) {
			x = Entity.getX(ent) - pos[0];
			y = Entity.getY(ent) - pos[1];
			z = Entity.getZ(ent) - pos[2];
		}
		if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
		var a = 0.5 + Entity.getX(ent);
		var b = Entity.getY(ent);
		var c = 0.5 + Entity.getZ(ent);
		var len = Math.sqrt(x * x + y * y + z * z);
		var y = y / len;
		var pitch = Math.asin(y);
		pitch = pitch * 180.0 / Math.PI;
		pitch = -pitch;
		var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
		if (pitch < 89 && pitch > -89) {
			Entity.setRot(Player.getEntity(), yaw, pitch);
		}
	}
}

function sendToAll(tell){
var online = Server.getAllPlayerNames();
for(var i = 0; i < Server.getAllPlayers(); i++){
Server.sendChat("/w "+online[i]+" "+tell);
}
}

function instantBreak(){
for(var i = 0; i < 217; i++){
Block.setDestroyTime(i, 0.1);
}
}

function defaultBreak() {
for(var i = 0; i < 217; i++){
Block.setDestroyTime(i, 0.8);
}
}

function entityAddedHook(entity) {

if(find) {
if(entity != null){
var eid = Entity.getEntityTypeId(entity);
if(eid == 63){
var x = Math.floor(Entity.getX(entity));
var y = Math.floor(Entity.getY(entity));
var z = Math.floor(Entity.getZ(entity));
var name = Entity.getNameTag(entity);
clientMessage(pre + "Player in range:\n" + name + " / " + eid + "\nx: " + x + ", y: " + y + ", z: " + z);
}
}
}

}

function entityRemovedHook(entity) {

if(find) {
if(entity != null){
var eid = Entity.getEntityTypeId(entity);
if(eid == 63){
var x = Math.floor(Entity.getX(entity));
var y = Math.floor(Entity.getY(entity));
var z = Math.floor(Entity.getZ(entity));
var name = Entity.getNameTag(entity);
clientMessage(pre + "Player left range:\n" + name + " / " + eid + "\nx: " + x + ", y: " + y + ", z: " + z);
}
}
}

}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
if(tower){
if(getPitch() >= 70 && Player.getCarriedItem() != 0){
Entity.setVelY(Player.getEntity(), 0.3);
}
}
if(bridge){
var yaw = getYaw();
if(getPitch() >= 40 && getPitch() <= 85 && Player.getCarriedItem() != 0){
Entity.setPosition(Player.getEntity(), x, y+2.62, z);
}
}
if(taptp){
Entity.setPosition(Player.getEntity(), x, y+1.62, z);
}
if(tapjump){
Entity.setVelY(getPlayerEnt(), 0.4);
}
}

function attackHook(attacker, victim) {
if(hitjump){
if(victim)setVelY(getPlayerEnt(), 0.5);
}
if(behind){
if(victim){
var yaw = Entity.getYaw(victim);
var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);
/*
-45 & 44 = +z
-133 & -43 = +x
136 & -132 = -z
45 & 135 = -x
*/
if(dragon.yawDir(0, yaw)){
if(getTile(x, y-2, z-2) != 10 || getTile(x, y-2, z-2) != 11){
Entity.setPosition(Player.getEntity(), x, y+1.62, z-2);
}
}
if(dragon.yawDir(1, yaw)){
if(getTile(x-2, y-2, z) != 10 || getTile(x-2, y-2, z) != 11){
Entity.setPosition(Player.getEntity(), x-2, y+1.62, z);
}
}
if(dragon.yawDir(2, yaw)){
if(getTile(x, y-2, z+2) != 10 || getTile(x, y-2, z+2) != 11){
Entity.setPosition(Player.getEntity(), x, y+1.62, z+2);
}
}
if(dragon.yawDir(3, yaw)){
if(getTile(x+2, y-2, z) != 10 || getTile(x+2, y-2, z) != 11){
Entity.setPosition(Player.getEntity(), x+2, y+1.62, z);
}
}
}
}
if(grapple){
if(victim){
var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);
Entity.setPosition(Player.getEntity(), x, y+1.62, z);
}
}
}

function modTick(){
cd = new Date;
if(Math.floor(parseInt(cd.getMinutes()-7)) == Math.floor(parseInt(min))){
min = 0;
min = cd.getMinutes();
discord("Join our discord?");
}
if (autosword) {
if (getNearestPlayer(aimrange) != null) {
let bestsword = [-1, -1];
for (let i = 0; i < 10; i++) {
let dmg = dragon.sortSword(Player.getInventorySlot(i));
if (dmg > bestsword[0]) {
bestsword[0] = dmg;
bestsword[1] = i;
}
if (bestsword[1] != -1)Player.setSelectedSlotId(bestsword[1]);
}
}
}
if (bhop) {
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if (Entity.getVelX(Player.getEntity()) > 0.1 && getTile(x, y + 2, z) == 0) {
if(getTile(x, y - 2, z) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
if (Entity.getVelX(Player.getEntity()) < -0.1 && getTile(x, y + 2, z) == 0) {
if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
if (Entity.getVelZ(Player.getEntity()) > 0.1 && getTile(x, y + 2, z) == 0) {
if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
if (Entity.getVelZ(Player.getEntity()) < -0.1 && getTile(x, y + 2, z) == 0) {
if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
}
if (spider) {
if (getTile(Player.getX() + 1, Player.getY(), Player.getZ()) > 0 || getTile(Player.getX() -1, Player.getY(), Player.getZ()) > 0 || getTile(Player.getX(), Player.getY(), Player.getZ() +1) > 0 || getTile(Player.getX(), Player.getY(), Player.getZ() -1) > 0 || getTile(Player.getX() + 1, Player.getY(), Player.getZ() - 1) > 0 || getTile(Player.getX() - 1, Player.getY(), Player.getZ() + 1) > 0 || getTile(Player.getX() -1, Player.getY(), Player.getZ() -1) > 0 || getTile(Player.getX() +1, Player.getY(), Player.getZ() +1) > 0) {
setVelY(Player.getEntity(), 0.6);
}
}
if (autowalk) {
dragon.toDirectionalVector(pdir, (getYaw() + 90) * dragon.deg_to_rad(), getPitch() * dragon.deg_to_rad() * -1);
setVelX(getPlayerEnt(), 0.22 * pdir[0]);
setVelZ(getPlayerEnt(), 0.22 * pdir[2]);
}
if (glide) {
if (Entity.getVelY(Player.getEntity()) <= 0) {
setVelY(Player.getEntity(), -0.05);
}
}
if(hud){
var x = Math.floor(getPlayerX());
var y = Math.floor(getPlayerY());
var z = Math.floor(getPlayerZ());
var item = Player.getCarriedItem();
var count = Player.getCarriedItemCount();
var meta = Player.getCarriedItemData();
var world = Level.getWorldName();
var time = Math.floor(Level.getTime());
var pitch = Math.floor(getPitch(getPlayerEnt()));
var yaw = Math.floor(getYaw(getPlayerEnt()));
if(rainbow)var color = dragon.rainbow();
if(rainbow == false)var color = "";
if(side){
ModPE.showTipMessage(color+"\n                                                                                 X: "+x+", Y: "+y+", Z: "+z+"\n                                                                                 Yaw: "+yaw+" & Pitch: "+pitch+"\n                                                                                 "+world+", Time: "+time+"\n                                                                                 ("+item+":"+meta+")x"+count+" - "+Entity.getHealth(getPlayerEnt())+"<3\n                                                                                 eid: "+dragon.getEid()+" & bid: "+Player.getPointedBlockId()+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
} else {
ModPE.showTipMessage(color+"X: "+x+", Y: "+y+", Z: "+z+"\nYaw: "+yaw+" & Pitch: "+pitch+"\n"+world+", Time: "+time+"\n("+item+":"+meta+")x"+count+" - "+Entity.getHealth(getPlayerEnt())+"<3\neid: "+dragon.getEid()+" & bid: "+Player.getPointedBlockId()+"");
}
}
if(autolog){
var ent = getNearestPlayer(aimrange + 2);
if(ent != null){
ModPE.leaveGame();
}
}
if (autopot) {
var hearts = Entity.getHealth(getPlayerEnt());
if(hearts <= max*2){
let bestsword = [-1, -1];
for (let i = 0; i < 10; i++) {
let slot = dragon.sortPots(Player.getInventorySlot(i), Player.getInventorySlotData(i));
if (slot > bestsword[0]) {
bestsword[0] = slot;
bestsword[1] = i;
}
if (bestsword[1] != -1){
Player.setSelectedSlotId(bestsword[1]);
setRot(getPlayerEnt(), getYaw(getPlayerEnt()), 90);
}
}
}
}
if (autofood) {
var hearts = Entity.getHealth(getPlayerEnt());
if(hearts <= max*2){
let bestsword = [-1, -1];
for (let i = 0; i < 10; i++) {
let slot = dragon.sortFood(Player.getInventorySlot(i));
if (slot > bestsword[0]) {
bestsword[0] = slot;
bestsword[1] = i;
}
if (bestsword[1] != -1){
Player.setSelectedSlotId(bestsword[1]);
}
}
}
}
if(chestesp){

var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var newX;
var newY;
var newZ;
for (var blockX = -chestTracersRange; blockX <= chestTracersRange; blockX++) {
for (var blockY = -chestTracersRange; blockY <= chestTracersRange; blockY++) {
for (var blockZ = -chestTracersRange; blockZ <= chestTracersRange; blockZ++) {
newX = x + blockX;
newY = y + blockY;
newZ = z + blockZ;
if (getTile(newX, newY, newZ) == 54) {
dragon.draw(newX, newY, newZ, chestTracersGroundMode == "on" ? true : false);
}
}
}
}

}
if (jesus) {
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if(getTile(x, y - 2, z) == 8 || getTile(x, y - 2, z) == 11 || getTile(x, y - 2, z) == 9 || getTile(x, y - 2, z) == 10){
if (Entity.getVelX(Player.getEntity()) > 0.1) {
Entity.setVelY(Player.getEntity(), 0.1);
}
if (Entity.getVelX(Player.getEntity()) < -0.1) {
Entity.setVelY(Player.getEntity(), 0.1);
}
if (Entity.getVelZ(Player.getEntity()) > 0.1) {
Entity.setVelY(Player.getEntity(), 0.1);
}
if (Entity.getVelZ(Player.getEntity()) < -0.1) {
Entity.setVelY(Player.getEntity(), 0.1);
}
}
}
if(airwalk){
/*
-45 & 45 = +z
-135 & -44 = +x
131 & -134 = -z
45 & 130 = -x
*/
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var yaw = Entity.getYaw(getPlayerEnt());
if(getTile(x, y -2, z) == 0){

if(getPitch() <= 20 && getPitch() >= -5){
y = y;
ModPE.showTipMessage(pre+"Air walk going straight.");
}
if(getPitch() >= 21){
y = y-1;
ModPE.showTipMessage(pre+"Air walk going down.");
}
if(getPitch() <= -6){
y = y+1;
ModPE.showTipMessage(pre+"Air walk going up.");
}
if(dragon.yawDir(0, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x, y -2, z-1, 95, 0);
/*front*/
Level.setTile(x, y -2, z+1, 95, 0);
Level.setTile(x, y -2, z+2, 95, 0);
/*left side*/
Level.setTile(x+1, y -2, z+1, 95, 0);
Level.setTile(x+1, y -2, z+2, 95, 0);
/*right side*/
Level.setTile(x-1, y -2, z+1, 95, 0);
Level.setTile(x-1, y -2, z+2, 95, 0);
}
if(dragon.yawDir(1, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x-1, y -2, z, 95, 0);
/*front*/
Level.setTile(x+1, y -2, z, 95, 0);
Level.setTile(x+2, y -2, z, 95, 0);
/*left side*/
Level.setTile(x+1, y -2, z+1, 95, 0);
Level.setTile(x+2, y -2, z+1, 95, 0);
/*right side*/
Level.setTile(x+1, y -2, z-1, 95, 0);
Level.setTile(x+2, y -2, z-1, 95, 0);
}
if(dragon.yawDir(2, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x, y -2, z+1, 95, 0);
/*front*/
Level.setTile(x, y -2, z-1, 95, 0);
Level.setTile(x, y -2, z-2, 95, 0);
/*left side*/
Level.setTile(x-1, y -2, z-1, 95, 0);
Level.setTile(x-1, y -2, z-2, 95, 0);
/*right side*/
Level.setTile(x+1, y -2, z-1, 95, 0);
Level.setTile(x+1, y -2, z-2, 95, 0);
}
if(dragon.yawDir(3, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x+1, y -2, z, 95, 0);
/*front*/
Level.setTile(x-1, y -2, z, 95, 0);
Level.setTile(x-2, y -2, z, 95, 0);
/*left side*/
Level.setTile(x-1, y -2, z-1, 95, 0);
Level.setTile(x-2, y -2, z-1, 95, 0);
/*right side*/
Level.setTile(x-1, y -2, z+1, 95, 0);
Level.setTile(x-2, y -2, z+1, 95, 0);
}

}
}
if(elevator){
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var newY;
for (var blockY = -elevatorRange; blockY <= elevatorRange; blockY++) {
newY = y + blockY;
if(getTile(x, y-2, z) != 0){
if(getTile(x, newY-2, z) != 0 && getTile(x, newY, z) == 0) {
Entity.setPosition(Player.getEntity(), x, newY+1, z);
}
}
}
}
if(twerk){
if(Entity.isSneaking(getPlayerEnt()) == true){
Entity.setSneaking(getPlayerEnt(), false);
}
if(Entity.isSneaking(getPlayerEnt()) == false){
Entity.setSneaking(getPlayerEnt(), true);
}
}
if(phase){
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if(Entity.isSneaking(getPlayerEnt())){

if(getTile(x+1, y-1, z) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}
if(getTile(x-1, y-1, z) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}
if(getTile(x, y-1, z+1) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}
if(getTile(x, y-1, z-1) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}

}
}
if(vel){
var velX = Entity.getVelX(getPlayerEnt());
var velY = Entity.getVelY(getPlayerEnt());
var velZ = Entity.getVelZ(getPlayerEnt());
ModPE.showTipMessage(velX+"\n"+velY+"\n"+velZ);
}
if(sprint){
dragon.toDirectionalVector(pdir, (getYaw() + 90) * dragon.deg_to_rad(), getPitch() * dragon.deg_to_rad() * -1);
setVelX(getPlayerEnt(), 0.26 * pdir[0]);
setVelZ(getPlayerEnt(), 0.26 * pdir[2]);
}
if(autobreak){
var x = Player.getPointedBlockX();
var y = Player.getPointedBlockY();
var z = Player.getPointedBlockZ();
if(Level.getTile(x, y, z) != 0)Level.destroyBlock(x, y, z, true);
}
if(nuke){
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
Level.destroyBlock(x, y-2, z, false);
Level.destroyBlock(x+1, y-2, z, false);
Level.destroyBlock(x, y-2, z+1, false);
Level.destroyBlock(x-1, y-2, z, false);
Level.destroyBlock(x, y-2, z-1, false);
Level.destroyBlock(x, y-3, z, false);
}
}

function screenChangeHook(screenName){
if(screenName.match("disconnect_screen") || screenName.includes("disconnect_screen")){
ModPE.setGameSpeed(20);
aimbot = false;
airwalk = false;
autowalk = false;
chestesp = false;
find = false;
hitbox = false;
hud = false;
spam = false;
tpaura = false;
checkslapper = false;
pdir = [0,0,0];
sec = 1;
text = "";
que = false;
rainbow = false;
ghost = false;
twerk = false;
}
}

function fastEat(bol){
if(bol){
/*apple*/
Item.setProperties(260, {"use_duration": 1,"food": {"nutrition": 4,"saturation_modifier": "low","is_meat": false}});
/*golden*/
Item.setProperties(322, {"stack_by_data": true,"use_duration": 1,"foil": false,"food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 5,"amplifier": 1},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 0}],"enchanted_effects": [{"name": "regeneration","chance": 0.66,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 0.66,"duration": 120,"amplifier": 0},{"name": "resistance","chance": 0.66,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 0.66,"duration": 300,"amplifier": 0}]}});
/*gapple*/
Item.setProperties(466, {"hand_equipped": false,"stack_by_data": true,"use_duration": 1,"foil": true,"hover_text_color": "light_purple","food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 3},{"name": "resistance","chance": 1.0,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 1.0,"duration": 300,"amplifier": 0}]}});
Item.setProperties(260, {"use_duration": 1,"max_stack_size": 1,"food": {"nutrition": 6,"saturation_modifier": "normal","is_meat": false,"using_converts_to": "bowl"}});
/*bread*/
Item.setProperties(297, {"use_duration": 1,"food": {"nutrition": 5,"saturation_modifier":"normal","is_meat": false}});
/*porkchop*/
Item.setProperties(319, {"use_duration": 1,"food": {"nutrition": 3,"saturation_modifier": "low","is_meat": true}});
/*cooked*/
Item.setProperties(320, {"use_duration": 1,"food": {"nutrition": 8,"saturation_modifier": "good","is_meat": true}});
/*fish*/
Item.setProperties(349, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier": "poor","is_meat": true}});
/*salmon*/
Item.setProperties(460, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier":"poor","is_meat": true}});
/*clown*/
Item.setProperties(461, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true}});
/*puffer*/
Item.setProperties(462, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true,"effects": [{"name": "poison","duration": 60,"amplifier": 3},{"name":"nausea","duration": 15,"amplifier": 1},{"name": "hunger","duration": 15,"amplifier": 2}]}});
/*cooked*/
Item.setProperties(350, {"use_duration":1,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":5,"saturation_modifier":"normal","eat_sound":"random.burp","is_meat": true}});
/*cookedsalmon*/
Item.setProperties(463, {"use_duration":1,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*cookie*/
Item.setProperties(360, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"poor","is_meat": false}});
/*melon*/
Item.setProperties(357, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false}});
/*beef*/
Item.setProperties(363, {"use_duration":1,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(364, {"use_duration":1,"food":{"nutrition":8,"saturation_modifier":"good","is_meat": true}});
/*chicken*/
Item.setProperties(365, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true,"effects":[{"name":"hunger","chance":0.3,"duration":30,"amplifier":0}]}});
/*cooked*/
Item.setProperties(366, {"use_duration":1,"food":{"nutrition":6,"saturation_modifier":"normal","is_meat": true}});
/*mutton*/
Item.setProperties(423, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(424, {"use_duration":1,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*flesh*/
Item.setProperties(367, {"use_duration":1,"food":{"nutrition":4,"saturation_modifier":"poor","is_meat": true,"effects":[{"name":"hunger","chance":0.8,"duration":30,"amplifier":0}]}});
/*spider*/
Item.setProperties(375, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"good","is_meat": false,"effects":[{"name":"poison","chance":1.0,"duration":5,"amplifier":0}]}});
/*carrot*/
Item.setProperties(391, {"use_duration":1,"food":{"nutrition":3,"saturation_modifier":"normal","is_meat": false},"seed":{"crop_result":"carrots","plant_at":"farmland"}});
/*potato*/
Item.setProperties(392, {"use_duration":1,"food":{"nutrition":1,"saturation_modifier":"low","is_meat": false},"seed":{"crop_result":"potatoes","plant_at":"farmland"}});
/*baked*/
Item.setProperties(393, {"use_duration":1,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": false}});
/*poisonpotato*/
Item.setProperties(394, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false,"effects":[{"name":"poison","chance":0.6,"duration":5,"amplifier":0}]}});
/*golden*/
Item.setProperties(396, {"use_duration":1,"food":{"nutrition":6,"saturation_modifier":"supernatural","is_meat": false}});
/*pumpkin*/
Item.setProperties(400, {"use_duration":1,"food":{"nutrition":8,"saturation_modifier":"low","is_meat": false}});
/*rabbit*/
Item.setProperties(411, {"use_duration":1,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(412, {"use_duration":1,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": true}});
/*stew*/
Item.setProperties(413, {"use_duration":1,"max_stack_size":1,"food":{"nutrition":10,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": true}});
/*beetroot*/
Item.setProperties(459, {"use_duration":1,"food":{"nutrition":1,"saturation_modifier":"normal","is_meat": false}});
/*soup*/
Item.setProperties(280, {"id":203,"use_duration":1,"max_stack_size":1,"food":{"nutrition":6,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": false}});
} else {
/*apple*/
Item.setProperties(260, {"use_duration": 32,"food": {"nutrition": 4,"saturation_modifier": "low","is_meat": false}});
/*golden*/
Item.setProperties(322, {"stack_by_data": true,"use_duration": 32,"foil": false,"food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 5,"amplifier": 1},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 0}],"enchanted_effects": [{"name": "regeneration","chance": 0.66,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 0.66,"duration": 120,"amplifier": 0},{"name": "resistance","chance": 0.66,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 0.66,"duration": 300,"amplifier": 0}]}});
/*gapple*/
Item.setProperties(466, {"hand_equipped": false,"stack_by_data": true,"use_duration": 32,"foil": true,"hover_text_color": "light_purple","food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 3},{"name": "resistance","chance": 1.0,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 1.0,"duration": 300,"amplifier": 0}]}});
Item.setProperties(260, {"use_duration": 32,"max_stack_size": 1,"food": {"nutrition": 6,"saturation_modifier": "normal","is_meat": false,"using_converts_to": "bowl"}});
/*bread*/
Item.setProperties(297, {"use_duration": 32,"food": {"nutrition": 5,"saturation_modifier":"normal","is_meat": false}});
/*porkchop*/
Item.setProperties(319, {"use_duration": 32,"food": {"nutrition": 3,"saturation_modifier": "low","is_meat": true}});
/*cooked*/
Item.setProperties(320, {"use_duration": 32,"food": {"nutrition": 8,"saturation_modifier": "good","is_meat": true}});
/*fish*/
Item.setProperties(349, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier": "poor","is_meat": true}});
/*salmon*/
Item.setProperties(460, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier":"poor","is_meat": true}});
/*clown*/
Item.setProperties(461, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true}});
/*puffer*/
Item.setProperties(462, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true,"effects": [{"name": "poison","duration": 60,"amplifier": 3},{"name":"nausea","duration": 15,"amplifier": 1},{"name": "hunger","duration": 15,"amplifier": 2}]}});
/*cooked*/
Item.setProperties(350, {"use_duration": 32,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":5,"saturation_modifier":"normal","eat_sound":"random.burp","is_meat": true}});
/*cookedsalmon*/
Item.setProperties(463, {"use_duration": 32,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*cookie*/
Item.setProperties(360, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"poor","is_meat": false}});
/*melon*/
Item.setProperties(357, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false}});
/*beef*/
Item.setProperties(363, {"use_duration": 32,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(364, {"use_duration": 32,"food":{"nutrition":8,"saturation_modifier":"good","is_meat": true}});
/*chicken*/
Item.setProperties(365, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true,"effects":[{"name":"hunger","chance":0.3,"duration":30,"amplifier":0}]}});
/*cooked*/
Item.setProperties(366, {"use_duration": 32,"food":{"nutrition":6,"saturation_modifier":"normal","is_meat": true}});
/*mutton*/
Item.setProperties(423, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(424, {"use_duration": 32,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*flesh*/
Item.setProperties(367, {"use_duration": 32,"food":{"nutrition":4,"saturation_modifier":"poor","is_meat": true,"effects":[{"name":"hunger","chance":0.8,"duration":30,"amplifier":0}]}});
/*spider*/
Item.setProperties(375, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"good","is_meat": false,"effects":[{"name":"poison","chance":1.0,"duration":5,"amplifier":0}]}});
/*carrot*/
Item.setProperties(391, {"use_duration": 32,"food":{"nutrition":3,"saturation_modifier":"normal","is_meat": false},"seed":{"crop_result":"carrots","plant_at":"farmland"}});
/*potato*/
Item.setProperties(392, {"use_duration": 32,"food":{"nutrition":1,"saturation_modifier":"low","is_meat": false},"seed":{"crop_result":"potatoes","plant_at":"farmland"}});
/*baked*/
Item.setProperties(393, {"use_duration": 32,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": false}});
/*poisonpotato*/
Item.setProperties(394, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false,"effects":[{"name":"poison","chance":0.6,"duration":5,"amplifier":0}]}});
/*golden*/
Item.setProperties(396, {"use_duration": 32,"food":{"nutrition":6,"saturation_modifier":"supernatural","is_meat": false}});
/*pumpkin*/
Item.setProperties(400, {"use_duration": 32,"food":{"nutrition":8,"saturation_modifier":"low","is_meat": false}});
/*rabbit*/
Item.setProperties(411, {"use_duration": 32,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(412, {"use_duration": 32,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": true}});
/*stew*/
Item.setProperties(413, {"use_duration": 32,"max_stack_size":1,"food":{"nutrition":10,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": true}});
/*beetroot*/
Item.setProperties(459, {"use_duration": 32,"food":{"nutrition":1,"saturation_modifier":"normal","is_meat": false}});
/*soup*/
Item.setProperties(280, {"id":203,"use_duration": 32,"max_stack_size":1,"food":{"nutrition":6,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": false}});
}
}

function tap(){
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {
try {
/*var sm = android.os.ServiceManager.getService("window");
var wm = android.view.IWindowManager.Stub.asInterface(sm);
wm.injectPointerEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(),android.os.SystemClock.uptimeMillis(),android.view.MotionEvent.ACTION_DOWN,0.0, 0.0, 0), true);*/
var process = java.lang.Runtime.getRuntime().exec("su");
var os = new java.io.DataOutputStream(process.getOutputStream());
var cmd = "/system/bin/input tap 0 0\n";
os.writeBytes(cmd);
os.writeBytes("exit\n");
os.flush();
os.close();
} catch(error) {
clientMessage(error+"");
}
}
}));
}

function rptask2() {
ctx.runOnUiThread(new java.lang.Runnable({
run: function () {
new android.os.Handler()
.postDelayed(new java.lang.Runnable({
run: function () {
if (que) {
Server.sendChat(dragon.randChar() + " " + text + " " + dragon.randChar());
Server.getPort();
if (Server.getPort() == 0)clientMessage(dragon.randChar() + " " + text + " " + dragon.randChar());
}
if(autoclick){
var ent = getNearestPlayer(aimrange);
if(ent != null){
var name = Entity.getNameTag(ent);
if(checkslapper == false){
if(dragon.isFriend(dragon.clean(name)) == false)tap()
} else {
if (dragon.slapper(ent)){
if(dragon.isFriend(dragon.clean(name)) == false)tap()
}
}

}
}
eval(rptask2())
}
}), sec / 0.001)
}
}))
}
rptask2()

function rptask() {
ctx.runOnUiThread(new java.lang.Runnable({
run: function () {
new android.os.Handler()
.postDelayed(new java.lang.Runnable({
run: function () {

if (aimbot) {
var ent = getNearestPlayer(aimrange);
if(ent != null){

var name = Entity.getNameTag(ent);
if(lockon)ModPE.showTipMessage(dragon.clean(name)+"\nIs friend: "+dragon.isFriend(dragon.clean(name)));
if(checkslapper == false){
if(dragon.isFriend(dragon.clean(name)) == false)crosshairAimAt(ent);
} else {
if (dragon.slapper(ent)){
if(dragon.isFriend(dragon.clean(name)) == false)crosshairAimAt(ent);
}
}
var x = Entity.getX(getPlayerEnt());
var y = Entity.getY(getPlayerEnt());
var z = Entity.getZ(getPlayerEnt());
var x2 = Entity.getX(ent);
var y2 = Entity.getY(ent);
var z2 = Entity.getZ(ent);
if(getTile(x, y, z) > 0 || getTile(x, y-1, z) > 0){
if(getTile(x, y, z) != 8 || getTile(x, y-1, z) != 8){
if(getTile(x, y, z) != 9 || getTile(x, y-1, z) != 9){
Entity.setPosition(Player.getEntity(), x2, y2+1, z2);
}}}

}
}
if(multiaim){
var ent = getRandPlayer(aimrange);
if(ent != null){

var name = Entity.getNameTag(ent);
if(lockon)ModPE.showTipMessage(dragon.clean(name)+"\nIs friend: "+dragon.isFriend(dragon.clean(name)));
if(checkslapper == false){
if(dragon.isFriend(dragon.clean(name)) == false)crosshairAimAt(ent);
} else {
if (dragon.slapper(ent)){
if(dragon.isFriend(dragon.clean(name)) == false)crosshairAimAt(ent);
}
}
var x = Entity.getX(getPlayerEnt());
var y = Entity.getY(getPlayerEnt());
var z = Entity.getZ(getPlayerEnt());
var x2 = Entity.getX(ent);
var y2 = Entity.getY(ent);
var z2 = Entity.getZ(ent);
if(getTile(x, y, z) > 0 || getTile(x, y-1, z) > 0){
if(getTile(x, y, z) != 8 || getTile(x, y-1, z) != 8){
if(getTile(x, y, z) != 9 || getTile(x, y-1, z) != 9){
Entity.setPosition(Player.getEntity(), x2, y2+1, z2);
}}}

}
}
if(blockhunt){
var ent = getNearestEntity(aimrange+2);
if(ent != null){
if (Entity.getEntityTypeId(ent) == 39 || Entity.getEntityTypeId(ent) == 66)crosshairAimAt(ent);

var x = Entity.getX(getPlayerEnt());
var y = Entity.getY(getPlayerEnt());
var z = Entity.getZ(getPlayerEnt());
var x2 = Entity.getX(ent);
var y2 = Entity.getY(ent);
var z2 = Entity.getZ(ent);
if(getTile(x, y, z) > 0 || getTile(x, y-1, z) > 0){
if(getTile(x, y, z) != 8 || getTile(x, y-1, z) != 8){
if(getTile(x, y, z) != 9 || getTile(x, y-1, z) != 9){
Entity.setPosition(Player.getEntity(), x2, y2+1, z2);
}}}

}
}
if (tpaura) {
var ent = getNearestPlayer(aimrange);
if(ent != null && ent != getPlayerEnt() && Entity.getY(ent) != 0){
var x = Math.floor(Entity.getX(ent));
var y = Entity.getY(ent);
var z = Math.floor(Entity.getZ(ent));
if(checkslapper == false)Entity.setPosition(Player.getEntity(), x, y+1.62, z);
if(checkslapper == true){
if(dragon.slapper(ent))Entity.setPosition(Player.getEntity(), x, y+1.62, z);
}
}
}
if(hitbox){
var ent = getNearestPlayer(aimrange+2);
if(ent != getPlayerEnt()){
Entity.setCollisionSize(ent, shadow1X, shadow1Y);
}
}

eval(rptask())
}
}), 1000 / 70)
}
}))
}
rptask()

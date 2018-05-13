"use strict";

var test_color = "black"; //default
var testcolor = "black"; //dynamic

/* make sure to check if your dir exists & if not; create it. */

/*
func setColor(Int which, String color)
made by ArceusMatt
This is the set color function.
"which" is what widget to change color of... e.g. button.
"color" parameter is used to set to that color.
*/
function setColor(which, color){
var str = color.toLowerCase();
if(which == 0){
test_color = str;
testcolor = str;
}
}

/*
func init()
made by ArceusMatt
This grabs the settings file & saves the values.
*/
function init(){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon", "settings.json");

if(file.exists()){
var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
var data = new java.lang.StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append("\n");
}
var json = JSON.parse(data.toString());
setColor(0, json.color);
} else {
var json = '{"color":"'+testcolor+'"}';
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(json).getBytes());
}
}

/* run the init() process on startup */
init();

/*
func save()
made by ArceusMatt
This saves all the settings, using json it can save more than one thing.
*/
function save(){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon", "settings.json");
var json = '{"color":"'+testcolor+'"}';
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(json).getBytes());
}

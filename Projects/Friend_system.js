"use strict";
var pList = [];
/*
pList[] is used to push all file names in the friends folder.
*/

/* I suggest checking if the dir exists & if it doesn't; create the dir. */

/*
func addFriend(String name)
made by ArceusMatt
This adds a friend file.
*/
function addFriend(name){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon/friends", name);
if(file.exists()){
clientMessage("Already added.");
} else {
var str = "";
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(str).getBytes());
clientMessage("Added.");
}
}

/*
func removeFriend(String name)
made by ArceusMatt
This deletes an existing friend file.
*/
function removeFriend(name){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/dragon/friends", name);
if(file.exists()){
file.delete();
clientMessage("Removed.");
} else {
clientMessage("Does not exist.");
}
}

/*
func isFriend(String name)
made by ArceusMatt
This returns a boolean based off array & file contents.
*/
function isFriend(name){
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
}

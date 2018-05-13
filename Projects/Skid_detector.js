"use strict";
var names = ["basconit"];
var files = [];
var dir;

/* setting dir1 variable as the download folder. */
var dir1 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download");

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
if(files[0] != null){
for(var i = 0; i < files.length; i++){
for(var j = 0; j < names.length; j++){

if(files[i].match(names[j]) || files[i].includes(names[j])){
deleteScript(files[i]);
print("Deleted: "+files[i]);
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
if(dir1.exists() || dir1.isDirectory())dir = dir1;
var list = dir.listFiles();
for(var i = 0; i < list.length; i++){
if (list[i].isFile()) {
if(list[i].getName().endsWith(".js") || list[i].getName().endsWith(".mkg")){
files.push(list[i].getName().toLowerCase());
}}}
checkScripts();
}

/* run the process on startup */
getScripts();

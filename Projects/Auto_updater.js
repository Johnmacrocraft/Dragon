var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
"use strict";

const version = "1.0";

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
By using a get request to a github json file we grab json that contents the new version number & compare it to the version number in the script.
*/
function getUpdate() {
var url = "https://raw.githubusercontent.com/ArceusMatt/Dragon/master/version.json";
var content = ModPE.getFromUrl(url);
var update2 = ModPE.JSON.parse(content);
var newupdate = update2.version;
if (version != newupdate)print("New update "+newupdate);
}
getUpdate();

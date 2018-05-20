"use strict";

/*
func rainbow()
returns a random color.
idea for ModPE by ArceusMatt
*/
function rainbow(){
var sym = ["§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§0", "§a", "§b", "§c", "§d", "§e", "§f"];
return sym[Math.floor(Math.random() * sym.length)];
}

function modTick(){
/*
Our floored or round simple digit coords
*/
var x = Math.floor(getPlayerX());
var y = Math.floor(getPlayerY());
var z = Math.floor(getPlayerZ());
/*
Using a bunch of spaces & \n
is a hacky way of displaying
the message on the right side.
*/
ModPE.showTipMessage(rainbow()+"\n                                                                                 X: "+x+", Y: "+y+", Z: "+z+"\n");
/*
everytime showTip is called with modTick()
it is also calling rainbow()
which returns a random color.
*/
}

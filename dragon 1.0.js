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

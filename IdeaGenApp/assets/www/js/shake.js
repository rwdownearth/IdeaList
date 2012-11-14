console.log("shaker loading");

// The watch id references the current `watchAcceleration`
var watchID = null;

var previousReading = {
    x: null,
    y: null,
    z: null
}

document.addEventListener("deviceready", onDeviceReady, false); 
function onDeviceReady() {
	console.log("watching for shake");
     watchForShake();
}

function watchForShake()
{
	// Update acceleration every 2 seconds
    var options = { frequency: 2000 };

    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

 // Stop watching the acceleration
//
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
	if (true === acceleration)
    {
        return;
    }
    
    var changes = {},
	bound = 1.5;

	if (previousReading.x !== null) {
	    changes.x = Math.abs(previousReading.x - acceleration.x);
	    changes.y = Math.abs(previousReading.y - acceleration.y);
	    changes.z = Math.abs(previousReading.z - acceleration.z);
	}
	if (changes.x > bound || changes.y > bound || changes.z > bound) {
	    // The user has shaken their device. Do something
        getIdeaList();
	}           
    
    console.log('Acceleration X: ' + acceleration.x +
                            ', Acceleration Y: ' + acceleration.y + 
                            ', Acceleration Z: ' + acceleration.z + 
                            ', Timestamp: '      + acceleration.timestamp + 
                            ', Previous X: ' + previousReading.x +
                            ', Previous Y: ' + previousReading.y + 
                            ', Previous Z: ' + previousReading.z + 
                            ', Changes: ' + 
                            changes.x + ', ' + changes.y + ', ' + changes.z + 
                            ", Calc: " + Math.abs(previousReading.z - acceleration.z));
                            
   previousReading = {
	 x: acceleration.x,
	 y: acceleration.y,
	 z: acceleration.z
	}                         
}

// onError: Failed to get the acceleration
//
function onError() {
    console.log("accelerator error");
}
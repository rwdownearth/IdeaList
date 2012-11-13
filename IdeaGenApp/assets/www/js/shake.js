console.log("shaker loaded");

document.addEventListener("deviceready", onDeviceReady, false); 
function onDeviceReady() {
	console.log("watching for shake");
     watchForShake(1.5);
}

function watchForShake(threshold)
{
    var axl = new Accelerometer(); 
    axl.watchAcceleration
    (
        function (Accel)
        {
            if (true === Accel.is_updating)
            {
                return;
            }

            if (Accel.x >= threshold || Accel.x <= (0 - threshold))
            {
                // The user has shaken their device. Do something
                getIdeaList();
            }
            
            console.log("Accel.x:" + Accel.x);
        }
      , function(){}
      , {frequency : 750}
    );
}
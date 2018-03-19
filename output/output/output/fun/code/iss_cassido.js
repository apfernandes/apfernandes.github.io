//
// Set default sizes
//
var totalWidth = 1024.0;
var totalHeight = 744.0;

var verticalTotalMarginPercentage = (256.0+305.0)/1449.0;
var totalVerticalMargins = totalHeight*verticalTotalMarginPercentage;
var leftMargin = totalWidth*0.069;
var topMargin = totalHeight*256.0/1449.0;
var canv = document.createElement('canvas');
var ctx = null;


/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// _initialize_
//
// 
function initialize() {

    checkDevice();

    drawing = new Image();
    drawing.src = 'world_map.png'; 

    drawing.onload = function() {

        startUpdatingLocation();
    };


}


/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// _checkDevice_
//
// 
function checkDevice() {
        
        var w = window;
        d = document;
        e = d.documentElement;
        g = d.getElementsByTagName('body')[0];
        screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
        screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;
        

        // 1024 - 744
        totalWidth = screenWidth;
        totalHeight = screenWidth/(1024.0/744.0);

        verticalTotalMarginPercentage = (256.0+305.0)/1449.0;
        totalVerticalMargins = totalHeight*verticalTotalMarginPercentage;
        leftMargin = totalWidth*0.069;
        topMargin = totalHeight*256.0/1449.0;

};


/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// _startUpdatingLocation_
//
// 
function startUpdatingLocation() {

    canv.setAttribute('width',totalWidth);
    canv.setAttribute('height',totalHeight);
      
    document.body.appendChild(canv);

    ctx = canv.getContext("2d");

    ctx.drawImage(drawing, 0, 0, totalWidth, totalHeight);


    updateLocation();

}   


/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// _updateLocation_
//
// 
function updateLocation() {

    var json_obj = JSON.parse(Get('http://api.open-notify.org/iss-now.json'));

    var timestamp = json_obj.iss_position.timestamp;
    var latitude = parseFloat(json_obj.iss_position.latitude);
    var longitude = parseFloat(json_obj.iss_position.longitude);

    console.log("timestamp: "+json_obj.timestamp);    
    console.log("iss_position: "+latitude);    
    console.log("iss_position: "+longitude);    


    //
    // Calculate canvas coordinates
    //
    var tempLatitude = latitude + 90;
    var tempLongitude = longitude + 180;

    var pX = (totalWidth-2*leftMargin)*tempLongitude/360.0;
    var pY = (totalHeight-totalVerticalMargins)*(180-tempLatitude)/180;
    
    console.log('tempLatitude:' + tempLatitude);
    console.log('tempLongitude:' + tempLongitude);

    console.log('pX:' + pX);
    console.log('pY:' + pY);


    ctx.beginPath();
    var cX = leftMargin+pX;
    var cY = topMargin+pY;
    var radius = 3;
    cX = cX-radius/1.5;
    cY = cY-radius/1.5;

    ctx.arc(cX, cY, radius,0, 2*Math.PI, false);

    ctx.fillStyle ='green';
    ctx.fill();

    setTimeout(updateLocation, 10000); 
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// _Get_
//
// 
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

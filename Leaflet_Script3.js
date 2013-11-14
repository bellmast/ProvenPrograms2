$(document).ready(function () {runProgram()});

hugeArray = []
bigArray = []
myArray = []

dataLen = KFT.features.length
for (i = 0; i < dataLen; i++) {
	var thisNumba = KFT.features[i].properties.Blended
	myArray.push(thisNumba)
	}

myArrayMin = Math.min.apply(null, myArray);
	if (myArrayMin != "0") {
		myArrayMin = Math.log(myArrayMin);
	}
	myArrayMax = Math.max.apply(null, myArray);
	myArrayMax = Math.log(myArrayMax);
	denominatorValue = (myArrayMax - myArrayMin)
	

var myColor = "yellow"
var SL = L.geoJson(sourceLink, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "purple"
var MF = L.geoJson(makerFaire, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "green"
var SW = L.geoJson(startupWeekend, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "white"
var IH = L.geoJson(iceHouse, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "blue"
var FT = L.geoJson(KFT, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.Org)}, pointToLayer: pointToLayer2})
myColor = "aqua"
var IS = L.geoJson(iStart, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "saddlebrown"
var GAN = L.geoJson(globalAN, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "red"
var MAY = L.geoJson(mayorsConf, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.Name)}, pointToLayer: pointToLayer})
myColor = "orange"
var MC = L.geoJson(oMC, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})


var overLays = {
"<div><div style='border: 1px solid black; background-color: yellow; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSource&nbspLink</span></div>"
:
SL,
"<div><div style='border: 1px solid black; background-color: purple; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMaker&nbspFaire</span></div>"
:
MF,
"<div><div style='border: 1px solid black; background-color: green; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspStartup&nbspWeekend</span></div>"
:
SW,
"<div><div style='border: 1px solid black; background-color: white; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspIce&nbspHouse</span></div>"
:
IH,
"<div><div style='border: 1px solid black; background-color: blue; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFastTrac</span></div>"
:
FT,
"<div><div style='border: 1px solid black; background-color: aqua; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspiStart</span></div>"
:
IS,
"<div><div style='border: 1px solid black; background-color: saddlebrown; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGAN</span></div>"
:
GAN,
"<div><div style='border: 1px solid black; background-color: red; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMayors</span></div>"
:
MAY,
"<div><div style='border: 1px solid black; background-color: orange; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'></div><span style='font-size: 12px;float:left;margin-top:-16px;margin-left:20px'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1&nbspMillion&nbspCups</span></div>"
:
MC}


function runProgram() {
	map = L.mapbox.map('map', 'bellmast.map-cvywgjou', {layers: [SL, MF, SW, IH, FT, IS, GAN, MAY, MC]}).setView([39.0997, -94.5783], 5);
	
	L.control.layers(null, overLays, {collapsed: false}).addTo(map);
}




function pointToLayer(feature, latlng) {
	hugeArray.push(latlng)
	return L.circleMarker(latlng, {
					radius: 8,
    					fillColor: myColor,
    					color: "#000",
    					weight: 1,
    					opacity: 1,
    					fillOpacity: 0.8
					})
}

function pointToLayer2(feature, latlng) {
	hugeArray.push(latlng)
	loggedValue = Math.log(feature.properties.Blended)
	numeratorValue = (loggedValue - myArrayMin)
	scalarValue = (7*numeratorValue)/(denominatorValue)+3
	return L.circleMarker(latlng, {
					radius: scalarValue,
    					fillColor: myColor,
    					color: "#000",
    					weight: 1,
    					opacity: 1,
    					fillOpacity: 0.8
					})
}
	

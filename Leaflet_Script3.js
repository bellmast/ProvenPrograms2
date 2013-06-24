$(document).ready(function () {runProgram()});

hugeArray = []

var myColor = "yellow"
var SL = L.geoJson(sourceLink, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "purple"
var MF = L.geoJson(makerFaire, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "green"
var SW = L.geoJson(startupWeekend, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "white"
var IH = L.geoJson(iceHouse, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "blue"
var FT = L.geoJson(fastTrac, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
myColor = "orange"
var MC = L.geoJson(oMC, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})



var overLays = {
"<div class='event-type'><div style='border: 1px solid black; background-color: yellow; opacity: 0.8; border-radius: 50%; width: 13px; height: 13px;margin-right:5px;float:left;'></div><span>Source Link</span></div>"
:
SL,
"<div class='event-type'><div style='border: 1px solid black; background-color: purple; opacity: 0.8; border-radius: 50%; width: 13px; height: 13px;margin-right:5px;float:left;'></div><span>Maker Faire</span></div>"
:
MF,
"<div class='event-type'><div style='border: 1px solid black; background-color: green; opacity: 0.8; border-radius: 50%; width: 13px; height: 13px;margin-right:5px;float:left;'></div><span>Startup Weekend</span></div>"
:
SW,
"<div class='event-type'><div style='border: 1px solid black; background-color: white; opacity: 0.8; border-radius: 50%; width: 13px; height: 13px;margin-right:5px;float:left;'></div><span>Ice House</span></div>"
:
IH,
"<div class='event-type'><div style='border: 1px solid black; background-color: blue; opacity: 0.8; border-radius: 50%; width: 13px; height: 13px;margin-right:5px;float:left;'></div><span>FastTrac</span></div>"
:
FT,
"<div class='event-type'><div style='border: 1px solid black; background-color: orange; opacity: 0.8; border-radius: 50%; width: 13px; height: 13px;margin-right:5px;float:left;'></div><span>1 Million Cups</span></div>"
:
MC}

function runProgram() {
	map = L.map('map', {layers: [SL, MF, SW, IH, FT, MC]}).setView([39.0997, -94.5783], 5);
	L.tileLayer('http://{s}.tile.cloudmade.com/801652580bcf4a2fbccf30c3b731b34c/39904/256/{z}/{x}/{y}.png', {
    		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="http://cloudmade.com">CloudMade</a>',
    		maxZoom: 18
	}).addTo(map);
	L.control.layers(null, overLays).addTo(map);
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
	

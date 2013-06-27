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
var FT = L.geoJson(KFT, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.City)}, pointToLayer: pointToLayer})
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
"<div><div style='border: 1px solid black; background-color: orange; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'></div><span style='font-size: 12px;float:left;margin-top:-16px;margin-left:20px'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1&nbspMillion&nbspCups</span></div>"
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
	

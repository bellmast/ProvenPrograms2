$(document).ready(function () {runProgram()});

hugeArray = [[1]]
bigArray = []
myArray = []
whatwhat = 0
counter = 0
kArray =[]
k2Array = []
hArray = []
newArray = []
latArray = []
lngArray = []
matchArray = []

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
myColor = "silver"
var StG = L.geoJson(SG, {onEachFeature: function(feature, layer) { return layer.bindPopup(feature.properties.city)}, pointToLayer: pointToLayer})
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
"<div><div style='border: 1px solid black; background-color: silver; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'><span style='font-size: 12px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspStartup&nbspGenome</span></div>"
:
StG,
"<div><div style='border: 1px solid black; background-color: orange; opacity: 1; border-radius: 50%; width: 13px; height: 13px;float:left; margin-top:-16px; margin-left: 20px'></div><span style='font-size: 12px;float:left;margin-top:-16px;margin-left:20px'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1&nbspMillion&nbspCups</span></div>"
:
MC}


function runProgram() {
	map = L.mapbox.map('map', 'bellmast.map-cvywgjou', {layers: [SL, MF, SW, IH, FT, IS, GAN, MAY, StG, MC]}).setView([39.0997, -94.5783], 5);
	
	L.control.layers(null, overLays, {collapsed: false}).addTo(map);
}




function pointToLayer(feature, latlng) {
	if (feature.properties.City == 'Kansas City') {
		ourCity = latlng
	}
	indicator = 0
	counter += 1
	newLen = hugeArray.length
	var olatlng = latlng
	newArray.push(latlng)
	for (var h = 0; h < newLen; h++) {
		if (hugeArray[h][0]['lat'] == olatlng['lat'] || hugeArray[h][0]['lng'] == olatlng['lng']) {
			indicator = 1
			hugeArray[h][1] += 1
			if ($.inArray(olatlng['lat'], latArray) != -1 || $.inArray(olatlng['lng'], lngArray) != -1) {
				hugeArray[h][1] += 1
			}
			latArray.push(olatlng['lat'])
			lngArray.push(olatlng['lng'])
			k2Array.push(hugeArray[h][1])

			for (k = 0; k < hugeArray[h][1]; k++) {
				kArray.push(k)
				hArray.push(h)
				if (k%2 == 1) {
					whatwhat+=1
					hugeArray[h][0]['lat'] += .1
					olatlng['lat'] += .1
					
					
				} else if (k%2 == 0) {
					
					hugeArray[h][0]['lng'] += .1
					olatlng['lng'] += .1
				}
			}
		}
	}
	if (indicator == 0) {
		hugeArray[newLen] = [olatlng, 0]
	}
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
	if (feature.properties.City == 'Kansas City') {
		ourCity = latlng
	}
	indicator = 0
	counter += 1
	newLen = hugeArray.length
	var olatlng = latlng
	newArray.push(latlng)
	for (var h = 0; h < newLen; h++) {
		if (hugeArray[h][0]['lat'] == olatlng['lat'] || hugeArray[h][0]['lng'] == olatlng['lng']) {
			indicator = 1
			hugeArray[h][1] += 1
			if ($.inArray(olatlng['lat'], latArray) != -1 || $.inArray(olatlng['lng'], lngArray) != -1) {
				hugeArray[h][1] += 1
			}
			latArray.push(olatlng['lat'])
			lngArray.push(olatlng['lng'])
			k2Array.push(hugeArray[h][1])

			for (k = 0; k < hugeArray[h][1]; k++) {
				kArray.push(k)
				hArray.push(h)
				if (k%2 == 1) {
					whatwhat+=1
					hugeArray[h][0]['lat'] += .1
					olatlng['lat'] += .1
					
					
				} else if (k%2 == 0) {
					
					hugeArray[h][0]['lng'] += .1
					olatlng['lng'] += .1
				}
			}
		}
	}
	if (indicator == 0) {
		hugeArray[newLen] = [olatlng, 0]
	}
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
	

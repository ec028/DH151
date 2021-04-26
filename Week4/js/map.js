// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
// path to csv data
let path = "data/megacity.csv";
let markers = L.featureGroup();

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});

function mapCSV(data){

	// circle options
	let circleOptions = {
		radius: 5,
		weight: 1,
		color: 'white',
		fillColor: 'blue',
		fillOpacity: 1
	}
	
		// loop through each entry
		data.data.forEach(function(item,index){
		
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude], circleOptions)
		.on('mouseover',function(){
				this.bindPopup(`${item.City},${item.Country}`).openPopup()
		})
	
	// add marker to featuregroup
	markers.addLayer(marker)

	// add entry to sidebar
		$(".sidebar").append(`<div class="sidebar-item" onmouseover="map.panTo(${index})">
		<p>${item.City},${item.Country}</p>
		</div>`
		);
	});
	
	// add featuregroup to map
	markers.addTo(map)

	// fit map to markers
	map.fitBounds(markers.getBounds());

}

function panToImage(index){
	// zoom
	map.setZoom(10);
	// pan to the marker
	map.panTo(markers.getLayers()[index]._latlng);
}}

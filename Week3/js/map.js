let books = [
	    {
	    'title':'Trinity College Library in Dublin, Ireland',
	    'lat': 53.34401767044433,
	    'lon': -6.256528282655274,
	    'description': 'This library has the <b>Book of Kells</b>, the most famous of the illuminated manuscripts.',
	    },
        {
        'title':'Bodelian Library in Oxford, United Kingdom',
        'lat': 51.754278867517435, 
		'lon': -1.253999086476985,
		'description': 'This library can access a free copy of all books printed in Great Britain.',
	    },
	    {
		'title':'St. Catherine\'s Monestary in Sinai, Egypt',
		'lat': 28.556183974211535, 
		'lon': 33.97591925137211,
		'description': 'This monestary is actually the world\'s oldest continously operating library.',
	    },
	    {
		'title':'The Library of El Escorial in Madrid, Spain',
		'lat': 40.59707464472327, 
		'lon': -4.1289940437718755,
		'description': 'This library is located in a historical residence for the King of Spain.',
	    },
	    {
		'title':'Strahov Library in Prague, Czech Republic',
		'lat': 50.08653974620061,
		'lon': 14.38862788276644,
		'description': 'The ceilings of this library are adorned with beautiful Baroque-era artwork.',
	    }
	]
	//establishing a set point on the map
	var map = L.map('map').setView([53.34401767044433, -6.256528282655274], 2);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


/// loop through data
books.forEach(function(item){
	// add marker to map
	let marker = L.marker([item.lat,item.lon]).addTo(map)
		.bindPopup(item.title)

	// add data to sidebar
	$('.sidebar').append(`<div class="sidebar-item">${item.title}</div>`)
})


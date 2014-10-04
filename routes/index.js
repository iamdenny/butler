var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Butler 0.1' });
});

router.get('/demo', function(req, res) {
  res.render('demo', { title: 'Butler 0.1' });
});

var butlerUptime = Date.now();
router.get('/data', function(req, res) {
	function getTimetable() {
		var curr = Math.round((new Date()).getTime() / 1000),
			table = [];
		for (var i=curr-(60*60); i<curr; i+=60) {
			table.push(new Date(i*1000).getTime())
		}
		return table;
	}
	function getRandom (M, N) {
		var temp = [];
		for (var i=0; i<60; i++) {
			temp.push(random(M, N));
		}
		return temp;
	}
	function random(M, N) {
		return Math.floor(M + (1+N-M)*Math.random())
	}
	var returnData = {
		timestamp: Date.now(),
		timetable: getTimetable(),
		linuxUptime: os.uptime(),
		butlerUptime: butlerUptime,
		modules: [
			{
				name: '큰방',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			},
			{
				name: '아들방',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			},
			{
				name: '서재',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			},
			{
				name: '거실',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			},
			{
				name: '주방',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			},
			{
				name: '앞배란다',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			},
			{
				name: '뒷배란다',
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60)	
			}
		]
	};
  	res.type('application/json').json(returnData);
});

module.exports = router;

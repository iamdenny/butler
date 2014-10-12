var express = require('express');
var router = express.Router();
var os = require('os');

var butlerUptime = Date.now();


router.get('/data/:period', function(req, res) {
	console.log('period', req.params.period);

	var period = parseInt(req.params.period, 10);

	function getTimetable(period) {
		var curr = Math.round((new Date()).getTime() / 1000),
			table = [];
		for (var i=curr-(period); i<=curr; i+=period / 5) {
			table.push(new Date(i*1000).getTime())
		}
		return table;
	}
	function getRandom (M, N) {
		var temp = [];
		for (var i=0; i<6; i++) {
			temp.push(random(M, N));
		}
		return temp;
	}
	function random(M, N) {
		return Math.floor(M + (1+N-M)*Math.random())
	}
	var returnData = {
		timestamp: Date.now(),
		timetable: getTimetable(period),
		linuxUptime: os.uptime(),
		butlerUptime: butlerUptime,
		modules: {
			'큰방': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'아들방': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'서재': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'거실': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'주방': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'앞 배란다': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'뒷 배란다': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'화장실': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			},
			'안방 화장실': {
				temperature: getRandom(18, 26),
				humidity: getRandom(40, 80),
				light: getRandom(30, 90),
				dust: getRandom(40, 60),
				motion: getRandom(0, 100),
				current: {
					temperature: random(18, 26),
					humidity: random(40, 80),
					light: random(30, 90),
					dust: random(40, 60),
					motion: random(0, 100)
				}
			}
		}
	};
  	res.type('application/json').json(returnData);
});

module.exports = router;
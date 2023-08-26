var geo = { "code": "TR", "lat": 40.9083, "lon": 29.0483 };
var decidedRoomName = "Long Bounce";
var room = HBInit({ roomName: "⭐️ [HB] ⭐️ v3 • LongBounce •", maxPlayers: 20, playerName: "😶‍🌫️", token: "thr1.AAAAAF9nrNJCuBjUB-s2gg.4yURLQNLH7w", public: true, geo });
var SMSet = new Set();
room.setScoreLimit(1);
room.setTimeLimit(0);
room.setTeamsLock(true)
room.setTeamColors(1, 60, 0x000000, [0x8F1A22, 0x8F1A22, 0x8F1A22]);
room.setTeamColors(2, 60, 0x000000, [0x046F8F, 0x046F8F, 0x046F8F]);
var spaceBounce = '{"name":"Longbounce XXL from HaxMaps","width":9600,"height":280,"spawnDistance":250,"bg":{"type":"hockey","width":9600,"height":120,"kickOffRadius":20,"cornerRadius":0},"vertexes":[{"x":-9493,"y":184,"trait":"ballArea"},{"x":-9492,"y":120,"trait":"ballArea","curve":0,"color":"575757","cMask":["wall"]},{"x":-9493,"y":-119,"trait":"ballArea","color":"575757","cMask":["wall"]},{"x":-9492,"y":-182,"trait":"ballArea"},{"x":9500,"y":222,"trait":"ballArea"},{"x":9500,"y":122,"trait":"ballArea","color":"575757","curve":-5,"cMask":["wall"]},{"x":9500,"y":-118,"trait":"ballArea","color":"575757","curve":-5,"cMask":["wall"]},{"x":9500,"y":-218,"trait":"ballArea"},{"x":0,"y":280,"trait":"kickOffBarrier"},{"x":0,"y":20,"trait":"kickOffBarrier","color":"b34e4e"},{"x":0,"y":-20,"trait":"kickOffBarrier","color":"b34e4e"},{"x":0,"y":-280,"trait":"kickOffBarrier"},{"x":-8727,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-8727,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":872,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":872,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-1745,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-1745,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-872,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"trait":"ballArea"},{"x":-872,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"trait":"ballArea"},{"x":-4363,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-4363,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-5236,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-5236,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6109,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6109,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6981,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6981,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-7854,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-7854,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-8727,"y":96,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-8727,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-3490,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-3490,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-2618,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-2618,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":1745,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":1745,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":2618,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":2618,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":3490,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":3490,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":4363,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":4363,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":5236,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":5236,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6109,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6109,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6981,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6981,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":7854,"y":80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":7854,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":8727,"y":100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":8727,"y":120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-7854,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-7854,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6981,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6981,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6109,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-6109,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-5236,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-5236,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-4363,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-4363,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-3490,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-3490,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-2618,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-2618,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-1745,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-1745,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-872,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":-872,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":872,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":872,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":1745,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":1745,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":2618,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":2618,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":3490,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":3490,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":4363,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":4363,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":5236,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":5236,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6109,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6109,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6981,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":6981,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":7854,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":7854,"y":-80,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":8727,"y":-120,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"x":8727,"y":-100,"color":"e9cc6e","cMask":["wall"],"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":7827,"y":141,"curve":0},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":7839,"y":129,"curve":0},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":7839,"y":158,"curve":0},{"cMask":["ball"],"x":6083,"y":140,"cGroup":["ball","red","blue"]},{"cMask":["ball"],"x":6105,"y":139,"curve":28.7683142519,"cGroup":["ball","red","blue"]},{"cMask":["ball"],"x":6084,"y":153,"curve":28.7683142519,"cGroup":["ball","red","blue"]},{"cMask":["ball"],"x":6105,"y":154,"cGroup":["ball","red","blue"]},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":4338,"y":127},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":4357,"y":127},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":4346,"y":140},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":4338,"y":157},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2618,"y":150},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2595,"y":150},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2614,"y":130},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2612,"y":159},{"bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2612,"y":140},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":864,"y":128},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":847,"y":128},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":848,"y":143,"curve":250},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-876,"y":127},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":127},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":847,"y":142,"curve":250},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":847,"y":157,"curve":250},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":127},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":127},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":141,"curve":250},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":127},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":127},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":141,"curve":250},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-892,"y":156,"curve":250},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2624,"y":145},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2647,"y":145},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2630,"y":126},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2630,"y":155},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2630,"y":138},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-4387,"y":132},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-4368,"y":132},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-4379,"y":144},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-4387,"y":161},{"cMask":["ball"],"x":-6133,"y":131,"cGroup":["ball","red","blue"],"bCoef":0},{"cMask":["ball"],"x":-6117,"y":136,"curve":28.7683142519,"cGroup":["ball","red","blue"],"bCoef":0},{"cMask":["ball"],"x":-6133,"y":154,"curve":28.7683142519,"cGroup":["ball","red","blue"],"bCoef":0},{"cMask":["ball"],"x":-6117,"y":154,"cGroup":["ball","red","blue"],"bCoef":0},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-7868,"y":145},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-7862,"y":132},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-7862,"y":161},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":7870,"y":134,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":7870,"y":154,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":6125,"y":134,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":6125,"y":154,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":4378,"y":132,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":4378,"y":152,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2633,"y":135,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":2633,"y":155,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":884,"y":133,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":884,"y":153,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-857,"y":132,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-857,"y":152,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2604,"y":131,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-2604,"y":151,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-4348,"y":137,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-4348,"y":157,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-6093,"y":130,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-6093,"y":150,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-7839,"y":137,"curve":-180,"color":"e9cc6e"},{"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","x":-7839,"y":157,"curve":-180,"color":"e9cc6e"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"],"color":"b34e4e"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"],"color":"5e5eba"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":12,"v1":13,"color":"e9cc6e","x":-2000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":14,"v1":15,"color":"e9cc6e","x":872,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":16,"v1":17,"color":"e9cc6e","x":-400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":18,"v1":19,"color":"e9cc6e","x":-200,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"trait":"ballArea","cMask":["wall"]},{"v0":20,"v1":21,"color":"e9cc6e","x":-1000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":22,"v1":23,"color":"e9cc6e","x":-1200,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":24,"v1":25,"color":"e9cc6e","x":-1400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":26,"v1":27,"color":"e9cc6e","x":-1600,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":28,"v1":29,"color":"e9cc6e","x":-1800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":30,"v1":31,"color":"e9cc6e","x":-2000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":32,"v1":33,"color":"e9cc6e","x":-800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":34,"v1":35,"color":"e9cc6e","x":-600,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":36,"v1":37,"color":"e9cc6e","x":400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":38,"v1":39,"color":"e9cc6e","x":2618,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":40,"v1":41,"color":"e9cc6e","x":800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":42,"v1":43,"color":"e9cc6e","x":1000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":44,"v1":45,"color":"e9cc6e","x":1200,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":46,"v1":47,"color":"e9cc6e","x":1400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":48,"v1":49,"color":"e9cc6e","x":1600,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":50,"v1":51,"color":"e9cc6e","x":7854,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":52,"v1":53,"color":"e9cc6e","x":2000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":54,"v1":55,"color":"e9cc6e","x":-1800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":56,"v1":57,"color":"e9cc6e","x":-1600,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":58,"v1":59,"color":"e9cc6e","x":-1400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":60,"v1":61,"color":"e9cc6e","x":-1200,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":62,"v1":63,"color":"e9cc6e","x":-1000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":64,"v1":65,"color":"e9cc6e","x":-800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":66,"v1":67,"color":"e9cc6e","x":-600,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":68,"v1":69,"color":"e9cc6e","x":-400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":70,"v1":71,"color":"e9cc6e","x":-200,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":72,"v1":73,"color":"e9cc6e","x":872,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":74,"v1":75,"color":"e9cc6e","x":1745,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":76,"v1":77,"color":"e9cc6e","x":2618,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":78,"v1":79,"color":"e9cc6e","x":800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":80,"v1":81,"color":"e9cc6e","x":1000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":82,"v1":83,"color":"e9cc6e","x":1200,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":84,"v1":85,"color":"e9cc6e","x":1400,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":86,"v1":87,"color":"e9cc6e","x":1600,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":88,"v1":89,"color":"e9cc6e","x":1800,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"v0":90,"v1":91,"color":"e9cc6e","x":2000,"cGroup":["red","blue"],"bCoef":0,"curve":0,"vis":true,"cMask":["wall"]},{"curve":0,"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":92,"v1":93},{"curve":0,"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":93,"v1":94},{"color":"e9cc6e","cMask":["ball"],"v0":95,"v1":96,"curve":155.898430233,"cGroup":["ball","red","blue"]},{"color":"e9cc6e","cMask":["ball"],"v0":96,"v1":97,"curve":28.7683142519,"cGroup":["ball","red","blue"]},{"color":"e9cc6e","cMask":["ball"],"v0":97,"v1":98,"cGroup":["ball","red","blue"]},{"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":99,"v1":100},{"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":100,"v1":101},{"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":101,"v1":102,"curve":225.501952686},{"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":103,"v1":104},{"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":104,"v1":105},{"vis":true,"color":"e9cc6e","bCoef":0.1,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":106,"v1":107},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":108,"v1":109},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":109,"v1":110},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":111,"v1":112},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":113,"v1":114,"curve":263.267078673},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":115,"v1":116,"x":-220},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":116,"v1":117,"x":-220},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":118,"v1":119,"x":-220},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":119,"v1":120,"x":-220},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":120,"v1":121,"curve":263.267078673,"x":-220},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":122,"v1":123},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":123,"v1":124},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":125,"v1":126},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":127,"v1":128},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":128,"v1":129},{"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":129,"v1":130,"curve":225.501952686},{"color":"e9cc6e","cMask":["ball"],"v0":131,"v1":132,"curve":155.898430233,"cGroup":["ball","red","blue"],"bCoef":0},{"color":"e9cc6e","cMask":["ball"],"v0":132,"v1":133,"curve":28.7683142519,"cGroup":["ball","red","blue"],"bCoef":0},{"color":"e9cc6e","cMask":["ball"],"v0":133,"v1":134,"cGroup":["ball","red","blue"],"bCoef":0},{"curve":0,"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":135,"v1":136},{"curve":0,"vis":true,"color":"e9cc6e","bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":136,"v1":137},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":138,"v1":139,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":138,"v1":139,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":140,"v1":141,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":140,"v1":141,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":142,"v1":143,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":142,"v1":143,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":144,"v1":145,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":144,"v1":145,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":146,"v1":147,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":146,"v1":147,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":148,"v1":149,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":148,"v1":149,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":150,"v1":151,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":150,"v1":151,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":152,"v1":153,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":152,"v1":153,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":154,"v1":155,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":154,"v1":155,"color":"e9cc6e"},{"curve":-180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":156,"v1":157,"color":"e9cc6e"},{"curve":180,"vis":true,"bCoef":0,"cMask":["ball"],"cGroup":["ball","red","blue"],"trait":"ballArea","v0":156,"v1":157,"color":"e9cc6e"},{"curve":0,"vis":true,"color":"575757","bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":1,"v1":5},{"curve":0,"vis":true,"color":"575757","bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":2,"v1":6},{"v0":1,"v1":2,"trait":"coverup","color":"b34e4e","curve":0,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"b34e4e","curve":2.5,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"b34e4e","curve":5,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"b34e4e","curve":7.5,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"b34e4e","curve":10,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"aa4d4d","curve":15,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"a34b4b","curve":20,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"9a4949","curve":25,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"934b4b","curve":30,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"8a4d4d","curve":61.2994639525,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"834f4f","curve":40,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"7a5151","curve":45,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"735353","curve":50,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"6a5555","curve":55,"cMask":["wall"]},{"v0":1,"v1":2,"trait":"coverup","color":"635757","curve":60,"cMask":["wall"]},{"v0":6,"v1":5,"trait":"coverup","color":"5e5eba","curve":0,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5e5eba","curve":2.5,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5e5eba","curve":5,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5e5eba","curve":7.5,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5e5eba","curve":10,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5d5db6","curve":15,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5c5caa","curve":20,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5b5ba6","curve":25,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5a5a9a","curve":30,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"5a5a8a","curve":35,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"595986","curve":40,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"59597a","curve":45,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"585876","curve":50,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"58586a","curve":55,"cMask":["wall"],"cGroup":["red","blue"]},{"v0":6,"v1":5,"trait":"coverup","color":"575763","curve":60,"cMask":["wall"],"cGroup":["red","blue"]}],"goals":[{"p0":[-9492,181],"p1":[-9492,-179],"team":"red"},{"p0":[9500,182],"p1":[9500,-178],"team":"blue"}],"discs":[{"pos":[-200,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-867,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-1740,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-2618,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-200,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-200,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-3484,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-4358,269],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-5236,269],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-6105,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-6978,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-7853,269],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-8722,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[8730,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[7857,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[6979,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[6113,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[5239,269],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[4361,269],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[3492,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[2619,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[1744,269],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[875,270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-871,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-1744,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-2622,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-204,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-3488,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-4362,-271],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-5240,-271],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-6109,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-6982,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-7857,-271],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[-8726,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[8726,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[7853,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[6975,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[6109,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[5235,-271],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[4357,-271],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[3488,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[2615,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[1740,-271],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0},{"pos":[871,-270],"radius":7,"cMask":["red","blue"],"cGroup":["ball"],"trait":"ballArea","bCoef":0.2,"curve":-180,"color":"000000","invMass":0}],"planes":[{"normal":[0,1],"dist":-120,"trait":"ballArea"},{"normal":[0,-1],"dist":-120,"trait":"ballArea"},{"normal":[0,1],"dist":-280,"bCoef":0.1},{"normal":[0,-1],"dist":-280,"bCoef":0.1},{"normal":[1,0],"dist":-9596,"bCoef":0.1},{"normal":[-1,0],"dist":-9596,"bCoef":0.1}],"traits":{"cornerflag":{"radius":3,"invMass":0,"bCoef":0.5,"color":"FFFF00","cGroup":[""]},"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":1.5,"invMass":0.5,"damping":0.9995,"acceleration":0.0249,"kickingAcceleration":0.0175,"kickingDamping":0.9995,"kickStrength":5.6},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"e9cc6e","cMask":["all"],"cGroup":["ball"]}}'
room.setCustomStadium(spaceBounce);

/**
 * Pre-variables
 */
const activities = {};
var whoTouchedLast; // var representing the last player who touched the ball
var init = "init"; // Smth to initialize smth
init.id = 0 // Faster than getting host's id with the method
var whoTouchedBall = [init, init]; // Array where will be set the 2 last players who touched the ball
var scorers; // Map where will be set all scorers in the current game (undefined if reset or end)
var radiusBall = 10;
var triggerDistance = radiusBall + 15 + 0.1;
var team_name = team => team == 1 ? "blue" : "red"; // return: the name of the team who took a goal
var isOwnGoal = (team, player) => team != player.team ? " (og)" : ""; // return: whether it's an OG
var floor = s => s < 10 ? "0" + s : s; // return: a better display of the second when a goal is scored
var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (" + playerList[1].name + ")" : ""; // return: whether there's an assist
var orderId = [];
var currentPlayerCount = 0;
var redS = 0; // red streak
var blueS = 0; // blue streak
var highestStreak = 0; // highest Streak
var seridekiIsimler = "";
var kazananBlueIsimler = "";
var kazananRedIsimler = "";
var muteCheck = false;
var superAdminPw = "sjdksdjksdsdsffe!ldsds";
/**
 * Variables
 */
var renkkirmizi = "0xFF0F0F";
var renkmavi = "0x338DFF";
var renkacikkirmizi = "0xC76D69";
var renkyesil = "0x11BD22";
var renksari = "0xC2C72C";
var renkbeyaz = "0xF0F0F0";
var records = [];
var isGamePaused = false;
var minPlayerToPlay = 5;
/**
 * Functions
 */

printNamesByAuthAndConn = function (toPlayer, authList, connList){
	var namesSet = new Set();
	authList.forEach(person => {
		namesSet.add(person.userName);
	});
	connList.forEach(person => {
		namesSet.add(person.userName);
	});
	let strArray = [];
	for(str of namesSet){
		strArray.push(str);
	}
	room.sendAnnouncement("Other names: " + strArray.join(" "), toPlayer.id, renksari, "bold", 1);
}

printAfklar = function () {
	var players = room.getPlayerList();
	var afklarList = "";
	records.forEach(person => {
		if (person.isAfk === true) {
			if (players.find(o => o.name === person.userName)) {
				afklarList = afklarList + " " + person.userName;
			} else {
				person.isAfk = false;
			}
		}
	});
	if (afklarList != "") {
		room.sendChat("AFKLAR:" + afklarList);
	} else {
		room.sendChat("Afk Oyuncu Bulunmamaktadır ✅ ");
	}
}
clearAllStats = function () {
	records.forEach(player => {
		player.loseCount = 0;
		player.goalCount = 0;
		player.asistCount = 0;
		player.totalGameCount = 0;
	})
}
afkKick = function () {
	var players = room.getPlayerList();
	for (let id in activities) {
		for (var i = 0; i < players.length; i++) {
			if (room.getScores() != null) {
				if (players[i].team != 0) {
					if (Date.now() - activities[players[i].id] > 300000) {
						room.kickPlayer(players[i].id, "Auto AFK kicker (5 dakikadan fazladır AFK'sın)", false);
					}
				}
			}
		}
	}
}
updateAdmins = function () {
	// Get all players except the host (id = 0 is always the host)
	var players = room.getPlayerList().filter((player) => player.id != 0);
	if (players.length == 0) return; // No players left, do nothing.
	if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
	room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}
saveRecords = function () {
	window.localStorage.setItem("recordsLong", JSON.stringify(records));
}
getRecords = function () {
	records = JSON.parse(localStorage.getItem("recordsLong"));
}
getPersonByName = function (personName) {
	return records.find(person => person.userName === personName);
}
getPersonByAuth = function (auth) {
	var authListOfPlayer = [];
	records.forEach(person => {
			if ( person.lastAuth == auth ){
				authListOfPlayer.push(person);
			}
		}
	);
	return authListOfPlayer;
}
getPersonByConn = function (conn) {
	var connListOfPlayer = [];
	records.forEach(person => {
			if ( person.lastConn == conn ){
				connListOfPlayer.push(person);
			}
		}
	);
	return connListOfPlayer;
}
teamChat = function (msg, playerName, takimid) {
	for (
		var index = 0; index < room.getPlayerList().filter((p) => p.team == takimid).length; index++
	) {
		if (takimid == 1) {
			room.sendAnnouncement(
				`[Takım Mesajı]${playerName}: ${msg}`,
				room.getPlayerList().filter((p) => p.team == takimid)[index].id, renkkirmizi, "bold", 1
			);
		} else if (takimid == 2) {
			room.sendAnnouncement(
				`[Takım Mesajı]${playerName}: ${msg}`,
				room.getPlayerList().filter((p) => p.team == takimid)[index].id, renkmavi, "bold", 1
			);
		} else if (takimid == 0) {
			room.sendAnnouncement(
				`[Spectator Mesajı]${playerName}: ${msg}`,
				room.getPlayerList().filter((p) => p.team == takimid)[index].id, renkbeyaz, "bold", 1
			);
		}
	}
}
directMessage = function (msg, playerName, toid, fromid) {
	room.sendAnnouncement("[Ozel Mesaj]" + playerName + ": " + msg, toid, renksari, "bold", 1);
	room.sendAnnouncement("[Ozel Mesaj]" + playerName + ": " + msg, fromid, renksari, "bold", 1);

}
function getLastTouchTheBall(lastPlayerTouched) {
	var ballPosition = room.getBallPosition();
	var players = room.getPlayerList();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				lastPlayerTouched = players[i];
			}
		}
	}
	return lastPlayerTouched;

}
function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}
function changeTeamColorsOnScore(team) {
	room.setTeamColors(1, 60, 0x000000, [0x8F1A22, 0x8F1A22, 0x8F1A22]);
	room.setTeamColors(2, 60, 0x000000, [0x046F8F, 0x046F8F, 0x046F8F]);
	setTimeout(() => { room.setTeamColors(team, 15, 0xFFEE00, [0xFFEE00, 0xFFEE00, 0xFFEE00]) }, 300);
	setTimeout(() => { room.setTeamColors(team, 30, 0xFFEE00, [0xFFEE00, 0xFFEE00, 0xFFEE00]) }, 600);
	setTimeout(() => { room.setTeamColors(team, 45, 0x09FF00, [0x09FF00, 0x09FF00, 0x09FF00]) }, 900);
	setTimeout(() => { room.setTeamColors(team, 60, 0x09FF00, [0x09FF00, 0x09FF00, 0x09FF00]) }, 1200);
	setTimeout(() => { room.setTeamColors(team, 75, 0x00FFFF, [0x00FFFF, 0x00FFFF, 0x00FFFF]) }, 1500);
	setTimeout(() => { room.setTeamColors(team, 90, 0x00FFFF, [0x00FFFF, 0x00FFFF, 0x00FFFF]) }, 1800);
	setTimeout(() => { room.setTeamColors(team, 105, 0x0008FF, [0x0008FF, 0x0008FF, 0x0008FF]) }, 2100);
	setTimeout(() => { room.setTeamColors(team, 120, 0x0008FF, [0x0008FF, 0x0008FF, 0x0008FF]) }, 2300);
	setTimeout(() => { room.setTeamColors(team, 135, 0xDD00FF, [0xDD00FF, 0xDD00FF, 0xDD00FF]) }, 2500);
	setTimeout(() => { room.setTeamColors(team, 150, 0xDD00FF, [0xDD00FF, 0xDD00FF, 0xDD00FF]) }, 2700);
	setTimeout(() => { room.setTeamColors(team, 165, 0xFF03B3, [0xFF03B3, 0xFF03B3, 0xFF03B3]) }, 2900);
	setTimeout(() => { room.setTeamColors(team, 180, 0xFF03B3, [0xFF03B3, 0xFF03B3, 0xFF03B3]) }, 3100);
	setTimeout(() => { room.setTeamColors(team, 195, 0xFF0303, [0xFF0303, 0xFF0303, 0xFF0303]) }, 3300);
	setTimeout(() => { room.setTeamColors(team, 210, 0xFF0303, [0xFF0303, 0xFF0303, 0xFF0303]) }, 3500);
	setTimeout(() => { room.setTeamColors(team, 225, 0xFFFFFF, [0xFFFFFF, 0xFFFFFF, 0xFFFFFF]) }, 3700);
	setTimeout(() => { room.setTeamColors(1, 60, 0x000000, [0x8F1A22, 0x8F1A22, 0x8F1A22]) }, 3900);
	setTimeout(() => { room.setTeamColors(2, 60, 0x000000, [0x046F8F, 0x046F8F, 0x046F8F]) }, 3900);
}

/**
 * Room.onEvents 
 */

room.onPlayerJoin = function (player) {
	/* Check if records is available */
	if (!records || records.length == 0) {
		console.log("recordsLong gathered from localstorage");
		/* Get records from localstorage */
		getRecords();
	}
	if (!records || records.length == 0) {
		console.log("records gathered from localstorage");
		/* Get records from localstorage */
		records = [];
	}
	updateAdmins();
	orderId.push(player.id);
	/* Search user in records */
	var checkPlayer = getPersonByName(player.name);

	/* If player is found in records */
	if (checkPlayer) {
		/* Set dynamic player id */
		checkPlayer.playerId = player.id;
		checkPlayer.signProven = false;
		/* If player is banned */
		if (checkPlayer.isBanned === true) {
			room.kickPlayer(player.id, " Pişman mısın ? -> Discord Oppo#1474 ", true);
		}
		else {

			/* Check if player is registered to the room */
			if (checkPlayer.isRegistered === true) {

				/* Check if last auth and conn equals with this entrance */
				if (checkPlayer.lastAuth === player.auth || checkPlayer.lastConn === player.conn) {
					checkPlayer.signProven = true;
					if (checkPlayer.isAdmin || checkPlayer.isSuperAdmin) {
						room.setPlayerAdmin(player.id, true);
					}
					room.sendAnnouncement("Odaya hoşgeldin kayıtlı kullanıcı " + checkPlayer.userName + " otomatik girişin yapıldı!", player.id, renksari, "bold", 1);
				}

				/* User is not entering from last conn and auth */
				else {
					room.sendAnnouncement("Odaya hoşgeldin " + checkPlayer.userName + " otomatik giriş yapılamadı, !onayla 'şifre' 30 saniye içinde!", player.id, renksari, "bold", 1);
					/* After 30 sec, check if user signed in or not */
					setTimeout(function () {
						/* Player entered !onayla */
						if (checkPlayer.signed) {
							checkPlayer.lastAuth = player.auth;
							checkPlayer.lastConn = player.conn;
							checkPlayer.signed = false;
							/* Player still did not enter !onayla */
						} else {
							room.kickPlayer(player.id, "30 saniye geçti ve giriş yapmadın, tekrar gel ve !onayla", false);
						}
					}, 30000);
				}
			}

			/* Player is not registered in room */
			else {
				room.sendAnnouncement("Odaya hoşgeldin " + player.name + " !", player.id, renksari, "bold", 1);
				room.sendAnnouncement("Odaya kayıt olmak istiyorsan !kaydol 'şifre' yazman yeterli.", player.id, renksari, "bold", 1)
			}
		}
	}

	/* Player is not found in records, take player into our records */
	else {
		var checkAuth = getPersonByAuth(player.auth);
		var checkConn = getPersonByConn(player.conn);
		var isBannedUser = false;
		var bannedName = "";
		checkAuth.forEach(person =>{
			if(person.isBanned == true){
				isBannedUser = true;
				bannedName = person.userName;
			}
		});
		checkConn.forEach(person =>{
			if(person.isBanned == true){
				isBannedUser = true;
				bannedName = person.userName;
			}
		});
		if (isBannedUser) {
			room.kickPlayer(player.id, bannedName + " Pişman mısın ? -> Discord Oppo#1474 ", true);
			return false;
		}
		isBannedUser = false;
		var newPlayer = {
			userName: player.name,
			isAdmin: false,
			isAfk: false,
			isSuperAdmin: false,
			isBanned: false,
			isMuted: false,
			isRegistered: false,
			lastAuth: player.auth,
			lastConn: player.conn,
			asistCount: 0,
			goalCount: 0,
			totalGameCount: 0,
			loseCount: 0,
			password: "null",
			playerId: player.id,
			signed: false,
			signProven: false,
			team: 0 // 0 for spec, 1 for blue, 2 for red
		};
		records.push(newPlayer);
		saveRecords();
		room.sendAnnouncement("Odaya hoşgeldin " + player.name + " !", player.id, renksari, "bold", 1);
		room.sendAnnouncement("Odaya kayıt olmak istiyorsan !kaydol 'şifre' yazman yeterli.", player.id, renksari, "bold", 1)
	}
}

room.onPlayerChat = function (player, message, byPlayer) {
	/* Search user in records */
	var checkPlayer = getPersonByName(player.name);

	console.log("(" + player.id + ") " + player.name + ": " + message)

	/* !muteall */
	if (message.substr(0, 8) == "!muteall" && (checkPlayer.isAdmin || checkPlayer.isSuperAdmin)) {
		muteCheck = true;
		room.sendAnnouncement(" 🚫 Tüm Oyuncular Susturuldu 🚫 ");
		return false;
	}

	/* !unmuteall */
	if (message.substr(0, 10) == "!unmuteall" && (checkPlayer.isAdmin || checkPlayer.isSuperAdmin)) {
		muteCheck = false;
		room.sendAnnouncement("📣 Tüm Oyuncuların konuşmasına izin verildi! 📣");
		return false;
	}

	/* User tries to register */
	if (message.substr(0, 7).toLowerCase() == "!kaydol") {
		var person = getPersonByName(player.name);
		/* Not registered before */
		if (person.isRegistered === false) {
			person.isRegistered = true;
			person.password = message.substr(8);
			room.sendAnnouncement("Başarıyla kayıt yaptın !", player.id, renkyesil, "bold", 1)
			saveRecords();
		}
		/* Already registered to the system */
		else {
			room.sendAnnouncement("Daha önce zaten kayıt oldun, şifreni hatırlamıyorsan Discord -> Oppo#1474 !", player.id, renksari, "bold", 1);
		}
		return false;
	}

	/* User tries to login */
	if (message.substr(0, 7).toLowerCase() == "!onayla") {
		var person = getPersonByName(player.name);
		if (person.isRegistered === true) {
			if (person.password === message.substr(8)) {
				person.signed = true;
				person.signProven = true;
				room.sendAnnouncement("Başarıyla giriş yaptın !", player.id, renkyesil, "bold", 1)
				if (person.isAdmin || person.isSuperAdmin) {
					room.setPlayerAdmin(player.id, true);
				}
			} else {
				room.sendAnnouncement("Şifren kayıtlarla eşleşmiyor. Tekrar dene !", player.id, renkkirmizi, "bold", 1)
			}
		} else {
			room.sendAnnouncement("Kaydın bulunmuyor, odaya kayıt olmak istiyorsan !kaydol 'şifre' yazman yeterli.", player.id, renkmavi, "bold", 1)
		}
		return false;
	}

	/* Dont let someone without signin use commands */
	if (checkPlayer){
		if(!checkPlayer.signProven && checkPlayer.isRegistered){
			room.sendAnnouncement(" 🚫 Önce !onayla şifre 🚫 ", player.id);
			return false;
		}
	}

	/* !seri */
	if (message == "!seri") {
		if (blueS > redS) {
			room.sendChat(" 🔵 Mavi takım " + blueS + " maçtır kazanıyor ! 🔵");
		}
		else if (redS > blueS) {
			room.sendChat(" 🔴 Kırmızı takım " + redS + " maçtır kazanıyor ! 🔴");
		} else {
			room.sendChat("🔵🔴 Herhangi bir seri bulunmamaktadır. 🔴🔵");
		}

	}

	/* Is user muted */
	if (checkPlayer.isMuted === true) {
		room.sendAnnouncement("Mutelisin !", player.id, renkacikkirmizi, "bold", 1);
		return false;
	}

	/* check muteall active or not */
	if (muteCheck == true && checkPlayer.isAdmin == false && checkPlayer.isSuperAdmin == false) {
		return false;
	}

	/* !komutlar */
	if (message == "!komutlar") {
		room.sendAnnouncement("!t, !dm, !changePw <pw>, !p, !oto, !afk, !afklar, !dc, !rekorSeri, !stats <>, !clearStats <pw>, !genelPuanSıralaması, !golSıralaması, !asistSıralaması, !adminKomutlar, !superAdminKomutlar");
		return false;
	}

	/* !adminKomutlar */
	if (message == "!adminKomutlar") {
		room.sendAnnouncement("!admin, !res, !mute <>, !unmute <>, !printOtherNames <playerName>");
		return false;
	}

	/* !superAdminKomutlar */
	if (message == "!superAdminKomutlar") {
		room.sendAnnouncement("!permaBan <>, !remPermaBan <>, !removeAdmin <>, !setAdmin <>, !setSuperAdmin <>");
		return false;
	}

	/* Team chat */
	if (message.substr(0, 3) == "!t ") {
		msg = message.substr(3);
		teamChat(msg, player.name, player.team);
		return false;
	}

	/* Clear bans */
	if (player.admin == true && message.toLowerCase() == "!clear" && checkPlayer.isAdmin) {
		room.clearBans();
		room.sendChat("Tüm banları kaldırdım dostum !");
		return false;
	}

	/* Directive Message */
	if (message.substr(0, 4) == "!dm ") {

		if (checkPlayer.isRegistered === false) {
			room.sendAnnouncement("DM atabilmek için kayıtlı olmalısın !kaydol 'şifre'", player.id, renkacikkirmizi, "bold", 1);
			return false;
		}
		/* User can dm */
		else {
			remmsg = message.substr(4);
			var index = remmsg.indexOf(' ');
			if (index == -1) {
				return false;
			}
			msg = remmsg.substr(index + 1);
			toname = remmsg.substr(0, index);
			toid = -1;
			var players = room.getPlayerList();
			for (var i = 0; i < players.length; i++) {
				if (players[i].name.toLowerCase().includes(toname.toLowerCase())) {
					toid = players[i].id;
				}
			}
			if (toid == -1) {
				room.sendAnnouncement("DM atmak istediğin kullanıcı bulunamadı, doğru yazdığından emin ol.", player.id, renksari, "bold", 1);
				return false;
			} else {
				directMessage(msg, player.name, toid, player.id);
				return false;
			}
		}
	}

	/* Change someone's password Ex: !changePw Oppo 123 -> Oppo's password changed to 123*/
	if (message.substr(0, 9) == "!changePw") {
		if (checkPlayer.isSuperAdmin === true) {
			remmsg = message.substr(10);
			var index = remmsg.indexOf(' ');
			if (index == -1) {
				room.sendAnnouncement("Şifre değişikliği yapabilmen için formata uymalısın. Örnek: !changePw Oppo 123", player.id, renkacikkirmizi, "bold", 1);
				return false;
			}
			newPw = remmsg.substr(index + 1);
			nameOfPlayerToChangePw = remmsg.substr(0, index);
			var player = getPersonByName(nameOfPlayerToChangePw);
			if (player) {
				player.password = newPw;
				room.sendAnnouncement(nameOfPlayerToChangePw + " isimli oyuncunun şifresi değiştirildi!", player.id, renkacikkirmizi, "bold", 1);
				return false;
			} else {
				room.sendAnnouncement("Bu isimde bir oyuncu bulunamadı aranan isim -> " + nameOfPlayerToChangePw, player.id, renkacikkirmizi, "bold", 1);
				return false;
			}
		} else {
			room.sendAnnouncement("Şifre değişikliği yapabilmen için Super Admin olmalısın.", player.id, renkacikkirmizi, "bold", 1);
			return false;
		}
	}

	/* Print player other names !printOtherNames <playerName> */
	if(checkPlayer.isSuperAdmin == true && message.substr(0,16).toLowerCase() == "!printothernames"){
		var person = getPersonByName(message.substr(17));
		if(person){
			var authList = getPersonByAuth(person.lastAuth);
			var connList = getPersonByConn(person.lastConn);
			printNamesByAuthAndConn( player ,authList, connList);
			return false;
		}else{
			room.sendAnnouncement("O isimde biri bulamadım :" + message.substr(17), player.id, renksari, "bold", 1);
			return false;
		}
	}

	/* Restart match */
	if (player.admin && message == "!res") {
		room.stopGame();
		room.startGame();
		return false;
	}

	/* remPermaBan someone */
	if (message.substr(0, 12).toLowerCase() == "!rempermaban") {
		if (checkPlayer.isSuperAdmin === true) {
			var bannedPlayer = getPersonByName(message.substr(13));
			if (bannedPlayer) {
				var checkAuth = getPersonByAuth(bannedPlayer.lastAuth);
				var checkConn = getPersonByConn(bannedPlayer.lastConn);
				checkAuth.forEach(person =>{
					if(person.isBanned == true){
						person.isBanned = false;
					}
				});
				checkConn.forEach(person =>{
					if(person.isBanned == true){
						person.isBanned = false;
					}
				});
				bannedPlayer.isBanned = false;
				saveRecords();
				room.sendAnnouncement("" + message.substr(13) + " isimli oyuncunun perma banı kaldırıldı.", player.id, renkacikkirmizi, "bold", 1);
				return false;
			} else {
				room.sendAnnouncement("O isimde birisi bulunamadı, aranan isim -> " + message.substr(13) + "", player.id, renkacikkirmizi, "bold", 1);
				return false;
			}
		} else {
			room.sendAnnouncement("Birisinin permaBanını kaldırabilmen için Super Admin olmalısın !", player.id, renkacikkirmizi, "bold", 1);
			return false;
		}
	}

	/* permaBan someone */
	if (message.substr(0, 9).toLowerCase() == "!permaban") {
		if (checkPlayer.isSuperAdmin === true) {
			var bannedPlayer = getPersonByName(message.substr(10));
			if (bannedPlayer) {
				bannedPlayer.isBanned = true;
				saveRecords();
				room.sendAnnouncement("" + message.substr(10) + " isimli oyuncu perma banlandı.", player.id, renkacikkirmizi, "bold", 1);
				return false;
			} else {
				room.sendAnnouncement("O isimde birisi bulunamadı, aranan isim -> " + message.substr(10) + "", player.id, renkacikkirmizi, "bold", 1);
				return false;
			}
		} else {
			room.sendAnnouncement("Birisine permaBan atabilmen için Super Admin olmalısın !", player.id, renkacikkirmizi, "bold", 1);
			return false;
		}
	}

	/* Mute someone */
	if (message.substr(0, 5).toLowerCase() == "!mute") {
		if (checkPlayer.isAdmin === true) {
			var mutedPlayer = getPersonByName(message.substr(6));
			if (mutedPlayer) {
				if (mutedPlayer.isAdmin || mutedPlayer.isSuperAdmin) {
					room.sendAnnouncement("Admin birisini muteleyemezsin", player.id, renkacikkirmizi, "bold", 1);
				} else {
					mutedPlayer.isMuted = true;
					room.sendAnnouncement(mutedPlayer.userName + " isimli oyuncu " + checkPlayer.userName + " tarafından susturuldu !");
				}
				return false;
			} else {
				room.sendAnnouncement("O isimde birisi bulunamadı, aranan isim -> " + message.substr(6) + "", player.id, renkacikkirmizi, "bold", 1);
				return false;
			}
		} else {
			room.sendAnnouncement("Birisine mute atabilmen için admin olmalısın !", player.id, renkacikkirmizi, "bold", 1);
			return false;
		}
	}

	/* Unmute someone */
	if (message.substr(0, 7).toLowerCase() == "!unmute") {
		if (checkPlayer.isAdmin || checkPlayer.isSuperAdmin) {
			var mutedPlayer = getPersonByName(message.substr(8));
			if (mutedPlayer) {
				if (mutedPlayer.isMuted) {
					mutedPlayer.isMuted = false;
					room.sendAnnouncement(mutedPlayer.userName + " isimli oyuncunun mutesi " + checkPlayer.userName + " tarafından kaldırıldı !");
				} else {
					room.sendAnnouncement("Bu oyuncunun zaten mutesi bulunmuyor!", player.id, renkyesil, "bold", 1);
				}
				return false;
			} else {
				room.sendAnnouncement(message.substr(8) + " isminde bir oyuncu bulunamadı", player.id, renksari, "bold", 1);
				return false;
			}
		}
	}

	/* Pause game */
	if (message == "!p" && isGamePaused && player.team != 0) {
		room.sendChat(player.name + " Maçı devam ettiriyor. ✅");
		room.pauseGame(false);
		isGamePaused = false;
		return false;
	}

	/* Unpause game */
	if (message == "!p" && !isGamePaused && player.team != 0) {
		room.sendChat(player.name + " Maçı Durduruyor. ❌");
		room.pauseGame(true);
		isGamePaused = true;
		return false;
	}

	/* !bb */
	if (message == '!bb') {
		if (player.team == 0) {
			room.kickPlayer(player.id, " Bay bay yine bekleriz 🤓 ", false);
			return false;
		}
		else {
			room.sendChat(player.name + ' ⛔️Maç içinde veya bir takımdayken odayı terkedemezsin.⛔️')
			return false;
		}
	}

	/* !oto */
	if (message == '!oto') {
		if (player.team != 0) {
			var teamNo = player.team;
			var takimOyuncuSayisi = 0;
			var specOyuncuSayisi = 0;
			var players = room.getPlayerList();
			players.forEach(function (entry) {
				if (entry.team == 0) {
					specOyuncuSayisi++;
				}
				if (entry.team == player.team) {
					takimOyuncuSayisi++;
				}
			});
			//room.sendChat("Specteki oyuncu sayisi " + specOyuncuSayisi );
			if (specOyuncuSayisi > 1 && takimOyuncuSayisi < 3) {
				// V4 TEYKEN bu 4 sayısı 5 olcak
				var botSirasi = 0;
				var counter = 0;
				var random = Math.floor(Math.random() * specOyuncuSayisi);
				players.forEach(function (entry) {
					if (entry.id == 0) {
						botSirasi = counter;
					}
					counter++;
				});
				while (random == botSirasi) {
					random = Math.floor(Math.random() * specOyuncuSayisi);
				}
				room.sendChat("Random verilen sıra sayısı: " + random);
				counter = 0;
				players.forEach(function (entry) {
					if (entry.team == 0) {
						if (counter == random) {
							if (entry.id != 0) {
								room.setPlayerTeam(entry.id, teamNo);
								//room.sendChat(entry.name +" , " + entry.id);
							}
						}
						counter++;
					}
				});
			} else {
				if (takimOyuncuSayisi > 2) {
					room.sendChat("Takım dolu !");
					return;
				} else {
					room.sendChat("Specte kimse yok !");
					return;
				}
			}
		}
	}

	
	/* !dc */
	if (message == '!dc') {
		room.sendChat('HaxBounce discord sunucumuzun adresi: https://discord.gg/hR7rtw76q5')
	}


	/* !afk */
	if (message == '!afk') {
		if (checkPlayer.isAfk === false) {
			if (player.team == 0) {
				checkPlayer.isAfk = true;
				room.sendChat(player.name + ' artık afk ve oynayamaz! 5 dakikadan fazla inaktif olması durumunda otomatik odadan atılır ⛔️');
			} else {
				room.sendChat(player.name + ' ⛔️hali hazırda bir takımdayken veya  maç sırasında afk yapamazsın.⛔️')
			}
		} else {
			checkPlayer.isAfk = false;
			room.sendChat(player.name + " oyuna hazır ✅ ");
		}
	}

	/* flood check */
	if (message.length > 132) {
		if(player.id != 0){
			room.kickPlayer(player.id, " Bay bay Floodcu dostum..", false);
			return false;
		}
	}

	/* !afklar */
	if (message == "!afklar") {
		printAfklar();
	}

	/* !rekorSeri */
	if (message == "!rekorSeri") {
		rekorSeri = JSON.parse(localStorage.getItem("rekorSeriLong"));
		seridekiIsimler = JSON.parse(localStorage.getItem("seridekiIsimlerLong"));
		room.sendChat(rekorSeri + " maçlık rekor bulunmaktadır.( " + seridekiIsimler + ")");
	}

	/* !admin -> sets player admin */
	if (message == "!admin") {
		if (checkPlayer.isAdmin || checkPlayer.isSuperAdmin) {
			room.setPlayerAdmin(player.id, true);
		} else {
			room.sendAnnouncement("Adminlik yetkin bulunmuyor", player.id, renkkirmizi, "bold", 1);
		}
		return false;
	}

	/* make user superadmin */
	if (message == superAdminPw) {
		room.sendAnnouncement("Süper Admin olarak atandın", player.id, renkyesil, "bold", 1);
		checkPlayer.isSuperAdmin = true;
		checkPlayer.isAdmin = true;
		saveRecords();
		return false;
	}

	/* make someone admin */
	if (message.substr(0, 9).toLowerCase() == "!setadmin") {
		if (checkPlayer.isSuperAdmin) {
			var toAdminPlayer = getPersonByName(message.substr(10));
			if (toAdminPlayer) {
				toAdminPlayer.isAdmin = true;
				room.sendAnnouncement(toAdminPlayer.userName + " isimli oyuncu " + checkPlayer.userName + " tarafından admin olarak atandı !");
				saveRecords();
			}
			else {
				room.sendAnnouncement(message.substr(10) + " isminde bir oyuncu bulunamadı", player.id, renksari, "bold", 1);
			}
		}
		else {
			room.sendAnnouncement("Süper adminlik yetkin bulunmuyor", player.id, renkkirmizi, "bold", 1);
		}
		return false;
	}

	/* make someone superadmin */
	if (message.substr(0, 14).toLowerCase() == "!setsuperadmin") {
		if (checkPlayer.isSuperAdmin) {
			var toAdminPlayer = getPersonByName(message.substr(15));
			if (toAdminPlayer) {
				toAdminPlayer.isAdmin = true;
				toAdminPlayer.isSuperAdmin = true;
				room.sendAnnouncement(toAdminPlayer.userName + " isimli oyuncu " + checkPlayer.userName + " tarafından Süper Admin olarak atandı !");
				saveRecords();
			}
			else {
				room.sendAnnouncement(message.substr(15) + " isminde bir oyuncu bulunamadı", player.id, renksari, "bold", 1);
			}
		}
		else {
			room.sendAnnouncement("Süper adminlik yetkin bulunmuyor", player.id, renkkirmizi, "bold", 1);
		}
		return false;
	}

	/* take admin rights from someone */
	if (message.substr(0, 12).toLowerCase() == "!removeadmin") {
		if (checkPlayer.isSuperAdmin) {
			var toAdminPlayer = getPersonByName(message.substr(13));
			if (toAdminPlayer) {
				toAdminPlayer.isAdmin = false;
				toAdminPlayer.isSuperAdmin = false;
				room.sendAnnouncement(toAdminPlayer.userName + " isimli oyuncunun adminlik yetkileri " + checkPlayer.userName + " tarafından alındı !");
				saveRecords();
			}
			else {
				room.sendAnnouncement(message.substr(13) + " isminde bir oyuncu bulunamadı", player.id, renksari, "bold", 1);
			}
		}
		else {
			room.sendAnnouncement("Süper adminlik yetkin bulunmuyor", player.id, renkkirmizi, "bold", 1);
		}
		return false;
	}

	/* stats of someone, EX: !stats Oppo */
	if (message.substr(0, 6) == "!stats") {

		var nameOfPlayerStats = getPersonByName(message.substr(7));
		if (!nameOfPlayerStats) {
			room.sendAnnouncement("Bu isimde bir oyuncu bulunamadı", player.id, renksari, "normal", 1);
			return false;
		}
		/* If user has less than 50 matches, dont count user in order list of bests */
		if (nameOfPlayerStats.totalGameCount < 50) {
			room.sendAnnouncement("[ Sırasız:" + nameOfPlayerStats.userName + " ]🔎 Oynanan oyun sayısı : " + nameOfPlayerStats.totalGameCount + " 🔎 Galibiyet yüzdesi : %" + Math.floor(((nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) / nameOfPlayerStats.totalGameCount) * 100) + " 🔎 Galibiyet sayısı : " + (nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) + " 🔎 Gol sayısı: " + nameOfPlayerStats.goalCount + " (" + ((nameOfPlayerStats.goalCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")" + " 🔎 Asist sayısı : " + nameOfPlayerStats.asistCount + " " + "(" + ((nameOfPlayerStats.asistCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")", null, renksari, "normal", 1);
			return false;
		}
		var oyuncuWinRate = Math.floor(((nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) / nameOfPlayerStats.totalGameCount) * 100);
		var counter = 1;
		records.forEach(person => {
			if (Math.floor(((person.totalGameCount - person.loseCount) / person.totalGameCount) * 100) > oyuncuWinRate && person.totalGameCount > 50) {
				counter++;
			}
		});
		if (oyuncuWinRate > 30 && oyuncuWinRate < 90) {
			var oyuncudegeri = ((oyuncuWinRate - 30) * 1.633333334) + 2;
			room.sendAnnouncement("[ " + counter + ":" + nameOfPlayerStats.userName + " ]🔎 Oynanan oyun sayısı : " + nameOfPlayerStats.totalGameCount + " 🔎 Galibiyet yüzdesi : %" + Math.floor(((nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) / nameOfPlayerStats.totalGameCount) * 100) + " 🔎 Galibiyet sayısı : " + (nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) + " 🔎 Gol sayısı: " + nameOfPlayerStats.goalCount + " (" + ((nameOfPlayerStats.goalCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")" + " 🔎 Asist sayısı : " + nameOfPlayerStats.asistCount + " " + "(" + ((nameOfPlayerStats.asistCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")", null, renksari, "normal", 1);
			if (oyuncuWinRate < 35) {
				room.sendAnnouncement("Klasman: [ 🎈 Çömez 🎈 ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 40) {
				room.sendAnnouncement("Klasman: [ ⚽ Çaylak ⚽ ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 45) {
				room.sendAnnouncement("Klasman: [ 🥉 Acemi 🥉 ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 55) {
				room.sendAnnouncement("Klasman: [ 🥈 Ortalama 🥈 ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 60) {
				room.sendAnnouncement("Klasman: [ 🏅 Tecrübeli 🏅 ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 65) {
				room.sendAnnouncement("Klasman: [ ⭐ Usta ⭐ ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 70) {
				room.sendAnnouncement("Klasman: [ ⭐⭐ Üst Düzey ⭐⭐ ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else if (oyuncuWinRate < 75) {
				room.sendAnnouncement("Klasman: [ ⭐⭐⭐ Profesyonel ⭐⭐⭐ ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			} else {
				room.sendAnnouncement("Klasman: [ 💎💎💎 EFSANEVİ 💎💎💎 ] Oyuncu Değeri: " + Math.floor(oyuncudegeri) + ".000.000 💰", null, renksari, "normal", 1);
			}
			return false;
		} else if (oyuncuWinRate >= 90) {
			oyuncudegeri = 100;
			room.sendAnnouncement("[ " + counter + ":" + nameOfPlayerStats + " ]🔎 Oynanan oyun sayısı : " + nameOfPlayerStats.totalGameCount + " 🔎 Galibiyet yüzdesi : %" + Math.floor(((nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) / nameOfPlayerStats.totalGameCount) * 100) + " 🔎 Galibiyet sayısı : " + (nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) + " 🔎 Gol sayısı: " + nameOfPlayerStats.goalCount + " (" + ((nameOfPlayerStats.goalCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")" + " 🔎 Asist sayısı : " + nameOfPlayerStats.asistCount + " " + "(" + ((nameOfPlayerStats.asistCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")", null, renksari, "normal", 1);
			room.sendAnnouncement("Klasman: [ 💎💎💎 EFSANEVİ 💎💎💎 ] Oyuncu Değeri: 100.000.000 💰", null, renksari, "normal", 1);
			return false;
		} else {
			oyuncudegeri = 2;
			room.sendAnnouncement("[ " + counter + ":" + nameOfPlayerStats + " ]🔎 Oynanan oyun sayısı : " + nameOfPlayerStats.totalGameCount + " 🔎 Galibiyet yüzdesi : %" + Math.floor(((nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) / nameOfPlayerStats.totalGameCount) * 100) + " 🔎 Galibiyet sayısı : " + (nameOfPlayerStats.totalGameCount - nameOfPlayerStats.loseCount) + " 🔎 Gol sayısı: " + nameOfPlayerStats.goalCount + " (" + ((nameOfPlayerStats.goalCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")" + " 🔎 Asist sayısı : " + nameOfPlayerStats.asistCount + " " + "(" + ((nameOfPlayerStats.asistCount / nameOfPlayerStats.totalGameCount)).toFixed(2) + ")", null, renksari, "normal", 1);
			room.sendAnnouncement("Klasman: [ 🎈Çömez 🎈] Oyuncu Değeri: 2.000.000 💰", null, renksari, "normal", 1);
			return false;
		}
	}

	/* clearStats password */
	if (message.substr(0, 11) == "!clearStats") {

		var controlpw = message.substr(12);
		if (checkPlayer.password == controlpw) {
			if (checkPlayer.isRegistered) {
				checkPlayer.totalGameCount = 0;
				checkPlayer.asistCount = 0;
				checkPlayer.goalCount = 0;
				checkPlayer.loseCount = 0;
				room.sendAnnouncement(" İstatistikleriniz sıfırlanmıştır! " + player.name, player.id, renksari, "bold", 1);
			} else {
				room.sendAnnouncement(" Önce kayıt olmalısın ! " + player.name, player.id, renksari, "bold", 1);
			}
			return false;
		} else {
			room.sendAnnouncement(" Şifreniz, verdiğiniz şifreyle uyuşmamaktadır " + player.name, player.id, renkkirmizi, "bold", 1);
			return false;
		}
	}

	/* !genelPuanSıralaması*/
	if (message == "!genelPuanSıralaması") {
		var genelPuan = [];
		var genelPuanIsimleri = [];
		var i = 0;
		records.forEach(person => {
			genelPuan[i] = (person.goalCount * 2) + person.asistCount + ((person.totalGameCount - person.loseCount) * 3);
			genelPuanIsimleri[i] = person.userName;
			i++;
		});
		console.log(genelPuan);
		console.log(genelPuanIsimleri);
		var index1 = -1;
		var index2 = -1;
		var index3 = -1;
		var index4 = -1;
		var index5 = -1;
		var index6 = -1;
		var index7 = -1;
		var index8 = -1;


		var index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index1) {
				index1 = genelPuan[i];
				index10 = i;
			}

		}
		var name1 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;



		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index2) {
				index2 = genelPuan[i];
				index10 = i;
			}
		}

		var name2 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;


		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index3) {
				index3 = genelPuan[i];
				index10 = i;
			}
		}

		var name3 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;



		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index4) {
				index4 = genelPuan[i];
				index10 = i;
			}
		}

		var name4 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index5) {
				index5 = genelPuan[i];
				index10 = i;
			}
		}

		var name5 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index6) {
				index6 = genelPuan[i];
				index10 = i;
			}
		}

		var name6 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index7) {
				index7 = genelPuan[i];
				index10 = i;
			}
		}

		var name7 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index8) {
				index8 = genelPuan[i];
				index10 = i;
			}
		}

		var name8 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;

		var genelPuan = genelPuan;
		room.sendChat(name1 + " " + index1 + " 🥇 " + name2 + " " + index2 + " 🥈 " + name3 + " " + index3 + " 🥉 " + name4 + " " + index4 + " 🏅 " + name5 + " " + index5 + " 🏅 " + name6 + " " + index6 + " 🏅 ");
	}

	/* !asistSıralaması*/
	if (message == "!asistSıralaması") {
		var genelPuan = [];
		var genelPuanIsimleri = [];
		var i = 0;
		records.forEach(person => {
			genelPuan[i] = person.asistCount;
			genelPuanIsimleri[i] = person.userName;
			i++;
		});

		var index1 = -1;
		var index2 = -1;
		var index3 = -1;
		var index4 = -1;
		var index5 = -1;
		var index6 = -1;
		var index7 = -1;
		var index8 = -1;


		var index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index1) {
				index1 = genelPuan[i];
				index10 = i;
			}

		}
		var name1 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;



		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index2) {
				index2 = genelPuan[i];
				index10 = i;
			}
		}

		var name2 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;


		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index3) {
				index3 = genelPuan[i];
				index10 = i;
			}
		}

		var name3 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;



		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index4) {
				index4 = genelPuan[i];
				index10 = i;
			}
		}

		var name4 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index5) {
				index5 = genelPuan[i];
				index10 = i;
			}
		}

		var name5 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index6) {
				index6 = genelPuan[i];
				index10 = i;
			}
		}

		var name6 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index7) {
				index7 = genelPuan[i];
				index10 = i;
			}
		}

		var name7 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index8) {
				index8 = genelPuan[i];
				index10 = i;
			}
		}

		var name8 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;

		var genelPuan = genelPuan;
		room.sendChat(name1 + " " + index1 + " 🥇 " + name2 + " " + index2 + " 🥈 " + name3 + " " + index3 + " 🥉 " + name4 + " " + index4 + " 🏅 " + name5 + " " + index5 + " 🏅 " + name6 + " " + index6 + " 🏅 ");
	}

	/* !golSıralaması*/
	if (message == "!golSıralaması") {
		var genelPuan = [];
		var genelPuanIsimleri = [];

		var i = 0;
		records.forEach(person => {
			genelPuan[i] = person.goalCount;
			genelPuanIsimleri[i] = person.userName;
			i++;
		});

		var index1 = -1;
		var index2 = -1;
		var index3 = -1;
		var index4 = -1;
		var index5 = -1;
		var index6 = -1;
		var index7 = -1;
		var index8 = -1;


		var index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index1) {
				index1 = genelPuan[i];
				index10 = i;
			}

		}
		var name1 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;



		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index2) {
				index2 = genelPuan[i];
				index10 = i;
			}
		}

		var name2 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;


		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index3) {
				index3 = genelPuan[i];
				index10 = i;
			}
		}

		var name3 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;



		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index4) {
				index4 = genelPuan[i];
				index10 = i;
			}
		}

		var name4 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index5) {
				index5 = genelPuan[i];
				index10 = i;
			}
		}

		var name5 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index6) {
				index6 = genelPuan[i];
				index10 = i;
			}
		}

		var name6 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index7) {
				index7 = genelPuan[i];
				index10 = i;
			}
		}

		var name7 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;
		for (var i = 0; i < genelPuan.length; i++) {
			if (genelPuan[i] > index8) {
				index8 = genelPuan[i];
				index10 = i;
			}
		}

		var name8 = genelPuanIsimleri[index10];
		genelPuan[index10] = 0;
		index10 = -1;

		var genelPuan = genelPuan;
		room.sendChat(name1 + " " + index1 + " 🥇 " + name2 + " " + index2 + " 🥈 " + name3 + " " + index3 + " 🥉 " + name4 + " " + index4 + " 🏅 " + name5 + " " + index5 + " 🏅 " + name6 + " " + index6 + " 🏅 ");
	}
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
	if (changedPlayer.id == 0) {
		//room.sendChat(changedPlayer.name + " AFK!!! 😴😴😴");
		room.setPlayerTeam(changedPlayer.id, 0)
		return false;
	} else {
		/* Search user in records */
		var checkPlayer = getPersonByName(changedPlayer.name);
		if (checkPlayer.isAfk || changedPlayer.id == 0) {
			room.setPlayerTeam(changedPlayer.id, 0)
			if (byPlayer.id != 0) {
				room.sendChat(changedPlayer.name + " AFK!!! 😴😴😴");
			}
			room.reorderPlayers(orderId, false);
			return;
		}
		checkPlayer.team = changedPlayer.team;
		if (checkPlayer.isAfk == false) {
			for (var i = 0; i < orderId.length; i++) {
				if (orderId[i] === changedPlayer.id) {
					orderId.splice(i, 1);
				}
			}
			orderId.push(changedPlayer.id);
			var players = room.getPlayerList();
			currentPlayerCount = 0;
			for (var i = 0; i < players.length; i++) {
				if (players[i].team != 0) {
					currentPlayerCount = currentPlayerCount + 1;
				}
			}
		}
	}
}

room.onGameTick = function () {
	// A situation can happen where a player touch the ball very slightly by directly kicking
	// and it can lead to an error

	whoTouchedLast = getLastTouchTheBall(whoTouchedLast);
	if (whoTouchedLast != undefined && whoTouchedLast.id != whoTouchedBall[0].id) {
		whoTouchedBall[1] = whoTouchedBall[0];
		whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
	}

}

room.onPlayerBallKick = function (player) {
	// Gets the last one who kicked the ball
	lastKicker = [player, room.getScores().time]
	whoTouchedLast = player;
}

room.onStadiumChange = function (stadiumName, byPlayer) {
	if (byPlayer.id != 0) {
		room.setCustomStadium(spaceBounce);
	}
}

room.onPlayerActivity = function (player) {
	activities[player.id] = Date.now();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
	if (byPlayer.id == 0) {
		return false;
	}
	/* Search user in records */
	var checkPlayer = getPersonByName(kickedPlayer.name);
	var checkByPlayer = getPersonByName(byPlayer.name);
	checkPlayer.isAfk = false;
	// reorder orderIds
	for (var i = 0; i < orderId.length; i++) {
		if (orderId[i] === kickedPlayer.id) {
			orderId.splice(i, 1);
		}
	}
	if (checkPlayer.isAdmin || checkPlayer.isSuperAdmin) {
		if (ban) {
			if(!checkByPlayer.isSuperAdmin){
				checkByPlayer.isAfk = false;
				room.kickPlayer(byPlayer.id, " Adminleri banlamayazsınız.", true);
				room.clearBan(kickedPlayer.id);
			}
		} else {
            if(!checkByPlayer.isSuperAdmin){
				if(checkByPlayer.isAdmin){
					checkByPlayer.isAfk = false;
					room.kickPlayer(byPlayer.id, " Adminleri kickleyemezsiniz.", false);
				}else{
					checkByPlayer.isAfk = false;
					room.kickPlayer(byPlayer.id, " Adminleri kickleyemezsiniz.", true);
				}
            }
		}
	} else
		if (!checkByPlayer.isAdmin && !checkByPlayer.isSuperAdmin) {
			if (ban) {
				checkByPlayer.isAfk = false;
				room.kickPlayer(byPlayer.id, " Banlama yetkiniz yoktur.", true);
				room.clearBan(kickedPlayer.id);
			} else {
				checkByPlayer.isAfk = false;
				room.kickPlayer(byPlayer.id, " Kickleme yetkiniz yoktur.", true);
			}
		} else {
			checkPlayer.isAfk = false;
		}
}

room.onPlayerLeave = function (player) {
	/* Search user in records */
	var checkPlayer = getPersonByName(player.name);
	if (checkPlayer) {
		checkPlayer.isAfk = false;
	}
	for (var i = 0; i < orderId.length; i++) {
		if (orderId[i] === player.id) {
			orderId.splice(i, 1);
		}
	}
	updateAdmins();
}

room.onTeamGoal = function (team) {
	changeTeamColorsOnScore(team);
	isGamePaused = false;
	var time = room.getScores().time;
	var m = Math.trunc(time / 60); var s = Math.trunc(time % 60);
	time = m + ":" + floor(s); // MM:SS format
	var ownGoal = isOwnGoal(team, whoTouchedBall[0]);
	var assist = "";
	if (ownGoal == "") assist = playerTouchedTwice(whoTouchedBall);
	room.setPlayerDiscProperties(whoTouchedBall[0].id, { radius: 25 });
	room.sendChat("GOOL !!! ⚽ " + whoTouchedBall[0].name + " ⚽ " +
		assist + ownGoal + " dakika " +
		time + "'de " + team_name(team) + " ya karşı gol attı.");
	if (ownGoal == "") {
		var gollerName = whoTouchedBall[0].name;
		var checkGoller = getPersonByName(gollerName);
		if (checkGoller) {
			if (currentPlayerCount > minPlayerToPlay) {
				checkGoller.goalCount = checkGoller.goalCount + 1;
			} else {
		
				room.sendChat(" İstatistiklerin değişmesi için en az 3v3 maç olmalı. ");
			}
		}
		if (assist != "") {
			var asisterName = whoTouchedBall[1].name;
			var checkAssister = getPersonByName(asisterName);
			if (checkAssister) {
				if (currentPlayerCount > minPlayerToPlay) {
					checkAssister.asistCount = checkAssister.asistCount + 1;
				}
			}
		}
	}

	if (scorers == undefined) scorers = new Map(); // Initializing dict of scorers
	scorers.set(scorers.size + 1 + ") " + whoTouchedLast.name, [time, assist, ownGoal])
	whoTouchedBall = [init, init];
	whoTouchedLast = undefined;
}

room.onTeamVictory = function (scores) {
	var players = room.getPlayerList();
	room.sendChat("🔥🔥🔥 Atılan goller : ")
	for (var [key, value] of scorers) { // key: name of the player, value: time of the goal
		room.sendChat(key + " " + value[1] + value[2] + ": " + value[0]);
	}
	if (currentPlayerCount ==  minPlayerToPlay + 1) {
		if(typeof rekorSeri === 'undefined'){
            rekorSeri = JSON.parse(localStorage.getItem("rekorSeriLong"));
        }
		if(!rekorSeri){
			rekorSeri = JSON.parse(localStorage.getItem("rekorSeriLong"));
		}
		if (scores.blue > scores.red) {
			kazananBlueIsimler = "";
			for (var l = players.length - 1; l > -1; l--) {
				if (players[l].team == 2) { // BLUE 
					var winnerName = players[l].name;
					var checkWinner = getPersonByName(winnerName);
					checkWinner.totalGameCount = checkWinner.totalGameCount + 1;
					kazananBlueIsimler = winnerName + " 🎉 " + kazananBlueIsimler;
				}
				if (players[l].team == 1) // RED
				{
					room.setPlayerTeam(players[l].id, 0);
					var loserName = players[l].name;
					var checkLoser = getPersonByName(loserName);
					checkLoser.loseCount = checkLoser.loseCount + 1;
					checkLoser.totalGameCount = checkLoser.totalGameCount + 1;
				}
			}
			blueS++;
			redS = 0;
			room.sendChat(" 🔵🔵🔵 Mavi takım " + blueS + " maçtır kazanıyor ! 🔵🔵🔵");
			if (blueS > rekorSeri) {
				rekorSeri = blueS;
				seridekiIsimler = kazananBlueIsimler;
				var localseri = JSON.stringify(rekorSeri);
				window.localStorage.setItem("rekorSeriLong", localseri);
				var localserinames = JSON.stringify(seridekiIsimler);
				window.localStorage.setItem("seridekiIsimlerLong", localserinames);
			}
		} else {
			kazananRedIsimler = "";
			for (var j = players.length - 1; j > -1; j--) {
				if (players[j].team == 2) // BLUE
				{
					room.setPlayerTeam(players[j].id, 0);
					var mavioyuncuismi = players[j].name;
					var checkLoserT = getPersonByName(mavioyuncuismi);
					checkLoserT.totalGameCount = checkLoserT.totalGameCount + 1;
					checkLoserT.loseCount = checkLoserT.loseCount + 1;
				}
				if (players[j].team == 1) { // RED
					var redoyuncuismi = players[j].name;
					var checkWinnerT = getPersonByName(redoyuncuismi);
					checkWinnerT.totalGameCount = checkWinnerT.totalGameCount + 1;
					kazananRedIsimler = redoyuncuismi + " 🎉 " + kazananRedIsimler;
				}
			}
			redS++;
			blueS = 0;
			room.sendChat(" 🔴🔴🔴 Kırmızı takım " + redS + " maçtır kazanıyor ! 🔴🔴🔴");
			if (redS > rekorSeri) {
				rekorSeri = redS;
				seridekiIsimler = kazananRedIsimler;
				var localseri = JSON.stringify(rekorSeri);
				window.localStorage.setItem("rekorSeriLong", localseri);
				var localserinames = JSON.stringify(seridekiIsimler);
				window.localStorage.setItem("seridekiIsimlerLong", localserinames);
			}
		}
		saveRecords();
	} else {
		room.sendChat(" İstatistiklerin değişmesi için en az 3v3 maç olmalı. ");
	}
}

room.onGameStop = function () {
	printAfklar();
	scorers = undefined;
	whoTouchedBall = [init, init];
	whoTouchedLast = undefined;
	room.sendChat('Oda adminlikleri sifirlanmistir. Oda Admini olmak için dc duyurudaki adimlari izlemesi gerekmektedir. https://discord.gg/hR7rtw76q5');
}

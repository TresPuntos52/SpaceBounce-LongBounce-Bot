var geo = { "code": "TR", "lat": 40.9083, "lon": 29.0483 };
var decidedRoomName = "Long Bounce";
var room = HBInit({ roomName: "⭐️ [HB] ⭐️ v3 • SpaceBounceBrakes •", maxPlayers: 20, playerName: "😶‍🌫️", token: "thr1.AAAAAF9nrNJCuBjUB-s2gg.4yURLQNLH7w", public: true, geo });
var SMSet = new Set();
room.setScoreLimit(4);
room.setTimeLimit(3);
room.setTeamsLock(true)
room.setTeamColors(1, 60, 0x000000, [0x8F1A22, 0x8F1A22, 0x8F1A22]);
room.setTeamColors(2, 60, 0x000000, [0x046F8F, 0x046F8F, 0x046F8F]);
var spaceBounce = '{"name":"Anonim","width":900,"height":540,"bg":{"type":"hockey","width":550,"height":240},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":-550,"y":80,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":0,"y":550,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-550,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-610,"y":-60,"bCoef":0.5,"cMask":["ball"]},{"x":-610,"y":60,"bCoef":0.5,"cMask":["ball"]},{"x":610,"y":-60,"bCoef":0.5,"cMask":["ball"]},{"x":610,"y":60,"bCoef":0.5,"cMask":["ball"]},{"x":0,"y":240,"cMask":[]},{"x":0,"y":-240,"cMask":[]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-121,"y":254,"cMask":[]},{"x":-121,"y":300,"cMask":[]},{"x":-87,"y":254,"cMask":[]},{"x":-87,"y":300,"cMask":[]},{"x":-120,"y":278,"cMask":[]},{"x":-88,"y":278,"cMask":[]},{"x":-52,"y":254,"cMask":[]},{"x":-69,"y":300,"cMask":[]},{"x":-35,"y":300,"cMask":[]},{"x":-60,"y":278,"cMask":[]},{"x":-43,"y":278,"cMask":[]},{"x":-17,"y":300,"cMask":[]},{"x":17,"y":254,"cMask":[]},{"x":-17,"y":254,"cMask":[]},{"x":17,"y":300,"cMask":[]},{"x":70,"y":257,"cMask":[]},{"x":38,"y":257,"cMask":[]},{"x":40,"y":277,"cMask":[]},{"x":67,"y":297,"cMask":[]},{"x":35,"y":296,"cMask":[]},{"x":65,"y":277,"cMask":[]},{"x":88,"y":257,"cMask":[]},{"x":88,"y":299,"cMask":[]},{"x":88,"y":277,"cMask":[]},{"x":119,"y":257,"cMask":[]},{"x":119,"y":277,"cMask":[]},{"x":119,"y":299,"cMask":[]}],"segments":[{"v0":17,"v1":19,"cMask":[],"color":"CCCCFF"},{"v0":19,"v1":18,"cMask":[],"color":"6B6B6B"},{"v0":18,"v1":16,"cMask":[],"color":"CCCCFF"},{"v0":1,"v1":2,"cMask":[],"color":"D0D0E8"},{"v0":5,"v1":6,"cMask":[],"color":"D0D0E8"},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D0D0E8"},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"D0D0E8"},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"D0D0E8"},{"v0":18,"v1":19,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"D0D0E8"},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D0D0E8"},{"v0":0,"v1":1,"bias":-100,"cMask":["ball"],"color":"D0D0E8"},{"v0":2,"v1":3,"bias":-100,"cMask":["ball"],"color":"D0D0E8"},{"v0":4,"v1":5,"bias":100,"cMask":["ball"],"color":"D0D0E8"},{"v0":6,"v1":7,"bias":100,"cMask":["ball"],"color":"D0D0E8"},{"v0":0,"v1":4,"bias":100,"cMask":["ball"],"color":"D0D0E8"},{"v0":3,"v1":7,"bias":-100,"cMask":["ball"],"color":"D0D0E8"},{"v0":1,"v1":13,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":12,"v1":13,"bCoef":0.5,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":12,"v1":2,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":15,"v1":5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":14,"v1":15,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":6,"v1":14,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"}],"planes":[{"normal":[0,1],"dist":-540,"bCoef":0.1},{"normal":[0,-1],"dist":-540,"bCoef":0.1},{"normal":[1,0],"dist":-900,"bCoef":0.1},{"normal":[-1,0],"dist":-900,"bCoef":0.1},{"normal":[0,1],"dist":-240,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"cMask":["ball"]}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-550,80],"radius":8,"invMass":0,"color":"961515"},{"pos":[-550,-80],"radius":8,"invMass":0,"color":"961515"},{"pos":[550,80],"radius":8,"invMass":0,"color":"1E1666"},{"pos":[550,-80],"radius":8,"invMass":0,"color":"1E1666"},{"pos":[-560,78],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-570,76],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,0],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-570,-76],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-560,-77],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[564,78],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[573,76],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,0],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[570,-76],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[560,-78],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]}],"playerPhysics":{"bCoef":1.5,"damping":0.9995,"acceleration":0.025,"kickingAcceleration":0.0175,"kickingDamping":0.99},"ballPhysics":"disc0","spawnDistance":350,"joints":[{"d0":1,"d1":5,"length":10.198039027185569},{"d0":5,"d1":6,"length":10.198039027185569},{"d0":6,"d1":7,"length":10.198039027185569},{"d0":7,"d1":8,"length":13},{"d0":8,"d1":9,"length":13},{"d0":9,"d1":10,"length":12},{"d0":10,"d1":11,"length":12},{"d0":11,"d1":12,"length":12},{"d0":12,"d1":13,"length":12},{"d0":13,"d1":14,"length":12},{"d0":14,"d1":15,"length":12},{"d0":15,"d1":16,"length":12},{"d0":16,"d1":17,"length":12},{"d0":17,"d1":18,"length":13},{"d0":18,"d1":19,"length":13},{"d0":19,"d1":20,"length":10.198039027185569},{"d0":20,"d1":21,"length":10.04987562112089},{"d0":21,"d1":2,"length":10.44030650891055},{"d0":3,"d1":22,"length":14.142135623730951},{"d0":22,"d1":23,"length":9.219544457292887},{"d0":23,"d1":24,"length":7.280109889280518},{"d0":24,"d1":25,"length":13},{"d0":25,"d1":26,"length":13},{"d0":26,"d1":27,"length":12},{"d0":27,"d1":28,"length":12},{"d0":28,"d1":29,"length":12},{"d0":29,"d1":30,"length":12},{"d0":30,"d1":31,"length":12},{"d0":31,"d1":32,"length":12},{"d0":32,"d1":33,"length":12},{"d0":33,"d1":34,"length":12},{"d0":34,"d1":35,"length":13},{"d0":35,"d1":36,"length":13},{"d0":36,"d1":37,"length":10.198039027185569},{"d0":37,"d1":38,"length":10.198039027185569},{"d0":38,"d1":4,"length":10.198039027185569}],"redSpawnPoints":[[-350,0],[-350,60],[-350,-60],[-350,120],[-350,-120],[-605,0]],"blueSpawnPoints":[[350,0],[350,60],[350,-60],[350,120],[350,-120],[605,0]],"kickOffReset":"full","canBeStored" : false}'
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
	window.localStorage.setItem("records", JSON.stringify(records));
}
getRecords = function () {
	records = JSON.parse(localStorage.getItem("records"));
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
		/* Get records from localstorage */
		getRecords();
	}
	if (!records || records.length == 0) {
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
						} else {
						/* Player still did not enter !onayla */
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
		rekorSeri = JSON.parse(localStorage.getItem("rekorSeriv3"));
		seridekiIsimler = JSON.parse(localStorage.getItem("seridekiIsimlerv3"));
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
            rekorSeri = JSON.parse(localStorage.getItem("rekorSeriv3"));
        }
		if(!rekorSeri){
			rekorSeri = JSON.parse(localStorage.getItem("rekorSeriv3"));
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
				window.localStorage.setItem("rekorSeriv3", localseri);
				var localserinames = JSON.stringify(seridekiIsimler);
				window.localStorage.setItem("seridekiIsimlerv3", localserinames);
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
				window.localStorage.setItem("rekorSeriv3", localseri);
				var localserinames = JSON.stringify(seridekiIsimler);
				window.localStorage.setItem("seridekiIsimlerv3", localserinames);
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


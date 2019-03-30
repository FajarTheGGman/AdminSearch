var c = require("colors");
var req = require("request");
var f = require("fs");
var r = require("readline");

console.log(c.rainbow("┏━┃┏━ ┏┏ ┛┏━   ┏━┛┏━┛┏━┃┏━┃┏━┛┃ ┃"));
console.log(c.rainbow("┏━┃┃ ┃┃┃┃┃┃ ┃  ━━┃┏━┛┏━┃┏┏┛┃  ┏━┃"));
console.log(c.rainbow("┛ ┛━━ ┛┛┛┛┛ ┛  ━━┛━━┛┛ ┛┛ ┛━━┛┛ ┛"));
console.log("");
console.log("");
console.log(c.rainbow("     (ノಠ益ಠ)ノ彡┻━┻"));
console.log("");
console.log(c.rainbow("[======================]"));
console.log(c.blue("Author : Fajar Firdaus"));
console.log(c.blue("Fb : Fajar Firdaus"));
console.log(c.blue("IG : fajar_firdaus_7"));
console.log(c.blue("YT : iTech7732"));
console.log(c.rainbow("[======================]"));

let d = r.createInterface({
	input : process.stdin,
	output : process.stdout
});

d.question("Masukan Url : ", (url) => {

const g = r.createInterface({
	input : f.createReadStream("wordlist.txt")
});

g.on("line", (line) => {

req(`${url}` + "/" + `${line}`, function(error, response, body){
	if (response.statusCode == 200){
		console.log(`${url}` + "/" + `${line}` + c.green(" [+] Login Found !"));
		x();
	}else{ 
		console.log(`${url}` + "/" + `${line}` + c.red(" [-] Not Found"));
	}
});	
});
});
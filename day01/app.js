const modules = [
    85364,
    97431,
    135519,
    119130,
    137800,
    85946,
    146593,
    141318,
    103590,
    138858,
    92329,
    94292,
    132098,
    144266,
    72908,
    112896,
    87046,
    133058,
    141121,
    74681,
    83458,
    107417,
    121426,
    66005,
    106094,
    96458,
    113316,
    142676,
    79186,
    55480,
    147821,
    116419,
    70532,
    105344,
    116797,
    126387,
    139600,
    136382,
    121330,
    123485,
    134336,
    141201,
    131556,
    91346,
    117939,
    58373,
    129325,
    102237,
    60644,
    96712,
    126342,
    98939,
    66305,
    111403,
    143257,
    58721,
    55552,
    139078,
    74263,
    125989,
    90904,
    91058,
    92130,
    53176,
    81369,
    100856,
    110597,
    111141,
    129749,
    123822,
    75321,
    80963,
    102625,
    70161,
    107069,
    117982,
    86443,
    95627,
    147801,
    149508,
    101470,
    81879,
    133396,
    82276,
    144803,
    67049,
    127735,
    121064,
    122975,
    69435,
    139132,
    141284,
    70798,
    117921,
    108942,
    85662,
    75438,
    122699,
    116654,
    126797
];

let fuel = 0;
for (val of modules) {
    while ((Math.floor(val / 3) - 2 )> 0) {
        fuel += Math.floor(val / 3) - 2;
        val = Math.floor(val / 3) - 2;
    }
}
console.log(fuel);



// var array = [];
// var xmlhttp;
// if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
//     xmlhttp = new XMLHttpRequest();
// } else { // code for IE6, IE5
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
// xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         var text = xmlhttp.responseText;
//         // Now convert it into array using regex
//         array = text.split(/\n|\r/g);
//     }
// }
// xmlhttp.open("GET", "modules.txt", true);
// xmlhttp.send();

// console.log(array);

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var fs = require("fs");

// var text = fs.readFileSync("./mytext.txt", "utf-8");
// var textByLine = text.split("\n");
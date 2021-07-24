var net = require('net');

var add_zero = function (number){
    return "0" + number.toString();
};


var string_num = function (year, month, day, hour, minute) {
    var format = year.toString() + '-' + needs_zero(month) + '-' +needs_zero(day) + ' ' + needs_zero(hour) + ':' + needs_zero(minute) + '\n';
    console.log(format);
    return format;
};

var needs_zero = function (number) {
    return (number<10) ? add_zero(number) : number.toString();
};

var server = net.createServer(function (socket){
        var date = new Date();
        var data = string_num(date.getFullYear(),date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes());
        socket.write(data);
	socket.end();
    });

server.listen(process.argv[2]);
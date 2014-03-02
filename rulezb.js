var commandline = require("./lib/commandline.js");
var rulezEngine = require("./lib/rulezengine.js");

cmd = new commandline(process.argv);
cmd = cmd.process();

bre = new rulezEngine();

if (cmd.ruleset ==null)
    process.stdout.write("Wrong Parameters. Missing Ruleset -r parameter.\n");
    if (!bre.setRuleSet(cmd.ruleset)){
        process.stdout.write("RuleSet "+cmd.ruleset+" does not exist.\n");
    };

if (cmd && cmd.mode == "commandline"){
    if (cmd.fact ==null)
        process.stdout.write("Wrong Parameters. Missing Fact -f parameter.\n");

    var results = bre.run(cmd.fact);
    console.log(bre.respond(results));
    return;
//    process.stdout.write( bre.run(cmd.fact));
}

http = require('http');
fs = require('fs');
server = http.createServer( function(req, res) {
    if (req.method == 'POST') {
        req.on('data', function (data) {
                    bre.postDATA = data.toString();
        });
        req.on('end', function () {
            bre.POSTRESULT = bre.run(JSON.parse(bre.postDATA));
            res.writeHead(200, {'Content-Type': 'application/json'});
            respond = bre.respond(bre.POSTRESULT);
            res.write(JSON.stringify(respond));
            res.end();
        });
    }
    else
    {
        var html = fs.readFileSync('./index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }
});

host = "10.0.0.100";
server.listen(cmd.port, host);
server.bre = bre;
console.log('RulesB Running at http://' + host + ':' + cmd.port);
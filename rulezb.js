var commandline = require("./lib/commandline.js");
var rulezEngine = require("./lib/rulezengine.js");

cmd = new commandline(process.argv);
cmd = cmd.process();


if (cmd && cmd.mode == "commandline"){
    if (cmd.ruleset ==null)
        process.stdout.write("Wrong Parameters. Missing Ruleset -r parameter.\n");
    if (cmd.fact ==null)
        process.stdout.write("Wrong Parameters. Missing Fact -f parameter.\n");

        bre = new rulezEngine();
        if (!bre.setRuleSet(cmd.ruleset)){
            process.stdout.write("RuleSet "+cmd.ruleset+" does not exist.\n");
        };
    var results = bre.run(cmd.fact);
    console.log(bre.respond(results));
//    process.stdout.write( bre.run(cmd.fact));
}
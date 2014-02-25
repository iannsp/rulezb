'use stric';
module.exports = commandline;

function commandline(args) {
    this.args = args; 
    this.response = {"mode" : "commandline","port":2001,"ruleset":null,"fact":null};
    
    this.process= function(data){
        if(this.args.indexOf("-h") != -1)
        return this.help();
        if(this.args.length < 4 ){
            process.stdout.write("Wrong Parameters. Type -h for help.\n");
            return this.help();
        }
        if(this.args.indexOf("-d") != -1){
            this.response.mode ="daemon";
        }

        port = this.args.indexOf("-p");
        if(port != -1)
            this.response.port = this.args[port+1];
        ruleset = this.args.indexOf("-r");
        if(ruleset != -1)
            this.response.ruleset = this.args[ruleset+1];
        fact = this.args.indexOf("-f");
        if(fact != -1)
            this.response.fact = JSON.parse(this.args[fact+1]);
            return this.response;
    };
    this.help=function(){
        process.stdout.write("Rulez\n\
A Business Rule Engine for rule them all.\n\
parameters:\n\
-d run as a deamon (optional)\n\
-p port number (optional) default: 2001\n\
-r ruleset name.(optional) \n\
-f fact data in a json format.\n\
by Ivo Nascimento [iannsp at gmail . com].\n");
    };
};

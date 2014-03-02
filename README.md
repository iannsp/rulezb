rulezb
=====

A Business Rule Engine for rule them all

version: 0.0.4

Business Rules Engine is a kind of software developed to support environments where the rules changes in a regular base like risk evaluation, text analysis, data mining and others softwares designed to decision making.

This kind of job need support this changes without high costs per change.

So, BRE - Business Rule Engines are effective designs to this problem. 

This BRE are under develop to support rules in string format, functions and methods. This will provide the use of external datasources to validation.

how to test:

show the help
    node rulezb.js -h
    Rulez
    A Business Rule Engine for rule them all.
    parameters:
    -d run as a deamon (optional)
    -p port number (optional) default: 2001
    -r ruleset name.(optional) 
    -f fact data in a json format.
    by Ivo Nascimento [iannsp at gmail . com].
    
    
    node rulezb.js -r test1 -f '{"sexo":"masculino","idade":30}' // return 1  

    node rulezb.js -r test1 -f '{"sexo":"masculino","idade":5}' // return 0 
    

What is a a fact?

A Fact is a data record with all expected information for a bre. Its represented in JSON format.

What is a RuleSet?

A rule set is setting of rules to apply over the fact.

How to create a Rule Set?

To create a ruleset you need add a file with the same name in the ruleset folder. The format of this file is.
Example for a ruleset named as test1: 

    exports.test1 = { // you need export the ruleset to become visible to Rulez Engine.
        returnType:"boolean", // this is a returnType you expect. Right now just support boolean but, Score, and data 
        rules:[ // this is a array with all rules
                'data.sexo =="masculino"',  // this is a javascript syntax where data is the JSON Fact.
                function(data){return (data.idade >10);} // You can create rules in function format where data is the JSON Fact you provide
            ]
    };


changeLog
=====

0.0.1: Test the ideia in run string rules(A rule described in logical statements).

0.0.2: Support more complex logic into the rules supporting function as a rule. 

0.0.3: Support nested rules and  the use of functions as ReturnType.

0.0.4: Support to 'expr' type as ReturnType. An evaluable instruction with a result. 
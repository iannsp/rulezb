'use stric';
var fs = require('fs');

module.exports = rulezEngine;

function rulezEngine() {
    this.ruleset = {"name":null, "instance":null};
    this.setRuleSet = function(ruleset){
        this.ruleset.name = ruleset;
        path  = "ruleset/"+this.ruleset.name+".js";
        if (fs.existsSync(path)){
            this.ruleset.instance = require(path);        
            return true;
        }
        return false;
    };
    this.getRuleSet = function(){
        return this.ruleset.instance;
    };

    this.run = function(data)
    {
        rules = (this.ruleset.instance[this.ruleset.name].rules);
        returnType = (this.ruleset.instance[this.ruleset.name].returnType);
        results = [];
        for(i=0; i< rules.length; i++){
            if(typeof(rules[i])=='function'){
                results.push ( (rules[i])(data));
            }else{
                results.push( eval(rules[i]) );
            }
        }
         if(typeof(returnType)=='function'){
             return  ( (returnType)(results));
        }else if (returnType == "boolean"){
            return this.returnBoolean(results);
        } else if(returnType == "ResponseData"){
            return results;
        }
        return null;
    };
    this.returnBoolean = function (result){
        returnValue = true;
        for(r in result){
            returnValue = returnValue & result[r];
        }
        return returnValue;
    }
};
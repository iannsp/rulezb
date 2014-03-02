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
        var rules = (this.ruleset.instance[this.ruleset.name].rules);
        var results = [];
        return this.doRules(rules, data);
    };
    this.doRules= function(rules, data)
    {
        var results = [];
        for(i=0; i< rules.length; i++){
            var type = Object.prototype.toString.call( rules[i] );
            if(type =='[object Array]'){
                results.push ( this.doRules(rules[i], data) );
            }else if(type =='[object Function]'){
                results.push ( (rules[i])(data));
            }else{
                results.push( eval(rules[i]) );
            }
        }
        return results;
    }
    this.respond= function(results){
        var returnType = (this.ruleset.instance[this.ruleset.name].returnType);
        if(returnType=='text'){
            return results.join();
       }else if(typeof(returnType)=='function'){
             return  ( (returnType)(results));
        }else if (returnType == "boolean"){
            return this.returnBoolean(results);
        } else if(returnType == "ResponseData"){
            return results;
        }
        return null;
    }
    this.returnBoolean = function (result){
        returnValue = true;
        for(r in result){
            var type = Object.prototype.toString.call(result[r]);
            if(type =='[object Array]'){
                returnValue = this.returnBoolean(result[r]);
            }
            returnValue = returnValue & result[r];
        }
        return returnValue;
    }
};
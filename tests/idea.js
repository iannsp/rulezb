data = {"sexo":"masculino","idade":35,"ecliente":true};
//console.log(data.sexo);
rule = ['data.sexo =="masculino"', function(data){
    return data.idade -10;
}];
result = [];
for(i=0; i< rule.length; i++){
    console.log(rule[i]);
    if(typeof(rule[i])=='function'){
        console.log ( 
            (rule[i])( data )
        );
    }else{
        console.log( eval(rule[i]) );
    }
}

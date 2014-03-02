exports.subruleset = {
    returnType:"boolean",
    rules:[
            'data.sexo =="masculino"', 
            function(data){return (data.idade >10);}
            ,['data.idade < 40', "data.ecliente==true"
            ,['data.idade < 40', "data.ecliente==true"]
            ]
        ]
};
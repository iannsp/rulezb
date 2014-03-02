exports.returnTypeExpression = {
//    returnType:"expr:console.log(r)",
    returnType:"expr:r[0]&&r[1]&&r[2][0]",
    rules:[
            'data.sexo =="masculino"', 
            function(data){return (data.idade >10);}
            ,['(data.idade < 40)', "data.ecliente==true"
            ,['data.idade < 40', "data.ecliente==true"]
            ]
        ]
};
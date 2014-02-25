exports.test1 = {
    returnType:"boolean",
    rules:[
            'data.sexo =="masculino"', 
            function(data){return (data.idade >10);}
        ]
};
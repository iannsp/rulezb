exports.Risco_de_Credito_A = {
    model:{"idade":null,"sexo":null,"tempodeEmpregoMeses":null,"quantosEmpregos":null,"salario":null},
    returnType:function(data){
        console.log(data);
        risk = 1;
        for (r in data){
            risk = risk*data[r];
        }
        return Math.round(risk * 100);
    },
    rules: // conjunto de regras de exemplo. Premissas sem fundamento teórico. Somente Exemplo.
    [
        // quanto menor a idade, maior risco
         "(data.idade >=25)?0.4:0.7" 
        // quanto menos tempo de emprego, maior o risco
        ,"((12 / data.tempodeEmpregoMeses))" 
        // mais de um emprego por ano
        ,"((data.quantosEmpregos / (data.idade - 19))>1)?1.3:0.3" 
        // quanto menor o salario e menor o tempo de emprego, maior o risco
        ,"((data.salario)< 1200 && data.tempodeEmpregoMeses < 12)?0.4:0.1" 
        ,"( data.valor /  (data.salario / 3) > 3)?1.3:1"
    ]
};
exports.NameExtraction = {
    returnType:function(data){
        intersect = [];
        for (result in data){
            if (intersect.length ==0){
                intersect = data[result];
                continue;
            }
            newintersect = []
            for(term in intersect){
                if (data[result].indexOf(intersect[term]) != -1){
                    newintersect.push(intersect[term]);
                }
            }
            intersect = newintersect;
        }
        return intersect;
    },
    rules:[
            function(data){
                capitalize = []
                tokens = data.text.split(" ");
                for (w in tokens){
                    if (tokens[w].length<2)
                    continue;
                    if(tokens[w][0] == tokens[w][0].toUpperCase())
                    capitalize.push(tokens[w]);
                }
                return capitalize;
            },
            function(data){
                minLength = []
                tokens = data.text.split(" ");
                for (w in tokens){
                    if(tokens[w].length >2 && tokens[w].length < 20)
                    minLength.push(tokens[w]);
                }
                return minLength;
            }
        ]
};
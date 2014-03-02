exports.tokenizeText = {
    returnType:function(data){
        //coisas que ningume pode ser. Entidade Pessoa.
        negative = Array("born","album","is","an","album","by","and","released","in","Wikipedia","the",
        "encyclopedia","en","wikipedia","org","wiki","footballer","Wikipedia","da","born","10","April","1973",
        "more","commonly","known","simply","as","is","a","and","who","currently","Wikipedia","the","encyclopedia","en",
        "wikipedia","org","wiki","Wikipedia","is","a","Grammy","Award","and","who","has","achieved","a","deal","of","and",
        "recognition","in","his","50","year","Music","Biography","Credits","and","Discography","AllMusic","www","allmusic","com",
        "mn0000292011","AllMusic","Find","bio","songs","credits","awards","similar","and","video","information","on","AllMusic",
        "whose","dominance","of","and","Players","with","the","10","Hardest","Shots","in","Football","History","Bleacher","Report",
        "21","hours","ago","This","article","celebrates","the","with","the","hardest","shots","in","football","like","may","not",
        "be","regular","Lange","com","WATCH","IN","HD","SETTING","IN","YOUTUBE","You","are","usually","used","to","someone","telling",
        "you","that","you","are","suppose","to","know","this","Most","of","the","time","all","of","this","isn","t","true","you",
        "Oficial","RC3","on","Twitter","https","twitter","com","Oficial","RC3","Oficial","RC3","Twitter","oficial","do",
        "mundial","hoje","do","Sivasspor","TUR","http","www","facebook","com","Goal.com","www","goal","com","en","brazil",
        "1223","Goal","com","I","want","to","Madrid","The","has","admitted","his","desire","to","return","to","the","club","he",
        "represented","with","distinction","as","a","within","in","the","next","10");
        frequency= {};
        data = data[0];
        for (w in data){
            // retira numeros
            if (! isNaN(parseInt(data[w])))
                continue;
            if (data[w].length < 2)
                continue;
            if (negative.indexOf(data[w]) != -1)
            continue;

            if( frequency[ data[w] ] == undefined){
                frequency[ data[w] ] = 1;
            }else {
                frequency[ data[w] ] ++;
            }
        }
        return frequency;
    },
    rules:[
            function(data){
                capitalize = []
                tokens = data.text.split(" ");
                for (w in tokens){
                    capitalize.push(tokens[w]);
                }
                return capitalize;
            }
        ]
};
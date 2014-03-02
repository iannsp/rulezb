exports.greetings = {
    returnType:'text',
    rules:[
        function(data){
            d = new Date();
            hour = d.getHours();
            if(hour >=0 && hour <= 11){
                return "Good Morning "+ data.name;
            }else if(hour > 11 && hour <=  17){
                return "Good Afternoon "+ data.name;
            }else if(hour > 17 && hour <=22){
                return "Good Evening "+ data.name;
            }else if(hour > 22 && hour < 24){
                return "Good Night "+ data.name;
            }
        }
        ]
};
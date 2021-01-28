class Contestant{
    constructor(){}

    getCount(){
        var contestantCountref = database.ref('contestantCount');
        contestantCountref.on('value',function(data){
            contestantCount = data.val();
        })
    }
        updateCount(Count){
            database.ref('/').update({
                contestantCount: Count 
            
        })
    }
        update(name){
            var contestantIndex = 'contestant'+contestantCount;
            database.ref(contestantIndex).set({
                   name: name  
            })


        }

}
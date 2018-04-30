for (i = 0;i <3 ; i++){
    console.log(i); --  infinite Loop
}

I don't use any kind of loop --  and achieve this functionality!


funtion loop(maxValue,currentValue){

    if(maxValue===currentValue){
        console.log(maxValue)
    }
    else{
        console.log(currentValue)
        currentValue = currentValue + 1
        loop(maxValue,currentValue)
    }
    
}

loop(3,0)


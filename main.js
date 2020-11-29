var leftValue = (screen.availWidth)/2 , move = 35, direction = '35'

document.onkeydown = function(e){
    console.log(e.key);


    if(e.key == 'ArrowRight'){
        leftValue = leftValue + move;
        document.getElementById('character').style.left = leftValue+"px";
        direction = '35'
    }

    else if(e.key == 'ArrowLeft'){
        leftValue = leftValue - move;
        document.getElementById('character').style.left = leftValue+"px";
        direction = '35'
    }

    document.getElementById('character').style.backgroundImage = "url('img/"+direction+".png')";

}


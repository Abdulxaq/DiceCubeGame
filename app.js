const outsideBoxes = document.querySelectorAll('.outside_box')
const alert = document.getElementById('was')
const winner = document.getElementById('winner')
const loser = document.getElementById('loser')
function guess(){
    let a = Math.ceil(6*Math.random())
    if(a === 1){
        winner.play()
        setTimeout(() => {
            document.getElementById('one').style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById('one').style.opacity = "0";
        }, 2000);
    }
    if( a != 1 ){
        loser.play()
        document.getElementById('alert').style.opacity = '1'
        alert.innerHTML = 'Ehhh <br> It was '+a+'! <br>'+ '<u> <i> try again </i></u>' 
        setTimeout(() => {
        document.getElementById('alert').style.opacity = '0'
        }, 2000);
    }
}
function guess2(){
    let a = Math.ceil(6*Math.random())
    if(a === 2){
        winner.play()
        setTimeout(() => {
            document.getElementById('two').style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById('two').style.opacity = "0";
        }, 2000);
    }
    if( a != 1 ){
        loser.play()
        document.getElementById('alert').style.opacity = '1'
        alert.innerHTML = 'Ehhh <br> It was '+a+'! <br>'+ '<u> <i> try again </i></u>' 
        setTimeout(() => {
        document.getElementById('alert').style.opacity = '0'
        }, 2000);
    }
}
function guess3(){
    let a = Math.ceil(6*Math.random())
    if(a === 3){
        winner.play()
        setTimeout(() => {
            document.getElementById('three').style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById('three').style.opacity = "0";
        }, 2000);
    }
    if( a != 1 ){
        loser.play()
        document.getElementById('alert').style.opacity = '1'
        alert.innerHTML = 'Ehhh <br> It was '+a+'! <br>'+ '<u> <i> try again </i></u>' 
        setTimeout(() => {
        document.getElementById('alert').style.opacity = '0'
        }, 2000);
    }
}
function guess4(){
    let a = Math.ceil(6*Math.random())
    if(a === 4){
        winner.play()
        setTimeout(() => {
            document.getElementById('four').style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById('four').style.opacity = "0";
        }, 2000);
    }
    if( a != 1 ){
        loser.play()
        document.getElementById('alert').style.opacity = '1'
        alert.innerHTML = 'Ehhh <br> It was '+a+'! <br>'+ '<u> <i> try again </i></u>' 
        setTimeout(() => {
        document.getElementById('alert').style.opacity = '0'
        }, 2000);
    }
}
function guess5(){
    let a = Math.ceil(6*Math.random())
    if(a === 5){
        winner.play()
        setTimeout(() => {
            document.getElementById('five').style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById('five').style.opacity = "0";
        }, 2000);
    }
    if( a != 1 ){
        loser.play()
        document.getElementById('alert').style.opacity = '1'
        alert.innerHTML = 'Ehhh <br> It was '+a+'! <br>'+ '<u> <i> try again </i></u>' 
        setTimeout(() => {
        document.getElementById('alert').style.opacity = '0'
        }, 2000);
    }
}
function guess6(){
    let a = Math.ceil(6*Math.random())
    if(a === 6){
        winner.play()
        setTimeout(() => {
            document.getElementById('six').style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById('six').style.opacity = "0";
        }, 2000);
    }
    if( a != 1 ){
        loser.play()
        document.getElementById('alert').style.opacity = '1'
        alert.innerHTML = 'Ehhh <br> It was '+a+'! <br>'+ '<u> <i> try again </i></u>' 
        setTimeout(() => {
        document.getElementById('alert').style.opacity = '0'
        }, 2000);
    }
}
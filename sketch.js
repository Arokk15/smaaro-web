var b1=document.getElementById('lb')
var b2=document.getElementById('rb')

b2.addEventListener('click',function (event){
    var p1=document.getElementById('pi1')
    p1.position.x=p1.position.x+1
    document.getElementById('pi2').style.transform = "translateX(-210px)"
    document.getElementById('pi3').style.transform = "translateX(-210px)"
    document.getElementById('pi4').style.transform = "translateX(-210px)"
    $a=+20

})

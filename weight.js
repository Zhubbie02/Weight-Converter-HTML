document.getElementById('valNum').addEventListener('input', function(e){
    let gram = e.target.value;
    document.getElementById('kg').innerHTML= gram/1000
    document.getElementById('lbs').innerHTML= gram*0.0022046
    document.getElementById('oz').innerHTML= gram*0.035274
})

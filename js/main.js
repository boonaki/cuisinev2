document.querySelector("#hamburg").addEventListener('click', toggleSideBarOn)
document.querySelector("#hamburg2").addEventListener('click', toggleSideBarOff)


function toggleSideBarOn(){
    document.querySelector("#navigation").classList.toggle('active')
    document.querySelector('#hamburg').classList.add('hidden')
    document.querySelector('#hamburg2').classList.remove('hidden')
}

function toggleSideBarOff(){
    document.querySelector("#navigation").classList.toggle('active')
    document.querySelector('#hamburg2').classList.add('hidden')
    document.querySelector('#hamburg').classList.remove('hidden')
}
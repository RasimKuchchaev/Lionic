window.addEventListener('DOMContentLoaded', function() {
    // console.log(document.querySelector('#text'))
    // console.log(document.querySelectorAll('.text'))
    // document.querySelector('#text').style.color = 'red'
    // document.querySelector('#text').style.display = 'none'
    // document.querySelector('#text').style.backgroundColor = 'green'
    // document.querySelector('#text').classList.add('alert')
    document.querySelectorAll('.text').forEach(function(elem) {
        elem.classList.add('alert')
    })
    console.log(document.getElementById('text'))

    console.log(document.getElementsByTagName('p'))
    console.log(document.querySelectorAll('p'))
})
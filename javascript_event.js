window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    document.querySelectorAll('.text').forEach(function(elem) {
        elem.addEventListener('click', function(event) {
            event.target.classList.toggle('alert')
        })
    })
})
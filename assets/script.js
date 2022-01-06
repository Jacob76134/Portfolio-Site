const panels = document.querySelectorAll('.panel')
const hoverInfo = document.querySelector('.hover-info')
const hoverTitle = document.querySelector('.hover-title')
const blurb = document.querySelector('.blurb')
const gitLink = document.getElementById('gitlink')


// Panel Animation
panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses ()
        panel.classList.add('active')
    })
})

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses ()
        panel.classList.add('active')
    })
})


function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Info Update
document.getElementById('weather-dashboard').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'Weather Dashboard';
    gitLink.href = 'https://github.com/Jacob76134/Weather-Dashboard';
    blurb.textContent = 'Definitely my favorite project to date. Using data from a weather API and displaying it in different ways is simply delightful';
})

document.getElementById('cyclist').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'Cyclist';
    gitLink.href = 'https://wl0194.github.io/Cyclist/';
    blurb.textContent = 'One of the more challenging group projects as we had to pivot our development direction on short notice, very happy with the result';
})

document.getElementById('horiseon').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'Horiseon';
    gitLink.href = 'https://jacob76134.github.io/refactoring-html-project/';
    blurb.textContent = 'A fun and simple site with a large showcase that shows the power of HTML and CSS';
})
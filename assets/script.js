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
document.getElementById('typing-warrior').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'Typing Warrior';
    gitLink.href = 'https://github.com/wl0194/Typing-Warrior';
    blurb.textContent = 'Create an account and put your skills to the test with this full stack typing test. Designing the UI was a fun creative challenge on this one';
    hoverInfo.classList.add('hover-info')
    hoverInfo.classList.remove('hover-info-left')
    // slideRight()
})

document.getElementById('weather-dashboard').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'Weather Dashboard';
    gitLink.href = 'https://github.com/Jacob76134/Weather-Dashboard';
    blurb.textContent = 'Definitely my favorite project to date. Using data from a weather API and displaying it in different ways is simply delightful';
    hoverInfo.classList.add('hover-info')
    hoverInfo.classList.remove('hover-info-left')
    // slideRight()
})

document.getElementById('cyclist').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'Cyclist';
    gitLink.href = 'https://wl0194.github.io/Cyclist/';
    blurb.textContent = 'One of the more challenging group projects as we had to pivot our development direction on short notice, very happy with the result';
    hoverInfo.classList.add('hover-info-left')
    hoverInfo.classList.remove('hover-info')
    // slideLeft()
})

// document.getElementById('horiseon').addEventListener('mouseover', () => {
//     hoverTitle.textContent = 'Horiseon';
//     gitLink.href = 'https://jacob76134.github.io/refactoring-html-project/';
//     blurb.textContent = 'A fun and simple site with a large showcase that shows the power of HTML and CSS';
// })

document.getElementById('wireframes').addEventListener('mouseover', () => {
    hoverTitle.textContent = 'My Wireframes';
    gitLink.href = 'https://github.com/Jacob76134/wireframes'
    blurb.textContent = 'Hard to design without wireframing. View my wireframe designs on github by clicking the github icon, or clicking the image will take you to Google Drive';
    hoverInfo.classList.add('hover-info-left')
    hoverInfo.classList.remove('hover-info')
    // slideLeft()
})

// function slideLeft () {
//     hoverInfo.style.right = '0';
//     hoverInfo.style.left = 'unset';
// }
// function slideRight () {
//     hoverInfo.style.left = '0';
//     hoverInfo.style.right = 'unset';
// }
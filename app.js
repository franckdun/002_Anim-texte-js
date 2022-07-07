const txtAnim = document.querySelector('h1');

console.log(new Typewriter(txtAnim));

new Typewriter(txtAnim, {
    loop: true,
    // deleteSpeed: 20
})
    .changeDelay(50)
    .typeString('I\'m Franckdun')
    .pauseFor(300)
    .typeString('<strong>, Dev Full-Stack</strong> !')
    .pauseFor(3000)
    .deleteChars(13)
    .pauseFor(300)
    .typeString('<strong>eloper ? </strong>')

    .pauseFor(1000)
    .deleteChars(9)
    .typeString('<span style="color: #27ae60;"> CSS</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: midnightblue;"> React</span> !')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('<span style="color: #ea39ff;"> PhP</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: #ff6910;"> JavaScript</span> !')
    .pauseFor(1000)
    .start()

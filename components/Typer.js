window.malarkey = require('malarkey');


export default function Typer() {
    let el = document.querySelector('#typer');
     if (!el) return;
     let initialText = el.textContent;
     let pause = 800
     let opts = {
       speed: 80,
       loop: true,
       postfix: ''
     };

   let typist = malarkey(el, opts);
   typist.delete(initialText.length)
     .type('Design.').pause(pause).delete(7)
     .type('Front-End.').pause(pause).delete(10)
     .type('Back-End.').pause(pause).delete(9)
     .type('UI.').pause(pause).delete(3)
     .type('UX.').pause(pause).delete(3)
     .type('JavaScript.').pause(pause).delete(11)
     .type('React.').pause(pause).delete(6)
     .type('Performance.').pause(pause).delete(12)
     .type('Frameworks.').pause(pause).delete(11)
}
setTimeout(Typer, 3000);

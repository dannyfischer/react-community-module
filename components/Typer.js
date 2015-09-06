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
     .type('UX.').pause(pause).delete(3)
     .type('UI.').pause(pause).delete(3)
     .type('Front-End.').pause(pause).delete(10)
     .type('React.').pause(pause).delete(6)
     .type('PHP.').pause(pause).delete(4)
     .type('Back-End.').pause(pause).delete(9)
     .type('Performance.').pause(pause).delete(12)
     .type('Sass.').pause(pause).delete(5)
     .type('Build Systems.').pause(pause).delete(14)
     .type('MV*.').pause(pause).delete(4);
}
setTimeout(Typer, 3000);

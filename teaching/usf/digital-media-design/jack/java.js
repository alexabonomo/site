$(function(){
    var $jittery = $('.jittery'),
        aText    = $jittery.text().split(''),
        letters = '';
    
    for(var i = 0; i < aText.length; i++){
      letters += '<span>'+aText[i]+'</span>';
    }
    
    $jittery.empty().append(letters);
    
    $.each($('span', $jittery), function(i){
      $(this).css('animation-delay', '-'+i+'70ms');
      span.textContent = character;
    });
  });










//   https://codepen.io/punkydrewster713/pen/zYKdywP

// var container = document.querySelector(".text");

// var speeds = {
//    pause: 500, //Higher number = longer delay
//    slow: 120,
//    normal: 90,
//    fast: 40,
//    superFast: 10
// };

// var textLines = [
//    { speed: speeds.slow, string: "Oh, hello!" },
//    { speed: speeds.pause, string: "", pause: true },
//    { speed: speeds.normal, string: "Have you seen my pet" },
//    { speed: speeds.fast, string: "frog", classes: ["green"] },
//    { speed: speeds.normal, string: "around?" }
// ];


// var characters = [];
// textLines.forEach((line, index) => {
//    if (index < textLines.length - 1) {
//       line.string += " "; //Add a space between lines
//    }

//    line.string.split("").forEach((character) => {
//       var span = document.createElement("span");
//       span.textContent = character;
//       container.appendChild(span);
//       characters.push({
//          span: span,
//          isSpace: character === " " && !line.pause,
//          delayAfter: line.speed,
//          classes: line.classes || []
//       });
//    });
// });

// function revealOneCharacter(list) {
//    var next = list.splice(0, 1)[0];
//    next.span.classList.add("revealed");
//    next.classes.forEach((c) => {
//       next.span.classList.add(c);
//    });
//    var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

//    if (list.length > 0) {
//       setTimeout(function () {
//          revealOneCharacter(list);
//       }, delay);
//    }
// }

// //Kick it off
// setTimeout(() => {
//    revealOneCharacter(characters);   
// }, 600)


var text = $('.jittery').val();

text = text.replace(/>.+[\r\n]+/g, function(a){
    return '<span class="quote">' + a + '</span>';
})











// https://codepen.io/jjsoini/pen/vyzNGa
var controller = new ScrollMagic.Controller();

 //flow
 $(".flow").each(function(){
    $(this).addClass('out');
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
      duration: 600
    })
    .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .addTo(controller);
  });

 //fade
  $(".fade").each(function(){
    $(this).addClass('out');
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.65
    })
    .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .addTo(controller);
  });

$('.text').removeClass('out');









  /* https://kasper.io/How-to-create-transition-effect-between-pages/ */
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});




// class TypeWriter {  
//   constructor(el, rate=50) {
//     this.el = el;
//     this.text = el.innerText;
//     this.pos = 0;
//     this.rate = rate;
//   }
  
//   play() {
//     this.pause();
//     this.el.innerText = this.timer 
//       ? this.text.substring(0, this.pos) 
//       : ""; 
//     this.timer = this.createTimer();
//   }
  
//   pause() {
//     clearInterval(this.timer);
//   }
  
//   setRate(rate) {
//     this.rate = rate;
//     this.play();
//   }
  
//   createTimer() {
//     this.pause();
//     return setInterval(() => {
//       if (this.el.innerText.length === this.text.length
//          || this.pos > this.text.length) {
//         this.pause();
//         this.pos = 0;
//       } else {
//         this.el.innerText += this.text[this.pos++];
//       }
//     }, this.rate);
//   }
// }

// const tw = new TypeWriter(document.querySelector("#plop"));
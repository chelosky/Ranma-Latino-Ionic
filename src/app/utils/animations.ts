import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
export const transAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);

  
export const fadeIn = trigger('fadeIn', [      
    transition('void => *', [
      style({opacity: 0}),
      animate(1000, style({opacity: 1}))
    ]),
    transition('* => void', [
      animate(1000, style({opacity: 0}))
    ])
]);
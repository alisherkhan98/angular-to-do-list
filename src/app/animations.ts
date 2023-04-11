import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const itemAnimation = trigger('simpleFadeAnimation', [
  state('in', style({ opacity: 1 })),

  transition(':enter', [style({ opacity: 0 }), animate(200)]),

  transition(':leave',  [
    animate("200ms", style({ backgroundColor: 'rgb(255, 115, 115) ' })),
    animate("200ms 200ms", style({ opacity: 0 }))
  ]),
]);

import {
  Component, Input, Output, EventEmitter, style, state, animate, transition, trigger,
  ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-modal',
  moduleId: module.id,
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(300, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({opacity:0}))
      ])
    ])
  ]
})
export class ModalComponent {

  @Input() imgUrl: string;
  @Input() display: boolean;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('modal') modal: ElementRef;

  constructor() { }
  onModalClick(event: Event) {
    // obrazek zmizi
    //this.display = false;
    if(event.target === this.modal.nativeElement){
      this.notify.emit(false);
    } else {
      event.stopPropagation();
    }
  }
  onCrossClick(event: Event)
  {
    this.notify.emit(false);
  }

}

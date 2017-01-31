import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-polaroid',
  moduleId: module.id,
  templateUrl: './polaroid.component.html',
  styleUrls: ['polaroid.component.scss']
})
export class PolaroidComponent implements OnInit {
  @Input() imgDescript: string; //string proto, aby se tam nemohlo ulozit neco jinyho
  @Input() imgUrl: string; //cesta? //pased to modal
  @Input() descriptPlacement: boolean;
  display: boolean = false;//pased to modal

  constructor() { }

  ngOnInit() {
    //podle descriptPlacemept swap img a p? stuctural directive?
  }
  /**
   * Handles click events.
   */
  onClick() {
    // obrazek zobrazi - musim dat vedet komponentne modal - jak?

    this.display = true;
  }
  onKeyClick(event)
  {
    if (event.key === "Enter")
    {
      this.display = true;
    }
  }
  onNotify(displayed:boolean):void {
    this.display = displayed;
  }
}

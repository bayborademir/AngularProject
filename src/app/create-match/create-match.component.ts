import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
dragPosition: any;
  constructor() { }

  ngOnInit(): void {
  }

  dragEnd(e:any) {
    console.log(e);
    this.dragPosition = e.dropPoint;
    
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteres-card',
  templateUrl: './characteres-card.component.html',
  styleUrls: ['./characteres-card.component.scss']
})
export class CharacteresCardComponent implements OnInit {
@Input() character;
  constructor() { }

  ngOnInit(): void {
  }

}

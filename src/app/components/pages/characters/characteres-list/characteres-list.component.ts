import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-characteres-list',
  templateUrl: './characteres-list.component.html',
  styleUrls: ['./characteres-list.component.scss']
})
export class CharacteresListComponent implements OnInit {

  //INYECTAR SERVICES
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    //LLAMAR AL SERVICIO
    console.log('Inicia charactera list..');
    this.dataSvc.getDataAPI();
  }

}

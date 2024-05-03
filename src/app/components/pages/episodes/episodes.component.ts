import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  //CREAR VARIABLE IGUALANDO A LA PROPIEDAD OBSERVABLE
  episodes$;

  //INYECTA SERVICIO
  constructor( private dataService : DataService) { }

  ngOnInit(): void {
    this.episodes$ = this.dataService.episodes$;
    this.episodes$.subscribe((episodes) => {
      console.log('Episodes:', episodes);
    });
  }

}

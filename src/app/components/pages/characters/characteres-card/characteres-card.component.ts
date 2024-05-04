import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-characteres-card',
  templateUrl: './characteres-card.component.html',
  styleUrls: ['./characteres-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush //EL COMPONENTE SE RENDERIZE CUANDO LA PROPIEDAD CAMBIE
})
export class CharacteresCardComponent implements OnInit {
@Input() character:Character;
  constructor() { }

  ngOnInit(): void {
  }


  getIcon() : string{
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }
  
  toggleFavorite():void{
    const isFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite = !isFavorite;//VALIDA PARA SER TRUE O FALSE
    //validar que favorite este definido como propiedad 
  }

}

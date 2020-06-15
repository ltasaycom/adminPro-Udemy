import { Component, OnInit} from '@angular/core';
import { SettingsService } from 'src/app/services/services.index';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor(private ajustesService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(theme: string, link: any) {
    this.ajustesService.aplicarTema(theme);
    this.aplicarCheck( link );
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName(' selector ');

    let tema = this.ajustesService.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme' ) === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}

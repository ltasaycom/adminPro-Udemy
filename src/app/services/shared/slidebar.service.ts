import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Grafica', url: '/grafica1' }
      ]
    }
  ];

  constructor() { }
}

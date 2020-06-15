import { Component, OnInit } from '@angular/core';
import { SlidebarService } from 'src/app/services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public sideBarService: SlidebarService) { }

  ngOnInit() {
  }

}

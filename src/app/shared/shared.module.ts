import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  declarations: [HeaderComponent,
                 SidebarComponent,
                 BreadCrumbsComponent,
                 NoPageFoundComponent],
  exports: [HeaderComponent,
            SidebarComponent,
            BreadCrumbsComponent,
            NoPageFoundComponent]
})
export class SharedModule { }

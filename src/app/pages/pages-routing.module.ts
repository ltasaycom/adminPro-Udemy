import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Graficas1Component },
          { path: 'account-setting', component: AccountSettingComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

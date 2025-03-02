import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdddivComponent } from './components/division/adddiv/adddiv.component';
import { EditdivComponent } from './components/division/editdiv/editdiv.component';
import { GetalldivComponent } from './components/division/getalldiv/getalldiv.component';
import { AddempComponent } from './components/employee/addemp/addemp.component';
import { GetempComponent } from './components/employee/getemp/getemp.component';
import { GetempbyidComponent } from './components/employee/getempbyid/getempbyid.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'employees',
    component: GetempComponent,
  },
  {
    path: 'employees/add',
    component: AddempComponent,
  },
  {
    path: 'employees/edit/:id',
    component: GetempbyidComponent,
  },
  {
    path: 'divisions',
    component: GetalldivComponent,
  },
  {
    path: 'divisions/add',
    component: AdddivComponent,
  },
  {
    path: 'divisions/edit/:id',
    component: EditdivComponent,
  },
];

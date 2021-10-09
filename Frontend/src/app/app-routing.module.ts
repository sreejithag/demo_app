import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DetailsComponent } from './details/details.component';
import { ListDataComponent } from './list-data/list-data.component';

const routes: Routes = [
  { path: '', component: AddDataComponent },
  {path: 'details/:email', component: DetailsComponent},
  {path: 'list', component: ListDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

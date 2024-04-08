import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  {
    path: 'session',
    loadChildren: () =>
      import('../session/session.module').then((m) => m.SessionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

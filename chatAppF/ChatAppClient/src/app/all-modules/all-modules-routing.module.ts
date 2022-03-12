import { ChatModule } from './chat/chat.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [
 {
   path: '',
   component: AllModulesComponent,
   children: [
      {
          path: '',
          loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
      },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }

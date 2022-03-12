import { StartChatComponent } from './components/startChat/start-chat/start-chat.component';
import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:ChatComponent,
    children:
    [
      {
        path: 'start-chat',
        component:StartChatComponent
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { StartChatComponent } from './components/startChat/start-chat/start-chat.component';


@NgModule({
  declarations: [ChatComponent, StartChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }

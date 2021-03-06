import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加

import { AppComponent } from './app.component';
import { ChatDatePipe } from './pipe/chat-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChatDatePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
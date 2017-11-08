import { FormsModule } from '@angular/forms';
import { FileDropDirective } from 'ng2-file-upload/file-upload/file-drop.directive';
import { FileSelectDirective } from 'ng2-file-upload/file-upload/file-select.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FileUploader } from 'ng2-file-upload/file-upload/file-uploader.class';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});
}

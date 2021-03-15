import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'thinkdesign';
  dataList = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.dataList = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100");
  }
}

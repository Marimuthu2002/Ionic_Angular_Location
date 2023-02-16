import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api: HttpClient) { }
  postMoveies(body: any): Observable<any> {
    return this.api.post("https://63183522ece2736550c35b92.mockapi.io/edit", body);
  }
  getMoveies(): Observable<any> {
    return this.api.get("https://63183522ece2736550c35b92.mockapi.io/edit/");
  }
  editMoveies(id: any, body: any): Observable<any> {
    return this.api.put("https://63183522ece2736550c35b92.mockapi.io/edit/" + id, body);
  }
  deleteMoveies(id: any): Observable<any> {
    return this.api.delete("https://63183522ece2736550c35b92.mockapi.io/edit/" + id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IFood} from "./food.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  API_URL = 'http://localhost:3000/foods'

  getAll(): Observable<IFood[]> {
    return this.http.get<IFood[]>(this.API_URL);
  }
}

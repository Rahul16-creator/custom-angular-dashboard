import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class DashBoardService{
    constructor(private httpClient : HttpClient) {}
    API = "https://custom-angular-nest-dashboard.herokuapp.com/";

    fetchData() {
        return this.httpClient.get(this.API)
    }
}
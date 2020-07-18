import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as publicIp from 'public-ip';


@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor(private readonly httpClient: HttpClient) { }


  getPublicIp() {
    return publicIp.v4();
  }

}

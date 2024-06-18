import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  // GET LIST GET localhost:8080/api/partners
  getListPartner(): Observable<any> {
    return this.http.get<any>('/assets/json/listPartner.json');
  }
  // GET FEATURE GET localhost:8080/api/features
  getListFeature(): Observable<any> {
    return this.http.get<any>('/assets/json/listFeature.json');
  }
  // GET PARTNER_FEATURE GET localhost:8080/api/partner_feature/{corpCd}
  getListPartnerFeature(corpCd: any): Observable<any> {
    return this.http.get<any>('/assets/json/partnerFeatureList.json');
  }
}

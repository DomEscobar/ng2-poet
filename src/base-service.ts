import { Component, Injectable, Injector } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

declare var unescape: any;

export class BaseService
{
  protected http: Http;
  protected APIURL = 'https://api.frost.po.et/';

  public token = '';

  constructor(private injector: Injector)
  {
    // in case we want more services
    this.http = this.injector.get(Http);
  }

  /**
   * Appends a proxy url to the api address
   * @param proxyurl
   */
  appendProxy(proxyurl: string = 'https://cors-anywhere.herokuapp.com')
  {
    this.APIURL = this.APIURL + '/' + proxyurl;
  }

  /**
   * http get
   * @param path
   * @param param
   */
  get(path: string, param: any = '', token = this.token): Observable<Response>
  {
    if (token == null)
    {
      return Observable.throw('Token not initialized');
    }

    const observer = this.http.get(this.APIURL + path + '/' + param, {
      headers: this.getHeader(token)
    });

    return observer;
  }

  /**
   * http post
   * @param path
   * @param param
   */
  post(path: string, creaditals: any = '', tokenRequired: boolean = false, token = this.token): Observable<Response>
  {
    if (token == null && tokenRequired)
    {
      return Observable.throw('Token not initialized');
    }

    const observer = this.http.post(this.APIURL + path, creaditals, {
      headers: this.getHeader(token)
    });

    return observer;
  }

  /**
 * http put
 * @param path
 * @param param
 */
  put(path: string, creds: any = '', tokenRequired: boolean = true, token = this.token): Observable<Response>
  {
    if (token == null && tokenRequired)
    {
      return Observable.throw('Token not initialized');
    }

    const observer = this.http.put(this.APIURL + path, creds, {
      headers: this.getHeader(token)
    });

    return observer;
  }

  delete(path: string, id: any = '', token = this.token): Observable<Response>
  {
    const observer = this.http.delete(this.APIURL + path + '/' + id, {
      headers: this.getHeader(token)
    });

    return observer;
  }

  private getHeader(token = this.token, content: string = 'application/json'): Headers
  {
    const authHeader = new Headers({
      'Content-Type': content,
      token
    });

    return authHeader;
  }
}

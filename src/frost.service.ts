import { Injectable, Injector } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from './base-service';
import { Account } from './models/account';
import { Observable } from 'rxjs/Observable';
import { WorkAttributes } from './models/workAttributes';
import { Profile } from './models/profile';
import { ApiToken } from './models/apiToken';
import { Work } from 'models/work';

@Injectable()
export class FrostService extends BaseService
{
  constructor(injector: Injector)
  {
    super(injector);
  }

  /**
   * Set the token of a client and no more token is required 
   * @param token
   */
  setToken(token: string)
  {
    this.token = token;
  }

  getToken()
  {
    return this.token;
  }

  /**
   * Create a new account
   * @param account
   */
  CreateAccount(account: Account): Observable<{ token: string }>
  {
    return this.post('accounts', account).map((response) =>
    {
      return <{ token: string }>response.json();
    });
  }

  /**
   * Log the person in with standard creditals 
   * @param account
   */
  Login(account: Account): Observable<{ token: string }>
  {
    return this.post('login', account).map((response) =>
    {
      return <{ token: string }>response.json();
    });
  }

  /**
   * Verify an account on poet
   * @param token
   */
  VerifyAccount(token = this.token): Observable<string>
  {
    return this.get('accounts/verify', token).map((response) =>
    {
      return <string>response.toString();
    });
  }

  /**
   * Send a email to reset the password
   * @param email
   */
  ForgotPassword(email: string, token = this.token): Observable<string>
  {
    const asObj = { email: email };

    return this.post('password/reset', asObj, true, token).map((response) =>
    {
      return <string>response.json();
    });
  }

  /**
  * Change the password
  * @param password
  * @param token
  */
  ChangePassword(password: string, token = this.token): Observable<string>
  {
    const asObj = { password: password };

    return this.post('password/change', asObj, true, token).map((response) =>
    {
      return <string>response.json();
    });
  }

  /**
  * Create a new work :: setToken() required
  * @param password
  */
  CreateWork(work: WorkAttributes, token = this.token): Observable<Work>
  {
    return this.post('works', work, true, token).map((response) =>
    {
      return <Work>response.json();
    });
  }

  /**
   * Get a work by workId and optional token if other works 
   * @param workId
   * @param token
   */
  GetWork(workId: string, token = this.token): Observable<WorkAttributes>
  {
    return this.get('works', workId, token).map((response) =>
    {
      return <WorkAttributes>response.json();
    });
  }

  /**
   * Get all works of an account
   * @param workId
   */
  GetWorks(token = this.token): Observable<WorkAttributes[]>
  {

    return this.get('works', '', token).map((response) =>
    {
      return <WorkAttributes[]>response.json();
    });
  }

  /**
  * Get apitoken
  */
  GetApiTokens(token = this.token): Observable<ApiToken>
  {
    return this.get('tokens', '', token).map((response) =>
    {
      return <ApiToken>response.json();
    });
  }

  /**
   * Get profile
   */
  GetProfile(token = this.token): Observable<Profile>
  {
    return this.get('accounts/profile', '', token).map((response) =>
    {
      return <Profile>response.json();
    });
  }
}

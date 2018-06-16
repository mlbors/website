/**
 * Website - Data Service - Service
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

import { IDataService } from '../interfaces/idata-service';
import { IMenu } from '../interfaces/imenu';
import { INavigationItem } from '../interfaces/inavigation-item';
import { IQueryable } from '../interfaces/iqueryable';

/********************************************************************************/
/********************************************************************************/

/**********************************/
/********** DATA SERVICE **********/
/**********************************/

@Injectable()
export class DataService implements IDataService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var String _menusJsonUrl url to json data for menus
   * @var String _navigationItemsJsonRul url to json data for navigation items
   * @var Array<IMenu> _menusJson data for menus
   * @var Array<INavigationItem> _navigationItemsJson data for navigation items
   * @var Array<IQueryable> navigation item prepared data for menus
   */

  private _menusJsonUrl = 'assets/data/json/menus.json';
  private _navigationItemsJsonUrl = 'assets/data/json/navigation-items.json';

  private _menusJson: Array<IMenu>;
  private _navigationItemsJson: Array<INavigationItem>;

  public navigationData: Array<IQueryable>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param HttpClient http http client
   */

  /**
   * see 
   * https://github.com/jhades/angular2-rxjs-observable-data-services/blob/master/src/TodoBackendService.ts
   * https://github.com/jhades/angular2-rxjs-observable-data-services/blob/master/src/state/TodoStore.ts
   * https://stackoverflow.com/questions/39319279/convert-promise-to-observable
   */

  constructor(private http: HttpClient) {
    console.warn('::: DATA SERVICE :::');
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET DATA **********/
  /******************************/

  /**
   * @return Promise
   */

  public getData() {
    return new Observable(observer => {
      this._subscribeToDataFeed().then(result => {
        const data = {
          navigationData: this.navigationData
        };
        observer.next(data);
        observer.complete();
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** SUBSCRIBE TO DATA FEED **********/
  /********************************************/

  /**
   * @return Promise
   */

  private _subscribeToDataFeed() {
    return new Promise((resolve, reject) => {
      const menusFeed = this.http.get<Array<IMenu>>(this._menusJsonUrl);
      const navigationItemsFeed = this.http.get<Array<INavigationItem>>(this._navigationItemsJsonUrl);

      forkJoin([
        menusFeed,
        navigationItemsFeed
      ]).subscribe(data => {
        this._menusJson = data[0];
        this._navigationItemsJson = data[1];

        this._prepareData().then(result => {
          resolve();
          return;
        });
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** PREPARE DATA **********/
  /**********************************/

  /**
   * @return Promise
   */

  private _prepareData() {
    return new Promise((resolve, reject) => {
      Promise.all([
        this._prepareNavigationData()
      ]).then(result => {
        resolve();
        return;
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************/
  /********** PREPARE NAVIGATION DATA **********/
  /*********************************************/

  /**
   * @return Promise
   */

  private _prepareNavigationData() {
    return new Promise((resolve, reject) => {
      const menus = this._menusJson;

      menus.forEach(m => {
        m.items = this._navigationItemsJson.filter(i => i.menu === m.id);
      });

      this.navigationData = menus as Array<IQueryable>;
      resolve();
      return;
    });
  }

}

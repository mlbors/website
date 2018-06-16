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
import { IPost } from '../interfaces/ipost';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITerm } from '../interfaces/iterm';
import { IType } from '../interfaces/itype';
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
   * @var String _postsItemsJsonRul url to json data for posts
   * @var String _taxonomiesItemsJsonRul url to json data for taxonomies
   * @var String _termsItemsJsonRul url to json data for terms
   * @var String _typesItemsJsonRul url to json data for types
   * @var Array<IMenu> _menus data for menus
   * @var Array<INavigationItem> _navigationItems data for navigation items
   * @var Array<IPost> _posts data for posts
   * @var Array<ITaxonomy> _taxonomies data for taxonomies
   * @var Array<ITerm> _terms data for terms
   * @var Array<IType> _types data for types
   * @var Array<IQueryable> navigationData prepared data for menus
   * @var Array<IQueryable> postsData prepared data for posts
   * @var Array<IQueryable> taxonomiesData prepared data for taxonomies
   * @var Array<IQueryable> termsData prepared data for terms
   */

  private _menusJsonUrl = 'assets/data/json/menus.json';
  private _navigationItemsJsonUrl = 'assets/data/json/navigation-items.json';
  private _postsJsonUrl = 'assets/data/json/posts.json';
  private _taxonomiesJsonUrl = 'assets/data/json/taxonomies.json';
  private _termsJsonUrl = 'assets/data/json/terms.json';
  private _typesJsonUrl = 'assets/data/json/types.json';

  private _posts: Array<IPost>;
  private _menus: Array<IMenu>;
  private _navigationItems: Array<INavigationItem>;
  private _taxonomies: Array<ITaxonomy>;
  private _terms: Array<ITerm>;
  private _types: Array<IType>;

  public navigationData: Array<IQueryable>;
  public postsData: Array<IQueryable>;
  public taxonomiesData: Array<IQueryable>;
  public termsData: Array<IQueryable>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param HttpClient http http client
   */
  
  constructor(private http: HttpClient) {
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
        this._menus = data[0];
        this._navigationItems = data[1];

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
      const menus = this._menus;

      menus.forEach(m => {
        m.items = this._navigationItems.filter(i => i.menu === m.id);
      });

      this.navigationData = menus as Array<IQueryable>;
      resolve();
      return;
    });
  }

}

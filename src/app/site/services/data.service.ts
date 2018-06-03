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
   * @var Object _menusJson json data for menus
   * @var Array<IQueryable> menus prepared data for menus
   */

  private _menusJsonUrl = 'assets/data/json/menus.json';
  private _menusJson: Object;

  public menus: Array<IQueryable>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  constructor(private http: HttpClient) {

    console.warn('::: DATA SERVICE :::');

    this.http.get(this._menusJsonUrl).subscribe(data => {
      this._menusJson = data;
      console.warn('::: DATA MENUS :::');
      console.log(this._menusJson);
    });

    this._prepareData();
  }

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** PREPARE DATA **********/
  /**********************************/

  private _prepareData() {
    this._prepareNavigationData();
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************/
  /********** PREPARE NAVIGATION DATA **********/
  /*********************************************/

  private _prepareNavigationData() {

  }
  
}

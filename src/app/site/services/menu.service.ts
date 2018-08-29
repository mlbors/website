/**
 * Website - Menu Service - Service
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
import { Observable } from 'rxjs';

import { IDataService } from '../interfaces/idata-service';
import { IMenu } from '../interfaces/imenu';
import { IMenuService } from '../interfaces/imenu-service';
import { IQueryable } from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { IWebData } from '../interfaces/iweb-data';

import { DataService } from './data.service';

/********************************************************************************/
/********************************************************************************/

/**********************************/
/********** MENU SERVICE **********/
/**********************************/

@Injectable()
export class MenuService implements IQueryService, IMenuService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IDataService _dataService service for data
   * @var Array<IMenu> _data data to use
   */

  private _dataService: IDataService;
  private _data: Array<IMenu>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IDataService dataService service for data
   */

  constructor(dataService: DataService) {
    this._setValues(dataService);
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param IDataService dataService service for data
   */

  private _setValues(dataService: IDataService) {
    this._setDataService(dataService);
    this._getData();
  }

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** SET DATA SERVICE **********/
  /**************************************/

  /**
   * @param IDataService dataService service for data
   */

  private _setDataService(dataService: IDataService) {
    this._dataService = dataService;
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET DATA **********/
  /******************************/

  /**
   * @return Observable<IWebData>
   */

  private _getData(): Observable<IWebData> {
    return new Observable(observer => {
      this._dataService.getData().subscribe(result => {
        this._data = result.navigationData as Array<IMenu>;
        observer.next(result);
        observer.complete();
        return;
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*****************************/
  /********** GET ALL **********/
  /*****************************/

  /**
   * @return Array<IQueryable>
   */

  getAll(): Array<IQueryable> {
    return this._data;
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET BY ID **********/
  /*******************************/

  /**
   * @param String id object id
   * @return IQueryable
   */

  getByID(id: string): IQueryable {
    return this._data.find(menu => menu.id === id);
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** GET BY SLUG **********/
  /*********************************/

  /**
   * @param String slug object slug
   * @return IQueryable
   */

  getBySlug(slug: string): IQueryable {
    return this._data.find(menu => menu.slug === slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** GET ALL ASYNC **********/
  /***********************************/

  /**
   * @return Observable<Array<IQueryable>>
   */

  getAllAsync(): Observable<Array<IQueryable>> {
    return new Observable(observer => {
      this._getData().subscribe(data => {
        const result = this.getAll();
        observer.next(result);
        observer.complete();
        return;
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET BY ID ASYNC **********/
  /*************************************/

  /**
   * @param String id object id
   * @return Observable<IQueryable>
   */

  getByIDAsync(id: string): Observable<IQueryable> {
    return new Observable(observer => {
      if (!id || id.length < 0) {
        observer.next(null);
        observer.complete();
        return;
      }

      this._getData().subscribe(data => {
        const result = this.getByID(id);
        observer.next(result);
        observer.complete();
        return;
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET BY SLUG ASYNC **********/
  /***************************************/

  /**
   * @param String slug object slug
   * @return Observable<IQueryable>
   */

  getBySlugAsync(slug: string): Observable<IQueryable> {
    return new Observable(observer => {
      if (!slug || slug.length < 0) {
        observer.next(null);
        observer.complete();
        return;
      }

      this._getData().subscribe(data => {
        const result = this.getBySlug(slug);
        observer.next(result);
        observer.complete();
        return;
      });
    });
  }

}

/**
 * Website - Term Service - Service
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
import { IQueryable } from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { ITermService } from '../interfaces/iterm-service';
import { ITerm } from '../interfaces/iterm';

import { DataService } from './data.service';

/********************************************************************************/
/********************************************************************************/

/**********************************/
/********** TERM SERVICE **********/
/**********************************/

@Injectable()
export class TermService implements IQueryService, ITermService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IDataService _dataService service for data
   * @var Array<ITerm> _data data to use
   */

  private _dataService: IDataService;
  private _data: Array<ITerm>;

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
   * @return Observable<object>
   */

  private _getData(): Observable<object> {
    return new Observable(observer => {
      this._dataService.getData().subscribe(result => {
        console.log(result);
        this._data = result.navigationData;
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
    return this._data.find(term => term.id === id);
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
    return this._data.find(term => term.slug === slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** GET ALL ASYNC **********/
  /***********************************/

  /**
   * @return Observable<IQueryable>
   */

  getAllAsync(): Observable<IQueryable> {
    return new Observable(observer => {
      this._getData().subscribe(data => {
        const result = data;
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

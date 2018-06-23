/**
 * Website - Taxonomy Service - Service
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
import { ITaxonomyService } from '../interfaces/itaxonomy-service';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITerm } from '../interfaces/iterm';
import { IWebData } from '../interfaces/iweb-data';

import { DataService } from './data.service';
import { TermService } from './term.service';

/********************************************************************************/
/********************************************************************************/

/**************************************/
/********** TAXONOMY SERVICE **********/
/**************************************/

@Injectable()
export class TaxonomyService implements IQueryService, ITaxonomyService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IDataService _dataService service for data
   * @var IQueryService termService querier serivce
   * @var Array<ITaxonomy> _data data to use
   */

  termService: IQueryService;
  private _dataService: IDataService;
  private _data: Array<ITaxonomy>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IDataService dataService service for data
   * @param IQueryService termService service to use for terms
   */

  constructor(dataService: DataService, termService: TermService) {
    this._setValues(dataService, termService);
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param IDataService dataService service for data
   * @param IQueryService termService service to use for terms
   */

  private _setValues(dataService: IDataService, termService: TermService) {
    this._setDataService(dataService);
    this._setTermService(termService);
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

  /**************************************/
  /********** SET TERM SERVICE **********/
  /**************************************/

  /**
   * @param IQueryService termService service to use for terms
   */

  private _setTermService(termService: TermService) {
    this.termService = termService;
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
        console.log(result);
        this._data = result.taxonomiesData as Array<ITaxonomy>;
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
    return this._data.find(taxonomy => taxonomy.id === id);
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
    return this._data.find(taxonomy => taxonomy.slug === slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET TERMS **********/
  /*******************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Array<ITerm>
   */

  getTerms(id?: string, slug?: string): Array<ITerm> {
    if (id && id.length > 0) {
      const taxonomy = this.getByID(id) as ITaxonomy;
      return taxonomy.terms;
    }

    if (slug && slug.length > 0) {
      const taxonomy = this.getBySlug(slug) as ITaxonomy;
      return taxonomy.terms;
    }
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

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET TERMS ASYNC **********/
  /*************************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Observable<Array<ITerm>>
   */

  getTermsAsync(id?: string, slug?: string): Observable<Array<ITerm>> {
    return new Observable(observer => {
      if ((!id || id.length < 0) && (!slug && slug.length < 0)) {
        observer.next(null);
        observer.complete();
        return;
      }

      this._getData().subscribe(data => {
        const result = this.getTerms(id, slug);
        observer.next(result);
        observer.complete();
        return;
      });
    });
  }

}

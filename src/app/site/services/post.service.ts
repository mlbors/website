/**
 * Website - Post Service - Service
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
import { IMetaData } from '../interfaces/imeta-data';
import { IPost } from '../interfaces/ipost';
import { IPostService } from '../interfaces/ipost-service';
import { IQueryable } from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';

import { DataService } from './data.service';
import { TaxonomyService } from './taxonomy.service';

/********************************************************************************/
/********************************************************************************/

/**********************************/
/********** POST SERVICE **********/
/**********************************/

@Injectable()
export class PostService implements IQueryService, IPostService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IDataService _dataService service for data
   * @var IQueryService taxonomyService querier serivce
   * @var Array<IPost> _data data to use
   */

  taxonomyService: IQueryService;
  private _dataService: IDataService;
  private _data: Array<IPost>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IDataService dataService service for data
   * @param IQueryService taxonomyService service to use for taxonomies
   */

  constructor(dataService: DataService, taxonomyService: TaxonomyService) {
    this._setValues(dataService, taxonomyService);
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param IDataService dataService service for data
   * @param IQueryService taxonomyService service to use for taxonomies
   */

  private _setValues(dataService: IDataService, taxonomyService: TaxonomyService) {
    this._setDataService(dataService);
    this._setTaxonomyService(taxonomyService);
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

  /********************************************/
  /********** SET TAXONOMIES SERVICE **********/
  /********************************************/

  /**
   * @param IQueryService taxonomyService service to use for taxonomies
   */

  private _setTaxonomyService(taxonomyService: TaxonomyService) {
    this.taxonomyService = taxonomyService;
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
        this._data = result.postsData;
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
    return this._data.find(post => post.id === id);
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
    return this._data.find(post => post.slug === slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** GET META DATA **********/
  /***********************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Array<IMetaData>
   */

  getMeta(id?: string, slug?: string): Array<IMetaData> {
    if (id && id.length > 0) {
      const post = this.getByID(id) as IPost;
      return post.meta;
    }

    if (slug && slug.length > 0) {
      const post = this.getBySlug(slug) as IPost;
      return post.meta;
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

  /************************************/
  /********** GET META ASYNC **********/
  /************************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Observable<Array<IMetaData>>
   */

  getMetaAsync(id?: string, slug?: string): Observable<Array<IMetaData>> {
    return new Observable(observer => {
      if ((!id || id.length < 0) && (!slug && slug.length < 0)) {
        observer.next(null);
        observer.complete();
        return;
      }

      this._getData().subscribe(data => {
        const result = this.getMeta(id, slug);
        observer.next(result);
        observer.complete();
        return;
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** GET ALL BY CRITERIA **********/
  /*****************************************/

  /**
   * @param Object criteria object to use for filtering
   * @return Observable<Array<IQueryable>>
   */

  getAllByCriteria(criteria: object): Observable<Array<IQueryable>> {
    return new Observable(observer => {
      this._getData().subscribe(data => {
        Promise.all((data as Array<IQueryable>).filter(obj => {
          return Object.keys(criteria).every(c => {
            return obj[c] === criteria[c];
          });
        })).then(result => {
          observer.next(result);
          observer.complete();
          return;
        });
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET ALL BY TYPE **********/
  /*************************************/

  /**
   * @param String slug type slug
   * @return Observable<Array<IQueryable>>
   */

  getAllByType(slug: string): Observable<Array<IQueryable>> {
    return new Observable(observer => {
      this._getData().subscribe(data => {
        Promise.all((data as Array<IQueryable>).filter(obj => {
          const post = obj as IPost;
          return post.type.slug === slug;
        })).then(result => {
          observer.next(result);
          observer.complete();
          return;
        });
      });
    });
  }

}

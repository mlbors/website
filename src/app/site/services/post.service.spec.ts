/**
 * Website - Post Service - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { IDataService } from '../interfaces/idata-service';
import { IMetaData } from '../interfaces/imeta-data';
import { IPost } from '../interfaces/ipost';
import { IPostService } from '../interfaces/ipost-service';
import { IQueryable} from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITaxonomyService } from '../interfaces/itaxonomy-service';
import { ITerm} from '../interfaces/iterm';
import { ITermService } from '../interfaces/iterm-service';
import { IWebData } from '../interfaces/iweb-data';

import { DataService } from './data.service';
import { TaxonomyService } from './taxonomy.service';
import { TermService } from './term.service';

import { PostService } from './post.service';

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** MOCK DATA SERVICE **********/
/***************************************/

class MockDataService implements IDataService {
  getData(): Observable<IWebData> {
    const result: IWebData = {
      navigationData: null,
      postsData: null,
      taxonomiesData: null,
      termsData: null
    };
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }
}

/********************************************************************************/
/********************************************************************************/

/*******************************************/
/********** MOCK TAXONOMY SERVICE **********/
/*******************************************/

class MockTaxonomyService implements IQueryService, ITaxonomyService {
  termService: IQueryService;

  getAll(): Array<IQueryable> {
    const result: IQueryable = {};
    return [result];
  }

  getByID(id: string): IQueryable {
    const result: IQueryable = {};
    return [result];
  }

  getBySlug(slug: string): IQueryable {
    const result: IQueryable = {};
    return [result];
  }

  getTerms(id?: string, slug?: string): Array<ITerm> {
    const result: Array<ITerm> = [];
    return result;
  }

  getAllAsync(): Observable<IQueryable> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }

  getByIDAsync(id: string): Observable<IQueryable> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }

  getBySlugAsync(slug: string): Observable<IQueryable> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }

  getTermsAsync(id?: string, slug?: string): Observable<Array<ITerm>> {
    const result: Array<ITerm> = [];
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }
}

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** MOCK TERM SERVICE **********/
/***************************************/

class MockTermService implements IQueryService, ITermService {

  getAll(): Array<IQueryable> {
    const result: IQueryable = {};
    return [result];
  }

  getByID(id: string): IQueryable {
    const result: IQueryable = {};
    return [result];
  }

  getBySlug(slug: string): IQueryable {
    const result: IQueryable = {};
    return [result];
  }

  getAllAsync(): Observable<IQueryable> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }

  getByIDAsync(id: string): Observable<IQueryable> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }

  getBySlugAsync(slug: string): Observable<IQueryable> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }
}

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('PostServicee', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: TaxonomyService, useClass: MockTaxonomyService },
        { provide: TermService, useClass: MockTermService },
        PostService
      ]
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** CREATE SERVICE **********/
  /************************************/

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});

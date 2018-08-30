/**
 * Website - Term Service - Specs
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
import { ITerm } from '../interfaces/iterm';
import { IWebData } from '../interfaces/iweb-data';
import { DataService } from './data.service';

import { TermService } from './term.service';

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** MOCK DATA SERVICE **********/
/***************************************/

class MockDataService implements IDataService {
  getData(): Observable<IWebData> {
    const terms: Array<ITerm> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        name: 'foo-name',
        taxonomy: 'foo-taxonomy'
      },
      {
        id: 'foo2-id',
        slug: 'foo2-slug',
        name: 'foo2-name',
        taxonomy: 'foo2-taxonomy'
      }
    ];

    const result: IWebData = {
      navigationData: null,
      postsData: null,
      taxonomiesData: null,
      termsData: terms
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

/****************************/
/********** SET UP **********/
/****************************/

describe('TermService', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useClass: MockDataService },
        TermService
      ]
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** CREATE SERVICE **********/
  /************************************/

  it('should be created', inject([TermService], (service: TermService) => {
    expect(service).toBeTruthy();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** GET ALL DATA **********/
  /**********************************/

  it('should get all data', inject([TermService], (service: TermService) => {
    setTimeout(() => {
      const result = service.getAll();
      expect(result).toBeTruthy();
      expect((result as Array<ITerm>)[0].id).toEqual('foo-id');
      expect((result as Array<ITerm>)[1].id).toEqual('foo2-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** GET DATA BY ID **********/
  /************************************/

  it('should get data by id', inject([TermService], (service: TermService) => {
    setTimeout(() => {
      const result = service.getByID('foo-id');
      expect(result).toBeTruthy();
      expect((result as ITerm).id).toEqual('foo-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET DATA BY SLUG **********/
  /**************************************/

  it('should get data by slug', inject([TermService], (service: TermService) => {
    setTimeout(() => {
      const result = service.getBySlug('foo-slug');
      expect(result).toBeTruthy();
      expect((result as ITerm).id).toEqual('foo-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET ALL DATA ASYNC **********/
  /****************************************/

  it('should get all data async', inject([TermService], (service: TermService) => {
    service.getAllAsync().subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as Array<ITerm>)[0].id).toEqual('foo-id');
      expect((result as Array<ITerm>)[1].id).toEqual('foo2-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET DATA BY ID ASYNC **********/
  /******************************************/

  it('should get data by id async', inject([TermService], (service: TermService) => {
    service.getByIDAsync('foo-id').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as ITerm).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** GET DATA BY ID ASYNC WITH NO ID **********/
  /*****************************************************/

  it('should not get data by id async with no id', inject([TermService], (service: TermService) => {
    service.getByIDAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET DATA BY SLUG ASYNC **********/
  /********************************************/

  it('should get data by slug async', inject([TermService], (service: TermService) => {
    service.getBySlugAsync('foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as ITerm).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** GET DATA BY SLUG ASYNC WITH NO SLUG **********/
  /*********************************************************/

  it('should not get data by slug async with no slug', inject([TermService], (service: TermService) => {
    service.getBySlugAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));
});

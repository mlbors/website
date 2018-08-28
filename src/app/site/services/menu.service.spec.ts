/**
 * Website - Menu Service - Specs
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
import { IMenu } from '../interfaces/imenu';
import { IWebData } from '../interfaces/iweb-data';
import { DataService } from './data.service';

import { MenuService } from './menu.service';

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** MOCK DATA SERVICE **********/
/***************************************/

class MockDataService implements IDataService {
  getData(): Observable<IWebData> {
    const menu: IMenu = {
      id: 'foo-id',
      slug: 'foo-slug',
      name: 'foo-name',
      items: null
    };

    const result: IWebData = {
      navigationData: [menu],
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

/****************************/
/********** SET UP **********/
/****************************/

describe('MenuService', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useClass: MockDataService },
        MenuService
      ]
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** CREATE SERVICE **********/
  /************************************/

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET DATA BY SLUG **********/
  /**************************************/

  it('should get data by slug', inject([MenuService], (service: MenuService) => {
    service.getBySlugAsync('foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as IMenu).id).toEqual('foo-id');
    });
  }));
});

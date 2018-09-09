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
    const menus: Array<IMenu> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        name: 'foo-name',
        items: null
      },
      {
        id: 'foo2-id',
        slug: 'foo2-slug',
        name: 'foo2-name',
        items: null
      }
    ];

    const result: IWebData = {
      navigationData: menus,
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

  /**********************************/
  /********** GET ALL DATA **********/
  /**********************************/

  it('should get all data', inject([MenuService], (service: MenuService) => {
    setTimeout(() => {
      const result = service.getAll();
      expect(result).toBeTruthy();
      expect((result as Array<IMenu>)[0].id).toEqual('foo-id');
      expect((result as Array<IMenu>)[1].id).toEqual('foo2-id');
    }, 2000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** GET DATA BY ID **********/
  /************************************/

  it('should get data by id', inject([MenuService], (service: MenuService) => {
    setTimeout(() => {
      const result = service.getByID('foo-id');
      expect(result).toBeTruthy();
      expect((result as IMenu).id).toEqual('foo-id');
    }, 2000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET DATA BY SLUG **********/
  /**************************************/

  it('should get data by slug', inject([MenuService], (service: MenuService) => {
    setTimeout(() => {
      const result = service.getBySlug('foo-slug');
      expect(result).toBeTruthy();
      expect((result as IMenu).id).toEqual('foo-id');
    }, 2000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET ALL DATA ASYNC **********/
  /****************************************/

  it('should get all data async', inject([MenuService], (service: MenuService) => {
    service.getAllAsync().subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as Array<IMenu>)[0].id).toEqual('foo-id');
      expect((result as Array<IMenu>)[1].id).toEqual('foo2-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET DATA BY ID ASYNC **********/
  /******************************************/

  it('should get data by id async', inject([MenuService], (service: MenuService) => {
    service.getByIDAsync('foo-id').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as IMenu).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** GET DATA BY ID ASYNC WITH NO ID **********/
  /*****************************************************/

  it('should not get data by id async with no id', inject([MenuService], (service: MenuService) => {
    service.getByIDAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET DATA BY SLUG ASYNC **********/
  /********************************************/

  it('should get data by slug async', inject([MenuService], (service: MenuService) => {
    service.getBySlugAsync('foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as IMenu).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** GET DATA BY SLUG ASYNC WITH NO SLUG **********/
  /*********************************************************/

  it('should not get data by slug async with no slug', inject([MenuService], (service: MenuService) => {
    service.getBySlugAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));
});

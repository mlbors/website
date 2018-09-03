/**
 * Website - Data Service - Specs
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

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IMenu } from '../interfaces/imenu';
import { IMetaData } from '../interfaces/imeta-data';
import { IPost } from '../interfaces/ipost';
import { IPostService } from '../interfaces/ipost-service';
import { IQueryable} from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITaxonomyService } from '../interfaces/itaxonomy-service';
import { ITerm} from '../interfaces/iterm';
import { ITermService } from '../interfaces/iterm-service';
import { IType } from '../interfaces/itype';
import { IWebData } from '../interfaces/iweb-data';

import { DataService } from './data.service';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('DataService', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    let httpMock: HttpTestingController;

    TestBed.configureTestingModule({
      providers: [
        DataService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** CREATE SERVICE **********/
  /************************************/

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** SHOULD RECEIVE DATA **********/
  /*****************************************/

  it('should receive data', inject([HttpTestingController, DataService], (httpMock: HttpTestingController, service: DataService) => {
    service.getData().subscribe(result => {
      expect(result.navigationData).toBeTruthy();
      expect(result.navigationData.length).toEqual(1);
      expect((result.navigationData[0] as IMenu).id).toEqual('foo-menu');
    });

    const menuReq = httpMock.expectOne('assets/data/json/menus.json');
    expect(menuReq.request.method).toEqual('GET');

    const navItemsReq = httpMock.expectOne('assets/data/json/navigation-items.json');
    expect(navItemsReq.request.method).toEqual('GET');

    const mockMenuResponse = [
      {
        id: 'foo-menu',
        slug: 'main-menu',
        name: 'Main menu'
      }
    ];

    menuReq.flush(mockMenuResponse);
    httpMock.verify();
  }));
});

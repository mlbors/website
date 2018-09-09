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

  /******************************************/
  /********** SHOULD MAKE REQUESTS **********/
  /******************************************/

  it('should make requests', inject([HttpTestingController, DataService], (httpMock: HttpTestingController, service: DataService) => {
    service.getData().subscribe(result => {
      expect(result.navigationData).toBeTruthy();
      expect(result.postsData).toBeTruthy();
      expect(result.taxonomiesData).toBeTruthy();
      expect(result.termsData).toBeTruthy();
    });

    const menuReq = httpMock.expectOne('assets/data/json/menus.json');
    expect(menuReq.request.method).toEqual('GET');

    const navItemsReq = httpMock.expectOne('assets/data/json/navigation-items.json');
    expect(navItemsReq.request.method).toEqual('GET');

    const postsReq = httpMock.expectOne('assets/data/json/posts.json');
    expect(postsReq.request.method).toEqual('GET');

    const taxonomiesReq = httpMock.expectOne('assets/data/json/taxonomies.json');
    expect(taxonomiesReq.request.method).toEqual('GET');

    const termsReq = httpMock.expectOne('assets/data/json/terms.json');
    expect(termsReq.request.method).toEqual('GET');

    const typesReq = httpMock.expectOne('assets/data/json/types.json');
    expect(typesReq.request.method).toEqual('GET');

    httpMock.verify();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** SHOULD RECEIVE MENU DATA **********/
  /**********************************************/

  it('should receive menu data', inject([HttpTestingController, DataService], (httpMock: HttpTestingController, service: DataService) => {
    service.getData().subscribe(result => {
      expect(service.navigationData.length).toEqual(1);
      expect((service.navigationData[0] as IMenu).id).toEqual('foo-menu');
      expect((service.navigationData[0] as IMenu).items.length).toEqual(3);
      expect((service.navigationData[0] as IMenu).items[0].id).toEqual('home');
    });

    const menuReq = httpMock.expectOne('assets/data/json/menus.json');
    const navItemsReq = httpMock.expectOne('assets/data/json/navigation-items.json');
    const postsReq = httpMock.expectOne('assets/data/json/posts.json');
    const taxonomiesReq = httpMock.expectOne('assets/data/json/taxonomies.json');
    const termsReq = httpMock.expectOne('assets/data/json/terms.json');
    const typesReq = httpMock.expectOne('assets/data/json/types.json');

    const mockMenuResponse = [
      {
        id: 'foo-menu',
        slug: 'main-menu',
        name: 'Main menu'
      }
    ];

    const mockNavItemsResponse = [
      {
        id: 'home',
        title: 'home',
        link: '/',
        route: '',
        target: '_self',
        order: 1,
        menu: 'foo-menu'
      },
      {
        id: 'about',
        title: 'about',
        link: '/about',
        route: 'about',
        target: '_self',
        order: 2,
        menu: 'foo-menu'
      },
      {
        id: 'project-list',
        title: 'projects',
        link: '/projects',
        route: 'projects',
        target: '_self',
        order: 3,
        menu: 'foo-menu'
      }
    ];

    navItemsReq.flush(mockNavItemsResponse);
    menuReq.flush(mockMenuResponse);
    httpMock.verify();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** SHOULD RECEIVE TERMS DATA **********/
  /***********************************************/

  it('should receive terms data', inject([HttpTestingController, DataService], (httpMock: HttpTestingController, service: DataService) => {
    service.getData().subscribe(result => {
      expect(service.termsData.length).toEqual(2);
      expect((service.termsData[0] as ITerm).id).toEqual('foo');
    });

    const menuReq = httpMock.expectOne('assets/data/json/menus.json');
    const navItemsReq = httpMock.expectOne('assets/data/json/navigation-items.json');
    const postsReq = httpMock.expectOne('assets/data/json/posts.json');
    const taxonomiesReq = httpMock.expectOne('assets/data/json/taxonomies.json');
    const termsReq = httpMock.expectOne('assets/data/json/terms.json');
    const typesReq = httpMock.expectOne('assets/data/json/types.json');

    const mockTermsResponse = [
      {
        id: 'web',
        slug: 'web',
        name: 'web',
        taxonomy: 'project-category'
      },
      {
        id: 'foo',
        slug: 'foo',
        name: 'foo',
        taxonomy: 'foo-taxonomy'
      },
    ];

    termsReq.flush(mockTermsResponse);
    httpMock.verify();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /****************************************************/
  /********** SHOULD RECEIVE TAXONOMIES DATA **********/
  /****************************************************/

  it('should receive tax data', inject([HttpTestingController, DataService], (httpMock: HttpTestingController, service: DataService) => {
    service.getData().subscribe(result => {
      expect(service.taxonomiesData.length).toEqual(2);
      expect((service.taxonomiesData[1] as ITaxonomy).id).toEqual('web');
      expect((service.taxonomiesData[0] as ITaxonomy).terms.length).toEqual(2);
      expect((service.taxonomiesData[0] as ITaxonomy).terms[1].id).toEqual('foo2');
    });

    const menuReq = httpMock.expectOne('assets/data/json/menus.json');
    const navItemsReq = httpMock.expectOne('assets/data/json/navigation-items.json');
    const postsReq = httpMock.expectOne('assets/data/json/posts.json');
    const taxonomiesReq = httpMock.expectOne('assets/data/json/taxonomies.json');
    const termsReq = httpMock.expectOne('assets/data/json/terms.json');
    const typesReq = httpMock.expectOne('assets/data/json/types.json');

    const mockTermsResponse = [
      {
        id: 'foo',
        slug: 'foo',
        name: 'foo',
        taxonomy: 'foo-taxonomy'
      },
      {
        id: 'web',
        slug: 'web',
        name: 'web',
        taxonomy: 'project-category'
      },
      {
        id: 'foo2',
        slug: 'foo2',
        name: 'foo2',
        taxonomy: 'foo-taxonomy'
      },
    ];

    const mockTaxonomiesResponse = [
      {
        id: 'project-category',
        slug: 'project-category',
        name: 'project category'
      },
      {
        id: 'foo-taxonomy',
        slug: 'foo-taxonomy',
        name: 'foo-taxonomy'
      }
    ];

    termsReq.flush(mockTermsResponse);
    taxonomiesReq.flush(mockTaxonomiesResponse);
    httpMock.verify();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** SHOULD RECEIVE POSTS DATA **********/
  /***********************************************/

  it('should receive posts data', inject([HttpTestingController, DataService], (httpMock: HttpTestingController, service: DataService) => {
    service.getData().subscribe(result => {
      expect(service.postsData.length).toEqual(3);
      expect((service.postsData[0] as IPost).id).toEqual('home');
      expect((service.postsData[0] as IPost).slug).toEqual('home');
      expect((service.postsData[0] as IPost).title).toEqual('Home');
      expect((service.postsData[0] as IPost).type.id).toEqual('page');
      expect((service.postsData[0] as IPost).taxonomies.length).toEqual(1);
      expect((service.postsData[0] as IPost).taxonomies[0].id).toEqual('project-category');
      expect((service.postsData[0] as IPost).terms.length).toEqual(1);
      expect((service.postsData[0] as IPost).terms[0].id).toEqual('web');
      expect((service.postsData[0] as IPost).meta.length).toEqual(6);
      expect((service.postsData[0] as IPost).terms[2].id).toEqual('status');
      expect((service.postsData[1] as IPost).id).toEqual('foo');
      expect((service.postsData[1] as IPost).content).toEqual('foo content');
      expect((service.postsData[1] as IPost).sections.length).toEqual(2);
      expect((service.postsData[1] as IPost).images.length).toEqual(2);
      expect((service.postsData[1] as IPost).taxonomies.length).toEqual(2);
      expect((service.postsData[1] as IPost).taxonomies[0].id).toEqual('foo');
      expect((service.postsData[1] as IPost).taxonomies[1].id).toEqual('project-category');
      expect((service.postsData[1] as IPost).terms.length).toEqual(3);
      expect((service.postsData[1] as IPost).terms[0].id).toEqual('foo');
      expect((service.postsData[1] as IPost).terms[2].id).toEqual('web');
      expect((service.postsData[1] as IPost).meta.length).toEqual(1);
      expect((service.postsData[1] as IPost).terms[1].id).toEqual('client');
      expect((service.postsData[2] as IPost).id).toEqual('foo2');
      expect((service.postsData[2] as IPost).slug).toEqual('foo2');
      expect((service.postsData[2] as IPost).title).toEqual('foo2');
      expect((service.postsData[2] as IPost).type.id).toEqual('project');
      expect((service.postsData[2] as IPost).sections).toBeNull();
      expect((service.postsData[2] as IPost).images).toBeNull();
      expect((service.postsData[2] as IPost).taxonomies).toBeNull();
      expect((service.postsData[2] as IPost).terms).toBeNull();
      expect((service.postsData[2] as IPost).meta).toBeNull();
    });

    const menuReq = httpMock.expectOne('assets/data/json/menus.json');
    const navItemsReq = httpMock.expectOne('assets/data/json/navigation-items.json');
    const postsReq = httpMock.expectOne('assets/data/json/posts.json');
    const taxonomiesReq = httpMock.expectOne('assets/data/json/taxonomies.json');
    const termsReq = httpMock.expectOne('assets/data/json/terms.json');
    const typesReq = httpMock.expectOne('assets/data/json/types.json');

    const mockTypesResponse = [
      {
        id: 'foo',
        slug: 'foo',
        name: 'foo',
      },
      {
        id: 'page',
        slug: 'page',
        name: 'page',
      },
      {
        id: 'project',
        slug: 'project',
        name: 'project',
      },
    ];

    const mockTermsResponse = [
      {
        id: 'foo',
        slug: 'foo',
        name: 'foo',
        taxonomy: 'foo-taxonomy'
      },
      {
        id: 'web',
        slug: 'web',
        name: 'web',
        taxonomy: 'project-category'
      },
      {
        id: 'foo2',
        slug: 'foo2',
        name: 'foo2',
        taxonomy: 'foo-taxonomy'
      },
    ];

    const mockTaxonomiesResponse = [
      {
        id: 'project-category',
        slug: 'project-category',
        name: 'project category'
      },
      {
        id: 'foo-taxonomy',
        slug: 'foo-taxonomy',
        name: 'foo-taxonomy'
      }
    ];

    const mockPostsResponse = [
      {
        id: 'home',
        slug: 'home',
        title: 'Home',
        excerpt: 'Foo excerpt',
        content: null,
        sections: null,
        image: 'assets/img/me/me-001-480-min.jpg',
        images: null,
        type: 'page',
        order: 1,
        taxonomies: ['project-category'],
        terms: ['web'],
        meta: [
          {
            id: 'client',
            name: 'client',
            content: 'Bee Grumpy'
          },
          {
            id: 'year',
            name: 'year',
            content: '2013'
          },
          {
            id: 'status',
            name: 'status',
            content: 'finished'
          },
          {
            id: 'tasks',
            name: 'tasks',
            content: 'visual design, ergonomics, programming'
          },
          {
            id: 'languages',
            name: 'languages',
            content: 'PHP, JavaScript, CSS'
          },
          {
            id: 'frameworks-libraries',
            name: 'frameworks and libraries',
            content: 'PrestaShop, Unsemantic, jQuery'
          }],
        template: 'home'
      },
      {
        id: 'foo',
        slug: 'foo',
        title: 'foo',
        excerpt: 'Foo excerpt',
        content: 'foo content',
        sections: ['foo section1', 'foo section 2'],
        image: 'assets/img/me/me-001-480-min.jpg',
        images: ['image1', 'image2'],
        type: 'page',
        order: 2,
        taxonomies: ['foo-category', 'project-category'],
        terms: ['foo', 'foo2', 'web'],
        meta: [
          {
            id: 'client',
            name: 'client',
            content: 'foo'
          }],
        template: 'home'
      },
      {
        id: 'foo2',
        slug: 'foo2',
        title: 'foo2',
        excerpt: 'Foo excerpt',
        content: 'foo content',
        sections: null,
        image: 'assets/img/me/me-001-480-min.jpg',
        images: null,
        type: 'project',
        order: 2,
        taxonomies: null,
        terms: null,
        meta: null,
        template: 'home'
      }
    ];

    typesReq.flush(mockTypesResponse);
    termsReq.flush(mockTermsResponse);
    taxonomiesReq.flush(mockTaxonomiesResponse);
    postsReq.flush(mockPostsResponse);
    httpMock.verify();
  }));
});

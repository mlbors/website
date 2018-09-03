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
import { IType } from '../interfaces/itype';
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
    const postType: IType = { id: 'post', name: 'post', slug: 'post' };
    const posts: Array<IPost> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        title: 'foo title',
        excerpt: 'foo excerpt',
        content: 'foo content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: null,
        terms: null,
        meta: [
          { id: 'foo-meta', name: 'foo-meta', content: 'foo-value' },
          { id: 'foo2-meta', name: 'foo2-meta', content: 'foo2-value' }
        ],
        template: 'foo-template'
      },
      {
        id: 'foo2-id',
        slug: 'foo2-slug',
        title: 'foo2 title',
        excerpt: 'foo2 excerpt',
        content: 'foo2 content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: null,
        terms: null,
        meta: null,
        template: 'foo-template'
      }
    ];

    const result: IWebData = {
      navigationData: null,
      postsData: posts,
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

  getAllAsync(): Observable<Array<IQueryable>> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next([result]);
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

  getAllAsync(): Observable<Array<IQueryable>> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next([result]);
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

describe('PostService', () => {

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

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** GET ALL DATA **********/
  /**********************************/

  it('should get all data', inject([PostService], (service: PostService) => {
    setTimeout(() => {
      const result = service.getAll();
      expect(result).toBeTruthy();
      expect((result as Array<IPost>)[0].id).toEqual('foo-id');
      expect((result as Array<IPost>)[1].id).toEqual('foo2-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** GET DATA BY ID **********/
  /************************************/

  it('should get data by id', inject([PostService], (service: PostService) => {
    setTimeout(() => {
      const result = service.getByID('foo-id');
      expect(result).toBeTruthy();
      expect((result as IPost).id).toEqual('foo-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET DATA BY SLUG **********/
  /**************************************/

  it('should get data by slug', inject([PostService], (service: PostService) => {
    setTimeout(() => {
      const result = service.getBySlug('foo-slug');
      expect(result).toBeTruthy();
      expect((result as IPost).id).toEqual('foo-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** GET META BY ID **********/
  /************************************/

  it('should get meta by id', inject([PostService], (service: PostService) => {
    setTimeout(() => {
      const result = service.getMeta('foo-id');
      expect(result).toBeTruthy();
      expect((result[0] as IMetaData).id).toEqual('foo-meta');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET META BY SLUG **********/
  /**************************************/

  it('should get meta by slug', inject([PostService], (service: PostService) => {
    setTimeout(() => {
      const result = service.getMeta(null, 'foo-slug');
      expect(result).toBeTruthy();
      expect((result[0] as IMetaData).id).toEqual('foo-meta');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*******************************************/
  /********** GET META WITH NO ARGS **********/
  /*******************************************/

  it('should not get meta with no args', inject([PostService], (service: PostService) => {
    setTimeout(() => {
      const result = service.getMeta(null, null);
      expect(result).toBeNull();
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET ALL DATA ASYNC **********/
  /****************************************/

  it('should get all data async', inject([PostService], (service: PostService) => {
    service.getAllAsync().subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as Array<IPost>)[0].id).toEqual('foo-id');
      expect((result as Array<IPost>)[1].id).toEqual('foo2-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET DATA BY ID ASYNC **********/
  /******************************************/

  it('should get data by id async', inject([PostService], (service: PostService) => {
    service.getByIDAsync('foo-id').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as IPost).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** GET DATA BY ID ASYNC WITH NO ID **********/
  /*****************************************************/

  it('should not get data by id async with no id', inject([PostService], (service: PostService) => {
    service.getByIDAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET DATA BY SLUG ASYNC **********/
  /********************************************/

  it('should get data by slug async', inject([PostService], (service: PostService) => {
    service.getBySlugAsync('foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as IPost).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** GET DATA BY SLUG ASYNC WITH NO SLUG **********/
  /*********************************************************/

  it('should not get data by slug async with no slug', inject([PostService], (service: PostService) => {
    service.getBySlugAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET DATA BY CRITERIA **********/
  /******************************************/

  it('should get data by criteria', inject([PostService], (service: PostService) => {
    service.getAllByCriteria({ excerpt: 'foo excerpt' }).subscribe(result => {
      expect(result).toBeTruthy();
      expect((result[0] as IPost).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET META BY ID ASYNC **********/
  /******************************************/

  it('should get meta by id async', inject([PostService], (service: PostService) => {
    service.getMetaAsync('foo-id').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result[0] as IMetaData).id).toEqual('foo-meta');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET META BY SLUG ASYNC **********/
  /********************************************/

  it('should get meta by id async', inject([PostService], (service: PostService) => {
    service.getMetaAsync(null, 'foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result[0] as IMetaData).id).toEqual('foo-meta');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*************************************************/
  /********** GET META WITH NO ARGS ASYNC **********/
  /*************************************************/

  it('should not get meta with no args async', inject([PostService], (service: PostService) => {
    service.getMetaAsync(null, null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));
});

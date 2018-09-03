/**
 * Website - Taxonomy Service - Specs
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
import { TermService } from './term.service';

import { TaxonomyService } from './taxonomy.service';

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** MOCK DATA SERVICE **********/
/***************************************/

class MockDataService implements IDataService {
  getData(): Observable<IWebData> {
    const taxonomies: Array<ITaxonomy> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        name: 'foo-name',
        terms: [{
          id: 'foo-term',
          name: 'foo-term-name',
          slug: 'foo-term-slug',
          taxonomy: 'foo-id'
        },
        {
          id: 'foo2-term',
          name: 'foo2-term-name',
          slug: 'foo2-term-slug',
          taxonomy: 'foo-id'
        }]
      },
      {
        id: 'foo2-id',
        slug: 'foo2-slug',
        name: 'foo2-name',
        terms: [{
          id: 'foo-term',
          name: 'foo-term-name',
          slug: 'foo-term-slug',
          taxonomy: 'foo2-id'
        },
        {
          id: 'foo2-term',
          name: 'foo2-term-name',
          slug: 'foo2-term-slug',
          taxonomy: 'foo2-id'
        }]
      }
    ];

    const result: IWebData = {
      navigationData: null,
      postsData: null,
      taxonomiesData: taxonomies,
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

describe('TaxonomyService', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: TermService, useClass: MockTermService },
        TaxonomyService
      ]
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** CREATE SERVICE **********/
  /************************************/

  it('should be created', inject([TaxonomyService], (service: TaxonomyService) => {
    expect(service).toBeTruthy();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** GET ALL DATA **********/
  /**********************************/

  it('should get all data', inject([TaxonomyService], (service: TaxonomyService) => {
    setTimeout(() => {
      const result = service.getAll();
      expect(result).toBeTruthy();
      expect((result as Array<ITaxonomy>)[0].id).toEqual('foo-id');
      expect((result as Array<ITaxonomy>)[1].id).toEqual('foo2-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** GET DATA BY ID **********/
  /************************************/

  it('should get data by id', inject([TaxonomyService], (service: TaxonomyService) => {
    setTimeout(() => {
      const result = service.getByID('foo-id');
      expect(result).toBeTruthy();
      expect((result as ITaxonomy).id).toEqual('foo-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET DATA BY SLUG **********/
  /**************************************/

  it('should get data by slug', inject([TaxonomyService], (service: TaxonomyService) => {
    setTimeout(() => {
      const result = service.getBySlug('foo-slug');
      expect(result).toBeTruthy();
      expect((result as ITaxonomy).id).toEqual('foo-id');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET TERMS BY ID **********/
  /*************************************/

  it('should get terms by id', inject([TaxonomyService], (service: TaxonomyService) => {
    setTimeout(() => {
      const result = service.getTerms('foo-id');
      expect(result).toBeTruthy();
      expect(result.length).toEqual(2);
      expect(result[0].id).toEqual('foo-term');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET TERMS BY SLUG **********/
  /***************************************/

  it('should get terms by slug', inject([TaxonomyService], (service: TaxonomyService) => {
    setTimeout(() => {
      const result = service.getTerms(null, 'foo-slug');
      expect(result).toBeTruthy();
      expect(result.length).toEqual(2);
      expect(result[0].id).toEqual('foo-term');
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET TERMS WITH NO ARGS **********/
  /********************************************/

  it('should not get terms with no args', inject([TaxonomyService], (service: TaxonomyService) => {
    setTimeout(() => {
      const result = service.getTerms();
      expect(result).toBeNull();
    }, 1000);
  }));

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET ALL DATA ASYNC **********/
  /****************************************/

  it('should get all data async', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getAllAsync().subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as Array<ITaxonomy>)[0].id).toEqual('foo-id');
      expect((result as Array<ITaxonomy>)[1].id).toEqual('foo2-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET DATA BY ID ASYNC **********/
  /******************************************/

  it('should get data by id async', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getByIDAsync('foo-id').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as ITaxonomy).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** GET DATA BY ID ASYNC WITH NO ID **********/
  /*****************************************************/

  it('should not get data by id async with no id', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getByIDAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET DATA BY SLUG ASYNC **********/
  /********************************************/

  it('should get data by slug async', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getBySlugAsync('foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect((result as ITaxonomy).id).toEqual('foo-id');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** GET DATA BY SLUG ASYNC WITH NO SLUG **********/
  /*********************************************************/

  it('should not get data by slug async with no slug', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getBySlugAsync(null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /************************************************/
  /********** GET DATA TERMS BY ID ASYNC **********/
  /************************************************/

  it('should get terms by id async', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getTermsAsync('foo-id').subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.length).toEqual(2);
      expect(result[0].id).toEqual('foo-term');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************************/
  /********** GET DATA TERMS BY SLUG ASYNC **********/
  /**************************************************/

  it('should get terms by slug async', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getTermsAsync(null, 'foo-slug').subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.length).toEqual(2);
      expect(result[0].id).toEqual('foo-term');
    });
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*******************************************************/
  /********** GET DATA TERMS WITH NO ARGS ASYNC **********/
  /*******************************************************/

  it('should not get terms with no args async', inject([TaxonomyService], (service: TaxonomyService) => {
    service.getTermsAsync(null, null).subscribe(result => {
      expect(result).toBeNull();
    });
  }));
});

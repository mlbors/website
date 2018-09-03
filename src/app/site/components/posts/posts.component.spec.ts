/**
 * Website - Posts Component - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs';

import { IDataService } from '../../interfaces/idata-service';
import { IMetaData } from '../../interfaces/imeta-data';
import { IPost } from '../../interfaces/ipost';
import { IPostService } from '../../interfaces/ipost-service';
import { IQueryable} from '../../interfaces/iqueryable';
import { IQueryService } from '../../interfaces/iquery-service';
import { ITaxonomy } from '../../interfaces/itaxonomy';
import { ITaxonomyService } from '../../interfaces/itaxonomy-service';
import { ITerm } from '../../interfaces/iterm';
import { ITermService } from '../../interfaces/iterm-service';
import { IType } from '../../interfaces/itype';
import { IWebData } from '../../interfaces/iweb-data';

import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { TaxonomyService } from '../../services/taxonomy.service';
import { TermService } from '../../services/term.service';

import { PostsComponent } from './posts.component';

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

/***************************************/
/********** MOCK POST SERVICE **********/
/***************************************/

class MockPostService implements IQueryService, IPostService {
  taxonomyService: IQueryService;

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

  getMeta(slug: string): Array<IMetaData> {
    const result: Array<IMetaData> = [];
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

  getMetaAsync(id?: string, slug?: string): Observable<Array<IMetaData>> {
    const result: Array<IMetaData> = [];
    return new Observable(observer => {
      observer.next(result);
      observer.complete();
      return;
    });
  }

  getAllByCriteria(criteria: object): Observable<Array<IQueryable>> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next([result]);
      observer.complete();
      return;
    });
  }

  getAllByType(typeSlug: string): Observable<Array<IQueryable>> {
    const result: IQueryable = {};
    return new Observable(observer => {
      observer.next([result]);
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

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    const postType: IType = { id: 'post', name: 'post', slug: 'post' };
    const results: Array<IPost> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        title: 'foo title',
        excerpt: 'foo excerpt',
        content: 'foo content',
        sections: null,
        image: null,
        images: null,
        type: postType,
        order: 1,
        taxonomies: null,
        terms: null,
        meta: null,
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
        images: null,
        type: postType,
        order: 2,
        taxonomies: null,
        terms: null,
        meta: null,
        template: 'foo-template'
      }
    ];

    const spy = spyOn(PostService.prototype, 'getAllByType').and.returnValue(
      new Observable(observer => {
        observer.next(results);
        observer.complete();
        return;
      })
    );

    TestBed.configureTestingModule({
      declarations: [
        PostsComponent
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: PostService, useClass: MockPostService },
        { provide: TaxonomyService, useClass: MockTaxonomyService, useValue: spy },
        { provide: TermService, useClass: MockTermService }
      ]
    })
    .compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    component.type = 'post';
    fixture.detectChanges();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** CREATE COMPONENT **********/
  /**************************************/

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** CHECK QUERY SERVICE **********/
  /*****************************************/

  it('should have queryService', () => {
    expect(component.queryService).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET ALL BY TYPE **********/
  /*************************************/

  it('should get all by type', () => {
    expect(component.posts.length).toEqual(2);
  });
});

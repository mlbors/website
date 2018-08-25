/**
 * Website - Post Component - Specs
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

import { SimpleChange } from '@angular/core';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { IDataService } from '../../interfaces/idata-service';
import { IMetaData } from '../../interfaces/imeta-data';
import { IPost } from '../../interfaces/ipost';
import { IPostService } from '../../interfaces/ipost-service';
import { IQueryable} from '../../interfaces/iqueryable';
import { IQueryService } from '../../interfaces/iquery-service';
import { ITaxonomy } from '../../interfaces/itaxonomy';
import { ITaxonomyService } from '../../interfaces/itaxonomy-service';
import { ITerm} from '../../interfaces/iterm';
import { ITermService } from '../../interfaces/iterm-service';
import { IType} from '../../interfaces/itype';
import { IWebData } from '../../interfaces/iweb-data';

import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { TaxonomyService } from '../../services/taxonomy.service';
import { TermService } from '../../services/term.service';

import { PostComponent } from './post.component';

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

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostComponent
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: PostService, useClass: MockPostService },
        { provide: TaxonomyService, useClass: MockTaxonomyService },
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
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** CREATE COMPONENT **********/
  /**************************************/

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** CHECK QUERY SERVICE **********/
  /*****************************************/

  it('should have queryService', () => {
    expect(component.queryService).not.toBeNull();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************/
  /********** RECIEVED VALUES WITH ID **********/
  /*********************************************/

  it('should have recieved values with given id', () => {
    const postType: IType = {id: 'post', name: 'post', slug: 'post'};
    const post: IPost = {
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
    };

    const spy = spyOn(PostService.prototype, 'getByIDAsync').and.returnValue(
      new Observable(observer => {
        observer.next(post);
        observer.complete();
        return;
      })
    );

    fixture.componentInstance.id = 'foo-id';
    fixture.componentInstance.ngOnChanges({
      id: new SimpleChange(null, fixture.componentInstance.id, true),
    });
    fixture.detectChanges();
    expect(component.post.title).toEqual('foo title');
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** RECIEVED VALUES WITH SLUG **********/
  /***********************************************/

  it('should have recieved values with given slug', () => {
    const postType: IType = {id: 'post', name: 'post', slug: 'post'};
    const post: IPost = {
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
    };

    const spy = spyOn(PostService.prototype, 'getBySlugAsync').and.returnValue(
      new Observable(observer => {
        observer.next(post);
        observer.complete();
        return;
      })
    );

    fixture.componentInstance.slug = 'foo-slug';
    fixture.componentInstance.ngOnChanges({
      slug: new SimpleChange(null, fixture.componentInstance.slug, true),
    });
    fixture.detectChanges();
    expect(component.post.title).toEqual('foo title');
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************************************/
  /********** SHOULD RETURN IMAGE WHEN IT EXISTS **********/
  /********************************************************/

  it('should return image when it exists', () => {
    const postType: IType = {id: 'post', name: 'post', slug: 'post'};
    const post: IPost = {
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
      meta: null,
      template: 'foo-template'
    };

    component.post = post;
    fixture.detectChanges();

    expect(component.checkIfImageExists(1)).toEqual('foo2');
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************************************************/
  /********** SHOULD NOT RETURN IMAGE WHEN IT DOES NOT EXIST **********/
  /********************************************************************/

  it('should not return image when it does not exists', () => {
    const postType: IType = {id: 'post', name: 'post', slug: 'post'};
    const post: IPost = {
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
      meta: null,
      template: 'foo-template'
    };

    component.post = post;
    fixture.detectChanges();

    expect(component.checkIfImageExists(2)).toBeNull();
  });
});

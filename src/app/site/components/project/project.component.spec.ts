/**
 * Website - Project Component - Specs
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

import { Component, Input } from '@angular/core';
import { Router, Routes, ActivatedRoute, convertToParamMap } from '@angular/router';

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
import { ITerm } from '../../interfaces/iterm';
import { ITermService } from '../../interfaces/iterm-service';
import { IType } from '../../interfaces/itype';
import { IWebData } from '../../interfaces/iweb-data';

import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { TaxonomyService } from '../../services/taxonomy.service';
import { TermService } from '../../services/term.service';

import { ProjectComponent } from './project.component';

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

/*************************************************************/
/********** APP IMAGE VIEWER WRAPPER COMPONENT MOCK **********/
/*************************************************************/

@Component({
  selector: 'app-image-viewer-wrapper',
  template: ''
})
class MockImageViewerWrapperComponent {
  @Input() imageUrl: string;
}

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    const postType: IType = { id: 'project', name: 'project', slug: 'project' };
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

    const spyService = spyOn(PostService.prototype, 'getBySlugAsync').and.returnValue(
      new Observable(observer => {
        observer.next(post);
        observer.complete();
        return;
      })
    );

    TestBed.configureTestingModule({
      declarations: [
        MockImageViewerWrapperComponent,
        ProjectComponent
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: PostService, useClass: MockPostService, useValue: spyService },
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
    TestBed.configureTestingModule({
      declarations: [
        MockImageViewerWrapperComponent,
        ProjectComponent
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
    });
    fixture = TestBed.createComponent(ProjectComponent);
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

  /******************************/
  /********** SET SLUG **********/
  /******************************/

  it('should set slug', () => {
    const spy = spyOnProperty(ActivatedRoute.prototype, 'paramMap', 'get').and.returnValue(
      new Observable(observer => {
        const result = { slug: 'foo-slug' };
        observer.next(convertToParamMap(result));
        observer.complete();
        return;
      })
    );
    fixture.destroy();
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.slug).toEqual('foo-slug');
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** RECIEVED VALUES WITH SLUG **********/
  /***********************************************/

  it('should have recieved values with given slug', () => {
    const spyRoute = spyOnProperty(ActivatedRoute.prototype, 'paramMap', 'get').and.returnValue(
      new Observable(observer => {
        const result = { slug: 'foo-slug' };
        observer.next(convertToParamMap(result));
        observer.complete();
        return;
      })
    );

    fixture.destroy();
    fixture = TestBed.createComponent(ProjectComponent);
    fixture.componentInstance.slug = 'foo-slug';
    fixture.detectChanges();

    fixture.componentInstance.queryService.getBySlugAsync(fixture.componentInstance.slug).subscribe(result => {
      expect((result as IPost).title).toEqual('foo title');
      setTimeout(() => {
        expect(component.post.title).toEqual('foo title');
      }, 3000);
    });
  });
});

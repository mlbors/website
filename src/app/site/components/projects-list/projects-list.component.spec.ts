/**
 * Website - Projects List Component - Specs
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

import { Pipe, PipeTransform } from '@angular/core';

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
import { IType } from '../../interfaces/itype';
import { IWebData } from '../../interfaces/iweb-data';

import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { TaxonomyService } from '../../services/taxonomy.service';
import { TermService } from '../../services/term.service';

import { ProjectsListComponent } from './projects-list.component';

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

/*****************************************/
/********** POST TERM PIPE MOCK **********/
/*****************************************/

@Pipe({
  name: 'postTerm'
})
class MockPostTermPipe implements PipeTransform {
  transform(items: Array<IQueryable>, termSlug: string): Array<IQueryable> {
    const result: IQueryable = {};
    return [result];
  }
}

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    const projectType: IType = { id: 'project', name: 'project', slug: 'project' };
    const posts: Array<IPost> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        title: 'foo title',
        excerpt: 'foo excerpt',
        content: 'foo content',
        sections: null,
        image: null,
        images: null,
        type: projectType,
        order: 2,
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
        type: projectType,
        order: 1,
        taxonomies: null,
        terms: null,
        meta: null,
        template: 'foo-template'
      }
    ];

    const spyPosts = spyOn(PostService.prototype, 'getAllByType').and.returnValue(
      new Observable(observer => {
        observer.next(posts);
        observer.complete();
        return;
      })
    );

    const taxonomies: Array<ITaxonomy> = [
      {
        id: 'foo-id',
        slug: 'project-category',
        name: 'foo-name',
        terms: [{
          id: 'foo-id',
          slug: 'foo-slug',
          name: 'foo-name',
          taxonomy: 'project-category'
        },
        {
          id: 'foo2-id',
          slug: 'foo2-slug',
          name: 'foo2-name',
          taxonomy: 'project-category'
        }]
      }
    ];

    const spyTaxnonomies = spyOn(TaxonomyService.prototype, 'getBySlugAsync').and.returnValue(
      new Observable(observer => {
        observer.next(taxonomies);
        observer.complete();
        return;
      })
    );

    TestBed.configureTestingModule({
      declarations: [
        MockPostTermPipe,
        ProjectsListComponent
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: PostService, useClass: MockPostService, useValue: spyPosts },
        { provide: TaxonomyService, useClass: MockTaxonomyService, useValue: spyTaxnonomies },
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
    fixture = TestBed.createComponent(ProjectsListComponent);
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

  /************************************************************/
  /********** CHECK PROPERTIES PASSED BY CONSTRUCTOR **********/
  /************************************************************/

  it('should have queryService and taxonomyService', () => {
    expect(component.queryService).toBeTruthy();
    expect(component.taxonomyService).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET ALL BY TYPE **********/
  /*************************************/

  it('should get all posts by type and sorted', () => {
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.posts.length).toEqual(2);
      expect((component.posts[0] as IPost).id).toEqual('foo2-id');
    }, 1000);
  });

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET TERMS **********/
  /*******************************/

  it('should get terms', () => {
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.terms.length).toEqual(2);
      expect((component.terms[1] as ITerm).id).toEqual('foo-id');
    }, 1000);
  });
});

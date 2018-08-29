/**
 * Website - Navigation Component - Specs
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

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IDataService } from '../../interfaces/idata-service';
import { IMenuService } from '../../interfaces/imenu-service';
import { IQueryable} from '../../interfaces/iqueryable';
import { IQueryService } from '../../interfaces/iquery-service';
import { IWebData } from '../../interfaces/iweb-data';

import { DataService } from '../../services/data.service';
import { MenuService } from '../../services/menu.service';

import { NavigationComponent } from './navigation.component';

import { IMenu } from '../../interfaces/imenu';
import { INavigationItem } from '../../interfaces/inavigation-item';

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
/********** MOCK MENU SERVICE **********/
/***************************************/

class MockMenuService implements IQueryService, IMenuService {
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

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
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
        NavigationComponent
      ],
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: MenuService, useClass: MockMenuService }
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
    fixture = TestBed.createComponent(NavigationComponent);
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
    const navigationItems: Array<INavigationItem> = [
      {
        id: 'home',
        title: 'home',
        link: '/',
        route: '',
        target: '_self',
        order: 1,
        menu: 'main-menu'
      },
      {
        id: 'about',
        title: 'about',
        link: '/about',
        route: 'about',
        target: '_self',
        order: 2,
        menu: 'main-menu'
      },
      {
        id: 'project-list',
        title: 'projects',
        link: '/projects',
        route: 'projects',
        target: '_self',
        order: 3,
        menu: 'main-menu'
      }
    ];

    const menu: IMenu = {
      id: 'main-menu',
      slug: 'main-menu',
      name: 'Main menu',
      items: navigationItems
    };

    const spy = spyOn(MenuService.prototype, 'getByIDAsync').and.returnValue(
      new Observable(observer => {
        observer.next(menu);
        observer.complete();
        return;
      })
    );

    fixture.componentInstance.id = 'main-menu';
    fixture.detectChanges();
    component.ngOnInit();

    expect(component.menu.id).toEqual('main-menu');
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** RECIEVED VALUES WITH SLUG **********/
  /***********************************************/

  it('should have recieved values with given slug', () => {
    const navigationItems: Array<INavigationItem> = [
      {
        id: 'home',
        title: 'home',
        link: '/',
        route: '',
        target: '_self',
        order: 1,
        menu: 'main-menu'
      },
      {
        id: 'about',
        title: 'about',
        link: '/about',
        route: 'about',
        target: '_self',
        order: 2,
        menu: 'main-menu'
      },
      {
        id: 'project-list',
        title: 'projects',
        link: '/projects',
        route: 'projects',
        target: '_self',
        order: 3,
        menu: 'main-menu'
      }
    ];

    const menu: IMenu = {
      id: 'main-menu',
      slug: 'main-menu',
      name: 'Main menu',
      items: navigationItems
    };

    const spy = spyOn(MenuService.prototype, 'getBySlugAsync').and.returnValue(
      new Observable(observer => {
        observer.next(menu);
        observer.complete();
        return;
      })
    );

    fixture.componentInstance.slug = 'main-menu';
    fixture.detectChanges();
    component.ngOnInit();

    expect(component.menu.slug).toEqual('main-menu');
  });

  /********************************************************************************/
  /********************************************************************************/

  /******************************************************/
  /********** NOT RECIEVED VALUES WITH NULL ID **********/
  /******************************************************/

  it('should have not recieved values with null id', () => {
    fixture.componentInstance.id = null;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.menu).toBeUndefined();
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************************************/
  /********** NOT RECIEVED VALUES WITH NULL SLUG **********/
  /********************************************************/

  it('should have not recieved values with null slug', () => {
    fixture.componentInstance.slug = null;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.menu).toBeUndefined();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** HTML ELEMENTS **********/
  /***********************************/

  it('should have HTML elements', () => {
    const navigationItems: Array<INavigationItem> = [
      {
        id: 'home',
        title: 'home',
        link: '/',
        route: '',
        target: '_self',
        order: 1,
        menu: 'main-menu'
      },
      {
        id: 'about',
        title: 'about',
        link: '/about',
        route: 'about',
        target: '_self',
        order: 2,
        menu: 'main-menu'
      },
      {
        id: 'project-list',
        title: 'projects',
        link: '/projects',
        route: 'projects',
        target: '_self',
        order: 3,
        menu: 'main-menu'
      }
    ];

    const menu: IMenu = {
      id: 'main-menu',
      slug: 'main-menu',
      name: 'Main menu',
      items: navigationItems
    };

    const spy = spyOn(MenuService.prototype, 'getBySlugAsync').and.returnValue(
      new Observable(observer => {
        observer.next(menu);
        observer.complete();
        return;
      })
    );

    fixture.componentInstance.slug = 'main-menu';
    fixture.detectChanges();
    component.ngOnInit();

    setTimeout(() => {
      debugElement = fixture.debugElement.query(By.css('.nav-item'));
      htmlElement = debugElement.nativeElement;
      expect(htmlElement).toBeTruthy();

      debugElement = fixture.debugElement.query(By.css('.navbar-nav'));
      htmlElement = debugElement.nativeElement;
      expect(htmlElement.childElementCount).toEqual(3);
    }, 500);
  });
});

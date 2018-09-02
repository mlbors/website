/**
 * Website - Page Component - Specs
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

import { Observable } from 'rxjs';

import { PageComponent } from './page.component';

/********************************************************************************/
/********************************************************************************/

/*********************************************/
/********** APP POST COMPONENT MOCK **********/
/*********************************************/

@Component({
  selector: 'app-post-component',
  template: ''
})
class MockPostComponent {
  @Input('postID') id: string;
  @Input('postSlug') slug: string;
}

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockPostComponent,
        PageComponent
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
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
    fixture = TestBed.createComponent(PageComponent);
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
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.slug).toEqual('foo-slug');
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** SET SLUG TO DEFAULT **********/
  /*****************************************/

  it('should set slug to default', () => {
    const spy = spyOnProperty(ActivatedRoute.prototype, 'paramMap', 'get').and.returnValue(
      new Observable(observer => {
        const result = {};
        observer.next(convertToParamMap(result));
        observer.complete();
        return;
      })
    );
    fixture.destroy();
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.slug).toEqual('home');
  });
});

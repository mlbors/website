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

import { PageComponent } from './page.component';

/********************************************************************************/
/********************************************************************************/

@Component({
  selector: 'app-post-component',
  template: ''
})
class MockPostComponent {
  @Input('postID') id: string;
  @Input('postSlug') slug: string;
}

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
});

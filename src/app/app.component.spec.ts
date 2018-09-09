/**
 * Website - App Component - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { inject, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';

import { AppComponent } from './app.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('AppComponent', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** CREATE COMPONENT **********/
  /**************************************/

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*******************************************************/
  /********** RESET SCROLL WHEN NAVIGATION ENDS **********/
  /*******************************************************/

  it('should reset scroll when navigatione ends', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(window.scrollX).toEqual(0);
    expect(window.scrollY).toEqual(0);
  }));
});

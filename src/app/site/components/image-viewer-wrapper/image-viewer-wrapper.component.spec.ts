/**
 * Website - Image Viewer Wrapper Component - Specs
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

import { ImageViewerWrapperComponent } from './image-viewer-wrapper.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('ImageViewerWrapperComponent', () => {
  let component: ImageViewerWrapperComponent;
  let fixture: ComponentFixture<ImageViewerWrapperComponent>;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewerWrapperComponent ]
    })
    .compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerWrapperComponent);
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


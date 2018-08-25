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
import { RouterTestingModule} from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ImageViewerWrapperComponent } from './image-viewer-wrapper.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('ImageViewerWrapperComponent', () => {
  let component: ImageViewerWrapperComponent;
  let fixture: ComponentFixture<ImageViewerWrapperComponent>;
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
        ImageViewerWrapperComponent
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

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** IMAGE WRAPPER **********/
  /***********************************/

  it('should have image-viewer-wrapper if imageUrl is not null', () => {
    component.imageUrl = 'http://foo-url/img.jpg';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.image-viewer-wrapper'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** IMAGE WRAPPER **********/
  /***********************************/

  it('should not have image-viewer-wrapper if imageUrl is null', () => {
    component.imageUrl = null;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.image-viewer-wrapper'));
    expect(debugElement).toBeNull();
  });
});


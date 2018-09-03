/**
 * Website - Image Viewer Component - Specs
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

import { ImageViewerComponent } from './image-viewer.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;
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
        ImageViewerComponent
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
    TestBed.configureTestingModule({
      declarations: [
        ImageViewerComponent
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(ImageViewerComponent);
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

  /**********************************/
  /********** IMAGE VIEWER **********/
  /**********************************/

  it('should have image-viewer if imageUrl is not null', () => {
    component.imageUrl = 'http://foo-url/img.jpg';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.image-viewer'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** IMAGE VIEWER **********/
  /**********************************/

  it('should not have image-viewer if imageUrl is null', () => {
    component.imageUrl = null;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.image-viewer'));
    expect(debugElement).toBeNull();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BACK BUTTON **********/
  /*********************************/

  it('should have a back button', () => {
    component.previousUrl = 'foo-url';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.btn'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** BACK BUTTON URL **********/
  /*************************************/

  it('should have an href value equal to previousUrl', () => {
    component.previousUrl = 'foo-url';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.btn'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement.getAttribute('href').substr(1)).toEqual(component.previousUrl);
  });

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** BACK BUTTON URL NULL **********/
  /******************************************/

  it('should not have a back button when previousUrl is null', () => {
    component.previousUrl = null;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.btn'));
    expect(debugElement).toBeNull();
  });

});


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

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Router, Routes } from '@angular/router';
import { Component, Input } from '@angular/core';

import { ImageViewerWrapperComponent } from './image-viewer-wrapper.component';

/********************************************************************************/
/********************************************************************************/

/*********************************************/
/********** APP POST COMPONENT MOCK **********/
/*********************************************/

@Component({
  selector: 'app-site-component',
  template: ''
})
class MockSiteComponent {
}

@Component({
  selector: 'app-image-viewer',
  template: ''
})
class MockImageViewerComponent {
}


/********************************************************************************/
/********************************************************************************/

const MockRoutes: Routes = [
  {
    path: '',
    component: MockSiteComponent,
    children: [
      {
        path: 'image-viewer/:img/:previous',
        component: MockImageViewerComponent
      }
    ]
  }
];

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
        ImageViewerWrapperComponent,
        MockSiteComponent,
        MockImageViewerComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(MockRoutes),
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

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** SHOULD NAVIGATE **********/
  /*************************************/

  it('should navigate', fakeAsync(() => {
    component.imageUrl = 'http://foo-url/img.jpg';
    component.currentUrl = 'http://foo-current-url';
    const router = TestBed.get(Router);
    fixture.detectChanges();
    component.enlarge();
    tick();
    const re = new RegExp('%2F', 'g');
    const result = router.url.replace(re, '/');
    expect(result).toBe('/image-viewer/http://foo-url/img.jpg/http://foo-current-url');
  }));
});


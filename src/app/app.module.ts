/**
 * Website - App Module - Module
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SiteModule } from './site/site.module';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SiteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/********************************************************************************/
/********************************************************************************/

/********************************/
/********** APP MODULE **********/
/********************************/

export class AppModule {

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param Router router router object
   */

  constructor(router: Router) {
  }
}

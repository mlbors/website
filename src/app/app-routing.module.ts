/**
 * Website - App Routing - Module
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteModule } from './site/site.module';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** ROUTES **********/
/****************************/

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/site/site.module#SiteModule',
    data: { preload: true },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

/********************************************************************************/
/********************************************************************************/

/****************************************/
/********** APP ROUTING MODULE **********/
/****************************************/

export class AppRoutingModule { }

/**
 * Website - Site Routing - Module
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponentComponent } from './site-component/site-component.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** ROUTES **********/
/****************************/

const SiteRoutes: Routes = [
  {
    path: '',
    component: SiteComponentComponent,
    children: [
      {
        path: '',
        component: PageComponent,
      },
      {
        path: ':slug',
        component: PageComponent,
      },
      {
        path: 'projects',
        component: ProjectsListComponent
      }
      {
        path: 'project/:slug',
        component: ProjectComponent
      }
    ]
  }
];

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  imports: [
    RouterModule.forChild(
      SiteRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

/********************************************************************************/
/********************************************************************************/

/*****************************************/
/********** SITE ROUTING MODULE **********/
/*****************************************/

export class SiteRoutingModule { }

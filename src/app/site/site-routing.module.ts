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

import { PageComponent } from './components/page/page.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SiteComponent } from './components/site/site.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** ROUTES **********/
/****************************/

const SiteRoutes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: PageComponent,
        outlet: 'siteRouter',
      },
      {
        path: ':slug',
        component: PageComponent,
        outlet: 'siteRouter'
      },
      {
        path: 'projects',
        component: ProjectsListComponent,
        outlet: 'siteRouter'
      },
      {
        path: 'project/:slug',
        component: ProjectComponent,
        outlet: 'siteRouter'
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

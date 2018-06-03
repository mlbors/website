/**
 * Website - Site - Module
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
import { CommonModule } from '@angular/common';

import { NavigationComponent  } from './components/navigation/navigation.component';
import { PageComponent  } from './components/page/page.component';
import { PostComponent  } from './components/post/post.component';
import { PostsComponent  } from './components/posts/posts.component';
import { ProjectsListComponent  } from './components/projects-list/projects-list.component';
import { ProjectComponent  } from './components/project/project.component';
import { SiteComponent  } from './components/site/site.component';

import { PostTaxonomyPipe } from './pipes/post-taxonomy.pipe';
import { PostTermPipe } from './pipes/post-term.pipe';

import { DataService } from './services/data.service';
import { TaxonomyService } from './services/taxonomy.service';
import { TermService } from './services/term.service';

import { SiteRoutingModule } from './site-routing.module';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  declarations: [
    PostComponent,
    NavigationComponent,
    PostsComponent,
    SiteComponent,
    PageComponent,
    ProjectsListComponent,
    ProjectComponent,
    PostTaxonomyPipe,
    PostTermPipe
  ],
  providers: [
    DataService,
    TaxonomyService,
    TermService
  ]
})

/********************************************************************************/
/********************************************************************************/

/*********************************/
/********** SITE MODULE **********/
/*********************************/

export class SiteModule { }

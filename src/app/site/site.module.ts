/**
 * Website - Site - Module
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
import { CommonModule } from '@angular/common';

import { PostComponentComponent } from './post-component/post-component.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { SiteComponentComponent } from './site-component/site-component.component';

import { PostTaxonomyPipe } from './pipes/post-taxonomy.pipe';
import { PostTermPipe } from './pipes/post-term.pipe';

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
  exports: [
    SiteComponentComponent
  ],
  declarations: [
    PostComponentComponent,
    NavigationComponent,
    PostsComponentComponent,
    SiteComponentComponent,
    PostTaxonomyPipe,
    PostTermPipe,
  ]
})

/********************************************************************************/
/********************************************************************************/

/*********************************/
/********** SITE MODULE **********/
/*********************************/

export class SiteModule { }

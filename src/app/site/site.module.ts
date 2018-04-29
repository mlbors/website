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

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostComponentComponent, NavigationComponent]
})

/********************************************************************************/
/********************************************************************************/

/*********************************/
/********** SITE MODULE **********/
/*********************************/

export class SiteModule { }

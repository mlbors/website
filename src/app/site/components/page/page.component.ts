/**
 * Website - Page Component - Component
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PostComponent } from '../post/post.component';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** PAGE COMPONENT **********/
/************************************/

export class PageComponent implements OnInit {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var String _slug page slug
   */

  private _slug: String;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param ActivatedRoute activateRoute information about associated route
   */

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      const slug = params['slug'];
      this._setValues(slug);
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** NG ON INIT **********/
  /********************************/

  ngOnInit() {
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param String slug page slug
   */

  private _setValues(slug: string) {
    this._setSlug(slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** SET SLUG **********/
  /******************************/

  /**
   * @param String slug page slug
   */

  private _setSlug(slug: string) {
    this._slug = slug;
  }

}

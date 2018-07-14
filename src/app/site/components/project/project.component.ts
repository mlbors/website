/**
 * Website - Project Component - Component
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IPost } from '../../interfaces/ipost';
import { IQuerierComponent } from '../../interfaces/iquerier-component';
import { IQueryService } from '../../interfaces/iquery-service';

import { PostService } from '../../services/post.service';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ PostService ]
})

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** PROJECT COMPONENT **********/
/***************************************/

export class ProjectComponent implements OnInit, IQuerierComponent {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var string input id post id
   * @var string input slug post slug
   * @var IQueryService queryService querier serivce
   * @var IPost post post
   */

  public id: string;
  public slug: string;
  public queryService: IQueryService;
  public post: IPost;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IQueryService queryService querier serivce
   * @param ActivatedRoute activateRoute information about associated route
   */

  constructor(queryService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this._setValues(queryService, slug);
      this.getData();
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
   * @param IQueryService queryService querier serivce
   */

  private _setValues(service: IQueryService, slug: string) {
    this._setQueryService(service);
    this._setSlug(slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** SET QUERY SERVICE **********/
  /***************************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  private _setQueryService(service: IQueryService) {
    this.queryService = service;
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
    if (typeof slug !== undefined && slug && slug.length > 0 && slug !== '') {
      this.slug = slug;
    }
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** SET DATA **********/
  /******************************/

  /**
   * @param IPost post post
   */

  _setData(currentPost: IPost): void {
    this.post = currentPost;
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET DATA **********/
  /******************************/

  getData(): void {
    this._getPost();
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET POST **********/
  /******************************/

  private _getPost(): void {
    if ((this.slug && this.slug.length > 0)) {
      this.queryService.getBySlugAsync(this.slug).subscribe(post => this._setData(post as IPost));
      return;
    }
  }

}

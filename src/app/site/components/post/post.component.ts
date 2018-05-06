/**
 * Website - Post Component - Component
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [ PostService ]
})

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** POST COMPONENT **********/
/************************************/

export class PostComponent implements OnInit, IQuerierComponent {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var string input id post id
   * @var string input slug post slug
   * @var IQueryService queryService querier serivce
   * @var IPost _post post
   */

  @Input('postID') id: string;
  @Input('postSlug') slug: string;
  public queryService: IQueryService;
  private _post: IPost;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  constructor(queryService: PostService) { }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** NG ON INIT **********/
  /********************************/

  ngOnInit() {
    this.getData();
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
    if ((this.id && this.id.length > 0)) {
      this.queryService.getByIDAsync(this.id).then(post => this._post = post as IPost);
      return;
    }

    if ((this.slug && this.slug.length > 0)) {
      this.queryService.getBySlugAsync(this.slug).then(post => this._post = post as IPost);
      return;
    }
  }

}

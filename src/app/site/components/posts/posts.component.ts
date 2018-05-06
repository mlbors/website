/**
 * Website - Posts Component - Component
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
import { IPostService } from '../../interfaces/ipost-service';
import { IQuerierComponent } from '../../interfaces/iquerier-component';
import { IQueryService } from '../../interfaces/iquery-service';

import { PostService } from '../../services/post.service';
import { IQueryable } from '../../interfaces/iqueryable';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ PostService ]
})

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** POST COMPONENT **********/
/************************************/

export class PostsComponent implements OnInit, IQuerierComponent {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var string input type post type
   * @var IQueryService queryService querier serivce
   * @var Array _post array of posts
   */

  @Input('postType') type: string;
  public queryService: IQueryService & IPostService;
  private _posts: Array<IQueryable>;

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
    this._getPosts();
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET POST **********/
  /******************************/

  private _getPosts(): void {
    if (this.type && this.type.length > 0) {
      this.queryService.getAllByType(this.type).then(posts => this._posts = posts);
    }

  }

}

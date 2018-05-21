/**
 * Website - Projects List Component - Component
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

import { IPost } from '../../interfaces/ipost';
import { IPostService } from '../../interfaces/ipost-service';
import { IQuerierComponent } from '../../interfaces/iquerier-component';
import { IQueryable } from '../../interfaces/iqueryable';
import { IQueryService } from '../../interfaces/iquery-service';
import { ITaxonomy } from '../../interfaces/itaxonomy';
import { ITaxonomyService } from '../../interfaces/itaxonomy-service';
import { ITerm } from '../../interfaces/iterm';

import { PostService } from '../../services/post.service';
import { TaxonomyService } from '../../services/taxonomy.service';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  providers: [ PostService, TaxonomyService ]
})

/********************************************************************************/
/********************************************************************************/

/*********************************************/
/********** PROJECTS LIST COMPONENT **********/
/*********************************************/

export class ProjectsListComponent implements OnInit, IQuerierComponent {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IQueryService queryService querier serivce
   * @var Array post array of posts
   */

  public queryService: IQueryService & IPostService;
  public taxonomyService: IQueryService & ITaxonomyService;
  public posts: Array<IQueryable>;
  public terms: Array<ITerm>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IQueryService queryService querier serivce
   * @param IQueryService taxonomyService querier service
   */

  constructor(queryService: PostService, taxonomyService: TaxonomyService) {
    this._setValues(queryService, taxonomyService);
  }

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

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param IQueryService queryService querier serivce
   * @param IQueryService taxonomyService querier service
   */

  private _setValues(service: IQueryService & IPostService, taxonomyService: IQueryService & ITaxonomyService) {
    this._setQueryService(service);
    this._setTaxonomyService(taxonomyService);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** SET QUERY SERVICE **********/
  /***************************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  private _setQueryService(service: IQueryService & IPostService) {
    this.queryService = service;
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** SET TAXONOMY SERVICE **********/
  /*******************************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  private _setTaxonomyService(service: IQueryService & ITaxonomyService) {
    this.taxonomyService = service;
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET DATA **********/
  /******************************/

  getData(): void {
    this._getPosts();
    this._getTerms();
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET POST **********/
  /******************************/

  private _getPosts(): void {
    this.queryService.getAllByType('project').then(posts => this.posts = posts);
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET TERMS **********/
  /*******************************/

  private _getTerms(): void {
    this.taxonomyService.getBySlugAsync('project-category').then(taxonomy => {
      const tax = taxonomy as ITaxonomy;
      this.terms = tax.terms;
    });
  }

}

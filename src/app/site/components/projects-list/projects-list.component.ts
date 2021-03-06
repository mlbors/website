/**
 * Website - Projects List Component - Component
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
import { trigger, state, style, animate, transition } from '@angular/animations';

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

import { PostTermPipe } from '../../pipes/post-term.pipe';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  providers: [ PostService, TaxonomyService ],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(300)
      ]),
      transition(':leave',
        animate(300, style({opacity: 0})))
    ]),
    trigger('filterStateAnimation', [
      state('filtering', style({
        opacity: 0
      })),
      state('filtered', style({
        opacity: 100
      })),
      transition('filtered => filtering', animate('100ms ease-in')),
      transition('filtering => filtered', animate('100ms ease-out'))
    ])
  ]
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
   * @var IQueryService taxonomyService querier service for taxonomy
   * @var Array posts array of posts
   * @var Array terms array of terms
   * @var String selectedTerm term selected for filtering
   * @var String filterState indicates if the project filter is active
   */

  public queryService: IQueryService & IPostService;
  public taxonomyService: IQueryService & ITaxonomyService;
  public posts: Array<IQueryable>;
  public terms: Array<ITerm>;
  public selectedTerm: String = null;
  public filterState: String = 'filtered';

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
  /******************************************/

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
    this.queryService.getAllByType('project').subscribe(posts => {
      (posts as Array<IPost>).sort((a, b) => {
        return a.order - b.order;
      });
      this.posts = posts;
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET TERMS **********/
  /*******************************/

  private _getTerms(): void {
    this.taxonomyService.getBySlugAsync('project-category').subscribe(taxonomy => {
      const tax = taxonomy as ITaxonomy;
      this.terms = tax.terms;
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** FILTER PROJECTS **********/
  /*************************************/

  /**
   * @param String slug term slug
   */

  public filterProjects(slug: string): void {
    this.filterState = 'filtering';
    setTimeout(() => {
      this.selectedTerm = slug;
    }, 150);
    setTimeout(() => {
      this.filterState = 'filtered';
    }, 150);
  }

}

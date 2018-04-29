/**
 * Website - Taxonomy Service - Service
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Inject, Injectable } from '@angular/core';

import { IQueryable } from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { ITaxonomyService } from '../interfaces/itaxonomy-service';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITerm } from '../interfaces/iterm';

import { TermService } from './term.service';

import { TAXONOMIES } from '../../../../data/taxonomies';

/********************************************************************************/
/********************************************************************************/

/**************************************/
/********** TAXONOMY SERVICE **********/
/**************************************/

@Injectable()
export class TaxonomyService implements IQueryService, ITaxonomyService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IQueryService termService querier serivce
   * @var Array<ITaxonomy> _data data to use
   */

  termService: IQueryService;
  private _data: Array<ITaxonomy>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param Array<ITaxonomy> data data to use
   * @param IQueryService termService service to use for terms
   */

  constructor(@Inject(TAXONOMIES) data: Array<ITaxonomy>, termService: TermService) {
    this._data = data;
  }

  /********************************************************************************/
  /********************************************************************************/

  /*****************************/
  /********** GET ALL **********/
  /*****************************/

  /**
   * @return Array<IQueryable>
   */

  getAll(): Array<IQueryable> {
    return this._data;
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET BY ID **********/
  /*******************************/

  /**
   * @param String id object id
   * @return IQueryable
   */

  getByID(id: string): IQueryable {
    return this._data.find(taxonomy => taxonomy.id === id);
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** GET BY SLUG **********/
  /*********************************/

  /**
   * @param String slug object slug
   * @return IQueryable
   */

  getBySlug(slug: string): IQueryable {
    return this._data.find(taxonomy => taxonomy.slug === slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET TERMS **********/
  /*******************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Array<ITerm>
   */

  getTerms(id?: string, slug?: string): Array<ITerm> {
    if (id && id.length > 0) {
      const taxonomy = this.getByID(id) as ITaxonomy;
      return taxonomy.terms;
    }

    if (slug && slug.length > 0) {
      const taxonomy = this.getBySlug(slug) as ITaxonomy;
      return taxonomy.terms;
    }
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** GET ALL ASYNC **********/
  /***********************************/

  /**
   * @return Promise<Array<IQueryable>>
   */

  getAllAsync(): Promise<Array<IQueryable>> {
    return Promise.resolve(this.getAll());
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET BY ID ASYNC **********/
  /*************************************/

  /**
   * @param String id object id
   * @return Promise<IQueryable>
   */

  getByIDAsync(id: string): Promise<IQueryable> {
    return new Promise((resolve, reject) => {
      if (!id || id.length < 0) {
        reject();
        return;
      }
      resolve(this.getByID(id));
      return;
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET BY SLUG ASYNC **********/
  /***************************************/

  /**
   * @param String slug object slug
   * @return Promise<IQueryable>
   */

  getBySlugAsync(slug: string): Promise<IQueryable> {
    return new Promise((resolve, reject) => {
      if (!slug || slug.length < 0) {
        reject();
        return;
      }
      resolve(this.getBySlug(slug));
      return;
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET TERMS ASYNC **********/
  /*************************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Promise<Array<ITerm>>
   */

  getTermsAsync(id?: string, slug?: string): Promise<Array<ITerm>> {
    return new Promise((resolve, reject) => {
      if ((!id || id.length < 0) && (!slug && slug.length < 0)) {
        reject();
        return;
      }
      resolve(this.getTerms(id, slug));
      return;
    });
  }

}

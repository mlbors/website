/**
 * Website - Post Service - Service
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

import { IMetaData } from '../interfaces/imeta-data';
import { IPost } from '../interfaces/ipost';
import { IPostService } from '../interfaces/ipost-service';
import { IQueryable } from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';

import { TaxonomyService } from './taxonomy.service';

import { POSTS } from '../../../../data/posts';

/********************************************************************************/
/********************************************************************************/

/**********************************/
/********** POST SERVICE **********/
/**********************************/

@Injectable()
export class PostService implements IQueryService, IPostService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var IQueryService taxonomyService querier serivce
   * @var Array<IPost> _data data to use
   */

  taxonomyService: IQueryService;
  private _data: Array<IPost>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param Array<IPost> data data to use
   * @param IQueryService taxonomyService service to use for taxonomies
   */

  constructor(@Inject(POSTS) data: Array<IPost>, taxonomyService: TaxonomyService) {
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
    return this._data.find(post => post.id === id);
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
    return this._data.find(post => post.slug === slug);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************/
  /********** GET META DATA **********/
  /***********************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Array<IMetaData>
   */

  getMeta(id?: string, slug?: string): Array<IMetaData> {
    if (id && id.length > 0) {
      const post = this.getByID(id) as IPost;
      return post.meta;
    }

    if (slug && slug.length > 0) {
      const post = this.getBySlug(slug) as IPost;
      return post.meta;
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

  /************************************/
  /********** GET META ASYNC **********/
  /************************************/

  /**
   * @param String id object id
   * @param String slug object slug
   * @return Promise<Array<IMetaData>>>
   */

  getMetaAsync(id?: string, slug?: string): Promise<Array<IMetaData>> {
    return new Promise((resolve, reject) => {
      if ((!id || id.length < 0) && (!slug && slug.length < 0)) {
        reject();
        return;
      }
      resolve(this.getMeta(id, slug));
      return;
    });
  }

}

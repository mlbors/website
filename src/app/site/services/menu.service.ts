/**
 * Website - Menu Service - Service
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Inject, Injectable } from '@angular/core';

import { IMenu } from '../interfaces/imenu';
import { IMenuService } from '../interfaces/imenu-service';
import { IQueryable } from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';

import { MENUS } from '../../../../data/menus';

/********************************************************************************/
/********************************************************************************/

/**********************************/
/********** MENU SERVICE **********/
/**********************************/

@Injectable()
export class MenuService implements IQueryService, IMenuService {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var Array<IMenu> _data data to use
   */

  private _data: Array<IMenu>;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  constructor() {
    this._data = MENUS;
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
    return this._data.find(menu => menu.id === id);
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
    return this._data.find(menu => menu.slug === slug);
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
}

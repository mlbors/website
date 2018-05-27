/**
 * Website - Post Term - Pipe
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Pipe, PipeTransform } from '@angular/core';

import { IPost } from '../interfaces/ipost';
import { IQueryable } from '../interfaces/iqueryable';

/********************************************************************************/
/********************************************************************************/

/**************************/
/********** PIPE **********/
/**************************/

@Pipe({
  name: 'postTerm'
})

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** POST TERM PIPE **********/
/************************************/

export class PostTermPipe implements PipeTransform {

  /*******************************/
  /********** TRANSFORM **********/
  /*******************************/

  transform(items: Array<IQueryable>, termSlug: string): Array<IQueryable> {
    if (typeof termSlug === undefined || !termSlug || termSlug.length === 0 || termSlug === '') {
      return items;
    }

    return items.filter(item => {
      const itemTerms = (item as IPost).terms;

      if (typeof itemTerms === undefined || !itemTerms || itemTerms.length === 0 || itemTerms === null) {
        return;
      }

      const p = itemTerms.find(obj => obj.slug === termSlug);

      if (p) {
        return item;
      }

      return;
    });
  }

}

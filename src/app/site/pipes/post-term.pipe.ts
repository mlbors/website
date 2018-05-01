/**
 * Website - Post Term - Pipe
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
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
    if (!termSlug || termSlug.length === 0) {
      return items;
    }

    return items.filter(item => {
      (item as IPost).terms.filter(obj => {
        return obj.slug === termSlug;
      });
    });
  }

}

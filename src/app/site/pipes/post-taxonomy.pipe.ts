/**
 * Website - Post Taxonomy - Pipe
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
  name: 'postTaxonomy'
})

/********************************************************************************/
/********************************************************************************/

/****************************************/
/********** POST TAXONOMY PIPE **********/
/****************************************/

export class PostTaxonomyPipe implements PipeTransform {

  /*******************************/
  /********** TRANSFORM **********/
  /*******************************/

  transform(items: Array<IQueryable>, taxonomySlug: string): Array<IQueryable> {
    if (!taxonomySlug || taxonomySlug.length === 0) {
      return items;
    }

    return items.filter(item => {
      const itemTaxonomies = (item as IPost).taxonomies;

      if (typeof itemTaxonomies === undefined || !itemTaxonomies || itemTaxonomies.length === 0 || itemTaxonomies === null) {
        return;
      }

      const p = itemTaxonomies.find(obj => obj.slug === taxonomySlug);

      if (p) {
        return item;
      }

      return;
    });
  }
}

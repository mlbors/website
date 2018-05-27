/**
 * Website - ITaxonomyService - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IQueryService } from './iquery-service';
import { ITerm } from './iterm';

/********************************************************************************/
/********************************************************************************/

/***************************************/
/********** ITAXONOMY SERVICE **********/
/***************************************/

export interface ITaxonomyService {
  termService: IQueryService;

  getTerms(id?: string, slug?: string): Array<ITerm>;
  getTermsAsync(id?: string, slug?: string): Promise<Array<ITerm>>;
}

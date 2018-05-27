/**
 * Website - ITaxonomy - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { ITerm } from './iterm';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** ITAXONOMY **********/
/*******************************/

export interface ITaxonomy {
  id: string;
  name: string;
  slug: string;
  terms: Array<ITerm>;
}

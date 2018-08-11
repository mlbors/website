/**
 * Website - IPost - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IMetaData } from './imeta-data';
import { ISection } from './isection';
import { ITaxonomy } from './itaxonomy';
import { ITerm } from './iterm';
import { IType } from './itype';

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** IPOST **********/
/***************************/

export interface IPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  sections: Array<ISection>;
  image?: string;
  images?: Array<string>;
  type: IType;
  order: number;
  taxonomies?: Array<ITaxonomy>;
  terms?: Array<ITerm>;
  meta?: Array<IMetaData>;
  template: string;
}

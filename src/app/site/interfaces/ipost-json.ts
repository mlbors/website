/**
 * Website - IPostJson - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/********************************/
/********** IPOST JSON **********/
/********************************/

export interface IPostJson {
  id: string;
  slug: string;
  title: string;
  content: string;
  image?: string;
  type: string;
  order: number;
  taxonomies?: Array<string>;
  terms?: Array<string>;
  meta?: Array<string>;
}

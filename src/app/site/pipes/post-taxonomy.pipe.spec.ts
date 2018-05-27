/**
 * Website - Post Taxonomy - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { PostTaxonomyPipe } from './post-taxonomy.pipe';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('PostTaxonomyPipe', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CREATE PIPE **********/
  /*********************************/

  it('create an instance', () => {
    const pipe = new PostTaxonomyPipe();
    expect(pipe).toBeTruthy();
  });
});

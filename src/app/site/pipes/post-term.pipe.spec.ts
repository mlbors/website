/**
 * Website - Post Term - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IDataService } from '../interfaces/idata-service';
import { IMetaData } from '../interfaces/imeta-data';
import { IPost } from '../interfaces/ipost';
import { IPostService } from '../interfaces/ipost-service';
import { IQueryable} from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITaxonomyService } from '../interfaces/itaxonomy-service';
import { ITerm } from '../interfaces/iterm';
import { ITermService } from '../interfaces/iterm-service';
import { IType } from '../interfaces/itype';
import { IWebData } from '../interfaces/iweb-data';

import { PostTermPipe } from './post-term.pipe';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('PostTermPipe', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CREATE PIPE **********/
  /*********************************/

  it('create an instance', () => {
    const pipe = new PostTermPipe();
    expect(pipe).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** WITH NO SLUG **********/
  /**********************************/

  it('should return items when no slug', () => {
    const pipe = new PostTermPipe();

    const postType: IType = { id: 'post', name: 'post', slug: 'post' };
    const post: IPost = {
      id: 'foo-id',
      slug: 'foo-slug',
      title: 'foo title',
      excerpt: 'foo excerpt',
      content: 'foo content',
      sections: null,
      image: null,
      images: ['foo', 'foo2'],
      type: postType,
      order: 1,
      taxonomies: null,
      terms: null,
      meta: null,
      template: 'foo-template'
    };

    const items: Array<IQueryable> = [post];
    const termSlug = null;

    const result = pipe.transform(items, termSlug);

    expect((result[0] as IPost).id).toEqual('foo-id');
    expect(result.length).toEqual(1);
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** RETURN RIGHT RESULT **********/
  /*****************************************/

  it('should return filterd items', () => {
    const pipe = new PostTermPipe();

    const postType: IType = { id: 'post', name: 'post', slug: 'post' };
    const term1: ITerm = { id: 'term1', name: 'term1', slug: 'term1', taxonomy: 'foo-tax' };
    const term2: ITerm = { id: 'term2', name: 'term2', slug: 'term2', taxonomy: 'foo-tax' };

    const items: Array<IQueryable> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        title: 'foo title',
        excerpt: 'foo excerpt',
        content: 'foo content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: null,
        terms: [term1],
        meta: null,
        template: 'foo-template'
      },
      {
        id: 'foo2-id',
        slug: 'foo2-slug',
        title: 'foo2 title',
        excerpt: 'foo2 excerpt',
        content: 'foo2 content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: null,
        terms: [term1, term2],
        meta: null,
        template: 'foo-template'
      },
      {
        id: 'foo3-id',
        slug: 'foo3-slug',
        title: 'foo3 title',
        excerpt: 'foo3 excerpt',
        content: 'foo3 content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: null,
        terms: [term2],
        meta: null,
        template: 'foo-template'
      }
    ];
    const termSlug = 'term1';

    const result = pipe.transform(items, termSlug);

    expect((result[0] as IPost).id).toEqual('foo-id');
    expect((result[1] as IPost).id).toEqual('foo2-id');
    expect(result.length).toEqual(2);
  });
});

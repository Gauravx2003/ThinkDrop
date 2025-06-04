import {defineQuery} from 'next-sanity';

export const STARTUP_QUERY = defineQuery(
    `*[_type == 'startup' && defined(slug.current) && !defined($search) 
    || title match $search || Category match $search || author->name match $search] | order(_createdAt desc){
  _id,
  views,
  _createdAt,
  title,
    author->{
      name, image, _id
    },
    Category,
    description,
    image,
    slug
}`

);

export const STARTUP_BY_ID_QUERY = defineQuery(
    `*[_type == 'startup' && _id==$id][0]{
  _id,
  views,
  title,
    _createdAt,
    author->{
      name,username,bio,image
    },
    Category,
    description,
    image,
    slug,
    pitch,
}`
);

export const STARTUP_VIEWS_QUERY = defineQuery(`
    *[_type == "startup" && _id == $id][0]{
        _id, views
    }
`);

export const AUTHOR_BY_GITHUB_ID = defineQuery(
    `*[_type == "author" && id == $id][0]{
        _id,
        id,
        name,
        username,
        email,
        image,
        bio
    }`
);

export const AUTHOR_BY_ID = defineQuery(
    `*[_type == "author" && _id == $id][0]{
        _id,
        id,
        name,
        username,
        email,
        image,
        bio
    }`
);

export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  Category,
  image,
}`);

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    Category,
    image,
    pitch
  }
}`);

export const PLAYLIST_BY_NAME_QUERY =
  defineQuery(`*[_type == "playlist" && title == $title][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    Category,
    image,
    pitch
  }
}`);
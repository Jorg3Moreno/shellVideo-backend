const moviesMock = [
  {
    id: '0e5df6f6-9909-4b5b-807f-db386f94e57a',
    title: 'Cat in Paris, A (Une vie de chat)',
    year: 2008,
    cover: 'http://dummyimage.com/122x175.jpg/5fa2dd/ffffff',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1904,
    contentRating: 'PG-13',
    source: 'https://e-recht24.de/ipsum/primis/in/faucibus.png',
    tags: ['Drama|Mystery|Thriller']
  },
  {
    id: '0b548fbe-d817-4070-9d3c-66a4ac3a3acb',
    title: 'Stars Fell on Henrietta, The',
    year: 2010,
    cover: 'http://dummyimage.com/204x164.jpg/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1961,
    contentRating: 'PG-13',
    source: 'http://dot.gov/posuere/nonummy/integer/non/velit/donec.png',
    tags: [
      'Mystery|Thriller',
      'Drama',
      'Comedy',
      'Crime|Drama',
      'Crime|Horror|Thriller'
    ]
  },
  {
    id: '2c6c3901-9eeb-44d2-96a3-c0422f3dd5b8',
    title: 'Insect Woman, The (Nippon konchûki)',
    year: 1999,
    cover: 'http://dummyimage.com/139x124.png/dddddd/000000',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2060,
    contentRating: 'R',
    source: 'http://jalbum.net/lacus/curabitur/at/ipsum/ac/tellus/semper.png',
    tags: ['Horror']
  },
  {
    id: 'e074f1d3-18a3-4bb3-986a-c03ad6dec913',
    title: '12 Years a Slave',
    year: 2002,
    cover: 'http://dummyimage.com/215x129.png/dddddd/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 2014,
    contentRating: 'G',
    source: 'https://irs.gov/a/ipsum/integer/a.json',
    tags: ['Horror', 'Comedy|Drama', 'Drama', 'Horror']
  },
  {
    id: 'c1379e62-5b17-4d29-9985-e1c9b3b4db94',
    title: 'Village of the Giants',
    year: 2009,
    cover: 'http://dummyimage.com/227x177.bmp/dddddd/000000',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 1912,
    contentRating: 'PG',
    source: 'http://cyberchimps.com/congue/vivamus/metus.xml',
    tags: [
      'Action|Adventure|Comedy|Crime',
      'Action|Fantasy|Sci-Fi',
      'Adventure|Drama|Western',
      'Action'
    ]
  },
  {
    id: '560d70d2-6596-4d3a-83f8-41727a3ccb99',
    title: 'Breaking the Silence: Truth and Lies in the War on Terror',
    year: 1995,
    cover: 'http://dummyimage.com/130x142.jpg/dddddd/000000',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 2005,
    contentRating: 'R',
    source: 'https://behance.net/primis/in/faucibus.json',
    tags: [
      'Action|Drama',
      'Thriller',
      'Adventure|Children|Sci-Fi',
      'Comedy|Drama',
      'Comedy|Drama'
    ]
  },
  {
    id: 'ce00899a-7225-419b-b545-5e9281a1f800',
    title: 'Dish & the Spoon, The',
    year: 2011,
    cover: 'http://dummyimage.com/110x114.png/5fa2dd/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 1914,
    contentRating: 'PG',
    source: 'https://cisco.com/massa.xml',
    tags: [
      'Drama',
      'Drama',
      'Crime|Drama|Horror|Thriller',
      'Drama|Thriller',
      'Crime|Drama'
    ]
  },
  {
    id: '91c89106-3c7b-42df-81f7-f4a24d925d75',
    title: "Man, Woman and Beast (L'uomo la donna e la bestia)",
    year: 2001,
    cover: 'http://dummyimage.com/107x120.png/5fa2dd/ffffff',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 2041,
    contentRating: 'R',
    source: 'http://altervista.org/in.png',
    tags: ['Animation|Fantasy|Horror|Sci-Fi', 'Drama', 'Animation|Drama']
  },
  {
    id: '32495d77-76e3-48a9-ab2c-a32080dd5c0a',
    title: 'War and Peace (Voyna i mir)',
    year: 2006,
    cover: 'http://dummyimage.com/203x237.jpg/ff4444/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 2023,
    contentRating: 'PG-13',
    source: 'http://is.gd/congue/etiam/justo.xml',
    tags: ['Horror', 'Documentary', '(no genres listed)']
  },
  {
    id: '5d543297-e773-4ded-add0-60212b880d6e',
    title: 'Storm Catcher',
    year: 1995,
    cover: 'http://dummyimage.com/192x214.bmp/5fa2dd/ffffff',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 2054,
    contentRating: 'R',
    source: 'http://columbia.edu/felis.html',
    tags: ['Crime|Drama', 'Comedy|War', 'Comedy']
  }
];

function filterMoviesMocks(tag) {
  return moviesMock.filter(movie => movie.tag.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filterMoviesMocks,
  MoviesServiceMock
};

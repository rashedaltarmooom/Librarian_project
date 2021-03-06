const BOOKS = [
  {
    _id: "62853a01d8ec5d3d4a29fa5b",
    author: "Leigh Bardugo",
    title: "The Language of Thorns: Midnight Tales and Dangerous Magic",
    genres: ["Fantasy"],
    available: true,
    borrowedBy: [
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "628a6f1ecd8ce1b897b328c7",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "6285150fb8273a86534c95bb",
      "6285150fb8273a86534c95bb",
      "628a7101cd8ce1b897b3293e",
      "62865868308ef6b485b9f726",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "628a791acd8ce1b897b32b60",
      "6285150fb8273a86534c95bb",
      "6285150fb8273a86534c95bb",
      "62862391308ef6b485b9f547",
      "6285150fb8273a86534c95bb",
      "62862391308ef6b485b9f547",
      "628514d5b8273a86534c95b8",
      "628664c1308ef6b485b9f87f",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "62865868308ef6b485b9f726",
      "628815d5d323bec639909b55",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "62864fa9308ef6b485b9f62c",
      "628514d5b8273a86534c95b2",
      "6287c35be2f657d502cc7013",
      "6287ef4fe2f657d502cc70b4",
      "6285150fb8273a86534c95bb",
      "628a6a8ccd8ce1b897b327f9",
      "62865143308ef6b485b9f663",
      "628a51907c09f11be43f9b48",
      "628514d5b8273a86534c95b8",
      "62864fa9308ef6b485b9f62c",
      "62865143308ef6b485b9f663",
      "628bbf4f481797e667009e93",
    ],
    slug: "the-language-of-thorns-midnight-tales-and-dangerous-magic-1",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491842507l/34076952.jpg",
  },
  {
    _id: "62853a1ad8ec5d3d4a29fa5f",
    author: "Elif Shafak",
    title: "The Forty Rules of Love",
    genres: ["Fiction"],
    available: true,
    borrowedBy: [
      "62862391308ef6b485b9f547",
      "628514d5b8273a86534c95b8",
      "62865868308ef6b485b9f726",
      "62862391308ef6b485b9f547",
      "628664c1308ef6b485b9f87f",
      "628514d5b8273a86534c95b4",
      "62864fa9308ef6b485b9f62c",
      "62862391308ef6b485b9f547",
      "628ba75ecd8ce1b897b33e81",
      "628bbf4f481797e667009e93",
      "62864fa9308ef6b485b9f62c",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b2",
    ],
    slug: "the-forty-rules-of-love",
    image:
      "https://platinum-book.com/wp-content/uploads/2021/08/91Q4lLuogQL.jpg",
  },
  {
    _id: "62853a22d8ec5d3d4a29fa62",
    author: "Agatha Christie",
    title: "Curtain: Poirot's Last Case",
    genres: ["Crime", "Mystery"],
    available: false,
    borrowedBy: [
      "62864fa9308ef6b485b9f62c",
      "6285150fb8273a86534c95bb",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "62862391308ef6b485b9f547",
      "62864fa9308ef6b485b9f62c",
      "628514d5b8273a86534c95b4",
      "62865143308ef6b485b9f663",
      "62864fa9308ef6b485b9f62c",
      "628514d5b8273a86534c95b6",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "6285150fb8273a86534c95bb",
      "6285150fb8273a86534c95bb",
      "6285150fb8273a86534c95bb",
      "62862391308ef6b485b9f547",
      "6285150fb8273a86534c95bb",
      "6285150fb8273a86534c95bb",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62864fa9308ef6b485b9f62c",
      "62865143308ef6b485b9f663",
      "62864fa9308ef6b485b9f62c",
      "628514d5b8273a86534c95b4",
      "62862391308ef6b485b9f547",
      "628a51907c09f11be43f9b48",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "6285150fb8273a86534c95bb",
    ],
    slug: "curtain-poirot-s-last-case",
    image: "https://images-na.ssl-images-amazon.com/images/I/813H-43Z8-L.jpg",
  },
  {
    _id: "62853a2bd8ec5d3d4a29fa65",
    author: "Leigh Bardugo",
    title: "Six of Crows",
    genres: ["Fantasy"],
    available: false,
    borrowedBy: ["628514d5b8273a86534c95b8", "628514d5b8273a86534c95b8"],
    slug: "six-of-crows",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423848167l/22294935.jpg",
  },
  {
    _id: "62853a31d8ec5d3d4a29fa68",
    author: "George R.R. Martin",
    title: "A Storm of Swords",
    genres: ["Fantasy"],
    available: false,
    borrowedBy: [
      "62862391308ef6b485b9f547",
      "6285150fb8273a86534c95bb",
      "628a7101cd8ce1b897b3293e",
      "6285150fb8273a86534c95bb",
      "62864fa9308ef6b485b9f62c",
      "62862391308ef6b485b9f547",
      "6285150fb8273a86534c95bb",
    ],
    slug: "a-storm-of-swords",
    image: "http://bestsellers.hu/images/item_image/original/66.jpg",
  },
  {
    _id: "62853a37d8ec5d3d4a29fa6b",
    author: "Eric Ries",
    title: "The Lean Startup",
    genres: ["Business", "Entrepreneurship"],
    available: true,
    borrowedBy: [
      "6285150fb8273a86534c95bb",
      "62864fa9308ef6b485b9f62c",
      "6285150fb8273a86534c95bb",
      "62865868308ef6b485b9f726",
      "628514d5b8273a86534c95b8",
      "628514d5b8273a86534c95b8",
      "62862391308ef6b485b9f547",
      "628815d5d323bec639909b55",
    ],
    slug: "the-lean-startup",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg",
  },
  {
    _id: "62853a3dd8ec5d3d4a29fa6e",
    author: "Paul Kalanithi",
    title: "When Breath Becomes Air",
    genres: ["Biography"],
    available: false,
    borrowedBy: [
      "62862391308ef6b485b9f547",
      "628514d5b8273a86534c95b6",
      "6285150fb8273a86534c95bb",
      "6285150fb8273a86534c95bb",
    ],
    slug: "when-breath-becomes-air",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5291/9781529110944.jpg",
  },
  {
    _id: "62853a5bd8ec5d3d4a29fa74",
    author: "Robin Sloan",
    title: "Mr. Penumbra's 24-Hour Bookstore",
    genres: ["Suspense", "Fantasy"],
    available: false,
    borrowedBy: [],
    slug: "mr-penumbra-s-24-hour-bookstore-1",
    image: "https://images-na.ssl-images-amazon.com/images/I/71e6wpNkAFL.jpg",
  },
];

export default BOOKS;

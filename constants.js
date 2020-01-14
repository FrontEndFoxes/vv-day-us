// Perhaps this should be in the store,
// but none of this stuff gets mutated,
// so I'm fine with it being in this file (for now)

export const REGISTRATION_URL =
  'https://ti.to/frontendfoxes/vvdayus/with/zutegidximo'
export const CFP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeINlRZRk3QrRPJLFJAjIk_IgEiEvp6NuKDcKp4L_AILbs1zw/viewform?usp=sf_link'
export const FAQ_URL = 'https://www.vuevixens.org/about'
export const SPONSOR_URL = './vvday-us-2020.pdf'
export const HEADER_IMAGE = require('./assets/images/austin-city-darken.jpeg')

export const SPONSORS_DATA = [
  {
    name: `FrontendMasters`,
    logo: require('./assets/images/sponsors/frontendmasters.png'),
    link: `https://www.frontendmasters.com`,
    level: 'platinum'
  },
  {
    name: `Microsoft`,
    logo: require('./assets/images/sponsors/microsoft.png'),
    link: `https://www.microsoft.com`,
    level: 'platinum'
  },
  {
    name: `Storyblok`,
    logo: require('./assets/images/sponsors/storyblok.png'),
    link: `https://www.storyblok.com`,
    level: 'platinum'
  },
  {
    name: `Vue Mastery`,
    logo: require('./assets/images/sponsors/vuemastery.png'),
    link: `https://www.vuemastery.com`,
    level: 'silver'
  }
]

export const LIGHTNINGS_DATA = [
  {
    name: `Diana Rodriguez`,
    id: 1,
    talkTitle: `"Fostering Success in Tech: The DevOps Culture Approach"`,
    twitterUrl: `https://twitter.com/cotufa82`,
    photo: require('./assets/images/speakers/diana-rodriguez_400x400.png')
  },
  {
    name: `Amarachi Amaechi`,
    id: 2,
    talkTitle: `"Networking the Right Way"`,
    twitterUrl: `https://twitter.com/AmarachiAmaechi`,
    photo: require('./assets/images/speakers/amarachi-amaechi.jpg')
  }
  /*{
    name: `Diana Rodriguez`,
    id: 3,
    talkTitle: `"DevOps Culture"`,
    twitterUrl: `https://twitter.com/cotufa82`,
    photo: require('./assets/images/speakers/diana-rodriguez_400x400.png')
  },
  {
    name: `Diana Rodriguez`,
    id: 4,
    talkTitle: `"DevOps Culture"`,
    twitterUrl: `https://twitter.com/cotufa82`,
    photo: require('./assets/images/speakers/diana-rodriguez_400x400.png')
  },
  {
    name: `Diana Rodriguez`,
    id: 5,
    talkTitle: `"DevOps Culture"`,
    twitterUrl: `https://twitter.com/cotufa82`,
    photo: require('./assets/images/speakers/diana-rodriguez_400x400.png')
  }*/
]

export const PRESENTERS_DATA = [
  {
    name: `Sarah Drasner`,
    id: 6,
    talkTitle: `"The Art of Code Comments"`,
    photo: require('./assets/images/speakers/sarah-drasner_400x400.jpg'),
    twitterUrl: `https://twitter.com/sarah_edo`,
    keynote: true,
    opener: true
  },

  {
    name: `Maria Lamardo`,
    id: 7,
    talkTitle: `"When Life Takes Your Scrubs; npm run build"`,
    photo: require('./assets/images/speakers/maria-lamardo_400x400.jpg'),
    twitterUrl: `https://twitter.com/MariaLamardo`
  },
  {
    name: `Kim Maida`,
    id: 8,
    talkTitle: `"7 Secrets of Highly Successful Developers"`,
    photo: require('./assets/images/speakers/kim-maida_400x400.jpg'),
    twitterUrl: `https://twitter.com/kimmaida`
  },
  {
    name: `Michele Cynowicz`,
    id: 9,
    talkTitle: `"Building a Successful Remote Work Culture"`,
    photo: require('./assets/images/speakers/michele-cynowicz_400x400.jpg'),
    twitterUrl: `https://twitter.com/michelecynowicz`
  },
  {
    name: `Jess Sachs`,
    id: 10,
    talkTitle: `"Avoiding a Rewrite: Techniques to Progressively Adopt Vue"`,
    photo: require('./assets/images/speakers/jess-sachs_400x400.png'),
    twitterUrl: `https://twitter.com/_JessicaSachs`
  },
  {
    name: `Tessa`,
    id: 11,
    talkTitle: `"A Brief Introduction to the Art of the Fox Lunch"`,
    photo: require('./assets/images/speakers/tessa_400x400.jpg'),
    twitterUrl: `https://twitter.com/halftes6`
  },
  {
    name: `Jen Looper`,
    id: 12,
    talkTitle: `"Vue Vixens: Past, Present and Future"`,
    keynote: true,
    closer: true,
    photo: require('./assets/images/speakers/jen-looper_400x400.png'),
    twitterUrl: `https://twitter.com/jenlooper`
  }
]

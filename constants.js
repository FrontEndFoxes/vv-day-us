// Perhaps this should be in the store,
// but none of this stuff gets mutated,
// so I'm fine with it being in this file (for now)

export const REGISTRATION_URL = 'https://ti.to/frontendfoxes/vvdayus/with/zutegidximo';
export const CFP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeINlRZRk3QrRPJLFJAjIk_IgEiEvp6NuKDcKp4L_AILbs1zw/viewform?usp=sf_link';
export const FAQ_URL = 'https://www.vuevixens.org/about';
export const HEADER_IMAGE = require('./assets/images/austin-city-darken.jpeg');

export const PRESENTERS_DATA = [
  {
    name: `Sarah Drasner`,
    talkTitle: `"The Art of Code Comments"`,
    photo: require('./assets/images/speakers/sarah-drasner_400x400.jpg'),
    twitterUrl: `https://twitter.com/sarah_edo`,
    keynote: true,
  },
  {
    name: `Jen Looper`,
    talkTitle: `"The Humanist's Guide to Deep Learning"`,
    photo: require('./assets/images/speakers/jen-looper_400x400.png'),
    twitterUrl: `https://twitter.com/jenlooper`,
  },
  {
    name: `Maria Lamardo`,
    talkTitle: `"When Life Takes Your Scrubs; npm run build"`,
    photo: require('./assets/images/speakers/maria-lamardo_400x400.jpg'),
    twitterUrl: `https://twitter.com/MariaLamardo`,
  },
  {
    name: `Diana Rodriguez`,
    talkTitle: `"Fostering Success in Tech: The DevOps culture approach"`,
    photo: require('./assets/images/speakers/diana-rodriguez-manrique_400x400.jpg'),
    twitterUrl: `https://twitter.com/cotufa82`,
  },
]

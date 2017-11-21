const confs2018 = [
  {
    name: 'CodeMash',
    link: 'http://www.codemash.org/',
    organization: 'CodeMash Conference',
    startDate: new Date('January 9, 2018').getTime(),
    endDate: new Date('January 12, 2018').getTime(),
    location: {
      city: 'Sandusky',
      state: 'OH',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('August 31, 2017').getTime(),
    travel: 'Hotel Only',
    coc: 'http://www.codemash.org/codemash-code-conduct/',
  },
  {
    name: 'beyond tellerrand',
    link: 'https://beyondtellerrand.com/',
    organization: false,
    startDate: new Date('January 15, 2018').getTime(),
    endDate: new Date('January 17, 2018').getTime(),
    location: {
      city: 'Munich',
      state: false,
      country: 'Germany',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://beyondtellerrand.com/code-of-conduct',
  },
  {
    name: 'NDC London',
    link: 'http://ndc-london.com/',
    organization: 'NDC Conferences',
    startDate: new Date('January 15, 2018').getTime(),
    endDate: new Date('January 19, 2018').getTime(),
    location: {
      city: 'London',
      state: false,
      country: 'United Kingdom',
      continent: 'Europe',
    },
    cfpDeadline: new Date('October 1, 2017').getTime(),
    travel: 'Yes',
    coc: 'http://ndc-london.com/page/code-of-conduct',
  },
  {
    name: 'React Foo',
    link: 'https://reactfoo.in/',
    organization: 'HasGeek',
    startDate: new Date('January 19, 2018').getTime(),
    endDate: new Date('January 20, 2018').getTime(),
    location: {
      city: 'Pune',
      state: false,
      country: 'India',
      continent: 'Asia',
    },
    cfpDeadline: new Date('December 10, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://reactfoo.in/code-of-conduct',
  },
  {
    name: 'FrontEndNorth',
    link: 'https://frontendnorth.com/',
    organization: 'Make Do',
    startDate: new Date('January 19, 2018').getTime(),
    endDate: new Date('January 19, 2018').getTime(),
    location: {
      city: 'Sheffield',
      state: false,
      country: 'United Kingdom',
      continent: 'Europe',
    },
    cfpDeadline: new Date('October 1, 2017').getTime(),
    travel: false,
    coc: 'https://frontendnorth.com/conduct/',
  },
  {
    name: 'Script 18',
    link: 'https://scriptconf.org/',
    organization: 'ScriptConf',
    startDate: new Date('January 19, 2018').getTime(),
    endDate: new Date('January 19, 2018').getTime(),
    location: {
      city: 'Linz',
      state: false,
      country: 'Austria',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://scriptconf.org/code-of-conduct/',
  },
  {
    name: 'ngATL Conference',
    link: 'http://ng-atl.org/',
    organization: false,
    startDate: new Date('January 30, 2018').getTime(),
    endDate: new Date('February 2, 2018').getTime(),
    location: {
      city: 'Atlanta',
      state: 'Georgia',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'http://ng-atl.org/code-of-conduct',
  },
  {
    name: 'ng-europe',
    link: 'https://ngeurope.org/',
    organization: [
      'Angular Paris Meetup',
      'Event Lama',
    ],
    startDate: new Date('February 1, 2018').getTime(),
    endDate: new Date('February 2, 2018').getTime(),
    location: {
      city: 'Paris',
      state: false,
      country: 'France',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'http://confcodeofconduct.com/',
  },
  {
    name: 'DNN Summit',
    link: 'http://www.dnnsummit.org/',
    organization: 'DNN Association',
    startDate: new Date('February 6, 2018').getTime(),
    endDate: new Date('February 10, 2018').getTime(),
    location: {
      city: 'Denver',
      state: 'Colorado',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: '$200 stipend',
    coc: false,
  },
  {
    name: 'The Rolling Scopes Conference',
    link: 'https://2018.conf.rollingscopes.com/',
    organization: 'The Rolling Scopes',
    startDate: new Date('February 10, 2018').getTime(),
    endDate: new Date('February 11, 2018').getTime(),
    location: {
      city: 'Minsk',
      state: false,
      country: 'Belarus',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://2018.conf.rollingscopes.com/codeofconduct.html',
  },
  {
    name: 'Forward JS',
    link: 'https://forwardjs.com/',
    organization: false,
    startDate: new Date('February 11, 2018').getTime(),
    endDate: new Date('February 16, 2018').getTime(),
    location: {
      city: 'San Francisco',
      state: 'California',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'http://confcodeofconduct.com/',
  },
  {
    name: 'Frontend Love Conference',
    link: 'http://frontenddeveloperlove.com/frontendlove',
    organization: false,
    startDate: new Date('February 15, 2018').getTime(),
    endDate: new Date('February 15, 2018').getTime(),
    location: {
      city: 'Amsterdam',
      state: false,
      country: 'The Netherlands',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: false,
  },
  {
    name: 'Vue.js Amsterdam',
    link: 'https://www.frontenddeveloperlove.com/vuejsamsterdam/',
    organization: false,
    startDate: new Date('February 16, 2018').getTime(),
    endDate: new Date('February 16, 2018').getTime(),
    location: {
      city: 'Amsterdam',
      state: false,
      country: 'The Netherlands',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: false,
  },
  {
    name: 'Front Fest',
    link: 'http://frontfest.es/',
    organization: 'FrontFest',
    startDate: new Date('February 17, 2018').getTime(),
    endDate: new Date('February 17, 2018').getTime(),
    location: {
      city: 'Madrid',
      state: false,
      country: 'Spain',
      continent: 'Europe',
    },
    cfpDeadline: new Date('November 19, 2017').getTime(),
    travel: false,
    coc: 'http://frontfest.es/#cdc',
  },
  {
    name: 'DevNexus',
    link: 'https://devnexus.com/',
    organization: false,
    startDate: new Date('February 21, 2018').getTime(),
    endDate: new Date('February 23, 2018').getTime(),
    location: {
      city: 'Atlanta',
      state: 'Georgia',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('October 30, 2017').getTime(),
    travel: 'Case-by-case',
    coc: 'https://devnexus.com/code-of-conduct',
  },
  {
    name: 'LoopConf',
    link: 'https://loopconf.com/',
    organization: false,
    startDate: new Date('February 21, 2018').getTime(),
    endDate: new Date('February 24, 2018').getTime(),
    location: {
      city: 'Salt Lake City',
      state: 'Utah',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('November 21, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://loopconf.com/code-of-conduct/',
  },
  {
    name: 'Assert(js)',
    link: 'https://devnexus.com/',
    organization: 'OK GROW!',
    startDate: new Date('February 22, 2018').getTime(),
    endDate: new Date('February 22, 2018').getTime(),
    location: {
      city: 'San Antonio',
      state: 'Texas',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: 'Yes',
    coc: 'https://www.assertjs.com/code-of-conduct',
  },
  {
    name: 'JSConf Iceland',
    link: 'https://2018.jsconf.is/',
    organization: false,
    startDate: new Date('March 1, 2018').getTime(),
    endDate: new Date('March 2, 2018').getTime(),
    location: {
      city: 'Reykjavik',
      state: false,
      country: 'Iceland',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: 'Yes',
    coc: 'http://confcodeofconduct.com/',
  },
  {
    name: 'ngVikings',
    link: 'https://ngvikings.org/',
    organization: false,
    startDate: new Date('March 1, 2018').getTime(),
    endDate: new Date('March 2, 2018').getTime(),
    location: {
      city: 'Helsinki',
      state: false,
      country: 'Finland',
      continent: 'Europe',
    },
    cfpDeadline: new Date('December 10, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://ngvikings.org/faq/',
  },
  {
    name: '.concat()',
    link: 'https://2018.conc.at/',
    organization: false,
    startDate: new Date('March 3, 2018').getTime(),
    endDate: new Date('March 3, 2018').getTime(),
    location: {
      city: 'Salzburg',
      state: false,
      country: 'Austria',
      continent: 'Europe',
    },
    cfpDeadline: new Date('December 1, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://2018.conc.at/#coc',
  },
  {
    name: 'ConFoo',
    link: 'https://confoo.ca/en/yul2018',
    organization: false,
    startDate: new Date('March 7, 2018').getTime(),
    endDate: new Date('March 9, 2018').getTime(),
    location: {
      city: 'Montreal',
      state: false,
      country: 'Canada',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://confoo.ca/en/code-of-conduct',
  },
  {
    name: 'EmberConf',
    link: 'http://emberconf.com/',
    organization: 'Tilde, Inc.',
    startDate: new Date('March 13, 2018').getTime(),
    endDate: new Date('March 14, 2018').getTime(),
    location: {
      city: 'Portland',
      state: 'Oregon',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('November 21, 2017').getTime(),
    travel: '$500 honorarium, $500 airfare',
    coc: 'http://emberconf.com/code-of-conduct.html',
  },
  {
    name: 'CSSConf AU',
    link: 'https://2018.cssconf.com.au/',
    organization: false,
    startDate: new Date('March 20, 2018').getTime(),
    endDate: new Date('March 20, 2018').getTime(),
    location: {
      city: 'Melbourne',
      state: false,
      country: 'Australia',
      continent: 'Australia',
    },
    cfpDeadline: new Date('December 1, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://2018.cssconf.com.au/code-of-conduct',
  },
  {
    name: 'JSConf AU',
    link: 'https://2018.jsconfau.com/',
    organization: false,
    startDate: new Date('March 21, 2018').getTime(),
    endDate: new Date('March 21, 2018').getTime(),
    location: {
      city: 'Melbourne',
      state: false,
      country: 'Australia',
      continent: 'Australia',
    },
    cfpDeadline: new Date('December 1, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://2018.jsconfau.com/code-of-conduct',
  },
  {
    name: 'JazzCon',
    link: 'http://jazzcon.tech/',
    organization: false,
    startDate: new Date('March 21, 2018').getTime(),
    endDate: new Date('March 23, 2018').getTime(),
    location: {
      city: 'New Orleans',
      state: 'Louisiana',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: 'Yes',
    coc: 'http://jazzcon.tech/#inline-content',
  },
  {
    name: 'VueConf.US',
    link: 'http://us.vuejs.org/',
    organization: false,
    startDate: new Date('March 26, 2018').getTime(),
    endDate: new Date('March 28, 2018').getTime(),
    location: {
      city: 'New Orleans',
      state: 'Louisiana',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('December 1, 2017').getTime(),
    travel: 'Yes',
    coc: 'http://us.vuejs.org/codeofconduct',
  },
  {
    name: '#PerfMatters',
    link: 'https://perfmattersconf.com/',
    organization: false,
    startDate: new Date('March 27, 2018').getTime(),
    endDate: new Date('March 28, 2018').getTime(),
    location: {
      city: 'Redwood City',
      state: 'California',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: 'Yes',
    coc: 'https://perfmattersconf.com/code/',
  },
  {
    name: 'Forward JS Ottawa',
    link: 'https://forwardjs.com/ottawa',
    organization: false,
    startDate: new Date('April 3, 2018').getTime(),
    endDate: new Date('April 6, 2018').getTime(),
    location: {
      city: 'Ottawa',
      state: false,
      country: 'Canada',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'http://confcodeofconduct.com',
  },
  {
    name: 'University of Illinois Web Conference',
    link: 'http://webcon.illinois.edu/',
    organization: false,
    startDate: new Date('April 4, 2018').getTime(),
    endDate: new Date('April 6, 2018').getTime(),
    location: {
      city: 'Champaign',
      state: 'Illinois',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: 'No',
    coc: 'http://webcon.illinois.edu/code.pdf',
  },
  {
    name: 'Frontend NE',
    link: 'https://2018.frontendne.co.uk/',
    organization: false,
    startDate: new Date('April 5, 2018').getTime(),
    endDate: new Date('April 5, 2018').getTime(),
    location: {
      city: 'Newcastle',
      state: false,
      country: 'United Kingdom',
      continent: 'Europe',
    },
    cfpDeadline: new Date('December 7, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://2018.frontendne.co.uk/code-of-conduct.html#navigation',
  },
  {
    name: 'React Amsterdam',
    link: 'https://react.amsterdam/',
    organization: false,
    startDate: new Date('April 13, 2018').getTime(),
    endDate: new Date('April 13, 2018').getTime(),
    location: {
      city: 'Amsterdam',
      state: false,
      country: 'The Netherlands',
      continent: 'Europe',
    },
    cfpDeadline: new Date('January 15, 2018').getTime(),
    travel: false,
    coc: 'http://confcodeofconduct.com/',
  },
  {
    name: 'Universal JS Day',
    link: 'http://2018.universaljsday.com/',
    organization: false,
    startDate: new Date('April 13, 2018').getTime(),
    endDate: new Date('April 13, 2018').getTime(),
    location: {
      city: 'Ferrara',
      state: false,
      country: 'Italy',
      continent: 'Europe',
    },
    cfpDeadline: new Date('March 11, 2018').getTime(),
    travel: 'Hotel Only',
    coc: false,
  },
  {
    name: 'Bulgaria Web Summit',
    link: 'https://bulgariawebsummit.com/',
    organization: false,
    startDate: new Date('April 14, 2018').getTime(),
    endDate: new Date('April 14, 2018').getTime(),
    location: {
      city: 'Sofia',
      state: false,
      country: 'Bulgaria',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://bulgariawebsummit.com/',
  },
  {
    name: 'ng-conf',
    link: 'https://www.ng-conf.org/',
    organization: false,
    startDate: new Date('April 18, 2018').getTime(),
    endDate: new Date('April 20, 2018').getTime(),
    location: {
      city: 'Salt Lake City',
      state: 'Utah',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('January 15, 2018').getTime(),
    travel: 'Yes',
    coc: false,
  },
  {
    name: 'JSHeroes',
    link: 'https://jsheroes.io/',
    organization: false,
    startDate: new Date('April 18, 2018').getTime(),
    endDate: new Date('April 20, 2018').getTime(),
    location: {
      city: 'Cluj Napoca',
      state: false,
      country: 'Romania',
      continent: 'Europe',
    },
    cfpDeadline: new Date('December 31, 2017').getTime(),
    travel: 'Yes',
    coc: 'https://jsheroes.io/code-of-conduct',
  },
  {
    name: 'beyond tellerrand',
    link: 'https://beyondtellerrand.com/',
    organization: false,
    startDate: new Date('May 7, 2018').getTime(),
    endDate: new Date('May 9, 2018').getTime(),
    location: {
      city: 'Düsseldorf',
      state: false,
      country: 'Germany',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://beyondtellerrand.com/code-of-conduct',
  },
  {
    name: 'NDC Minnesota',
    link: 'https://ndcminnesota.com/',
    organization: false,
    startDate: new Date('May 7, 2018').getTime(),
    endDate: new Date('May 10, 2018').getTime(),
    location: {
      city: 'St. Paul',
      state: 'Minnesota',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('January 15, 2018').getTime(),
    travel: 'Yes',
    coc: 'https://ndcminnesota.com/page/code-of-conduct',
  },
  {
    name: 'jsDay',
    link: 'https://2018.jsday.it/',
    organization: false,
    startDate: new Date('May 9, 2018').getTime(),
    endDate: new Date('May 10, 2018').getTime(),
    location: {
      city: 'Verona',
      state: false,
      country: 'Italy',
      continent: 'Europe',
    },
    cfpDeadline: new Date('January 31, 2018').getTime(),
    travel: 'Hotel and €200/€500 Travel',
    coc: 'https://2018.jsday.it/coc.html',
  },
  {
    name: 'DeltaV Conference',
    link: 'https://2018.deltavconf.com/',
    organization: false,
    startDate: new Date('May 10, 2018').getTime(),
    endDate: new Date('May 11, 2018').getTime(),
    location: {
      city: 'London',
      state: false,
      country: 'United Kingdom',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://2018.deltavconf.com/code-of-conduct',
  },
  {
    name: 'ReactEurope',
    link: 'https://www.react-europe.org/',
    organization: false,
    startDate: new Date('May 17, 2018').getTime(),
    endDate: new Date('May 18, 2018').getTime(),
    location: {
      city: 'Paris',
      state: false,
      country: 'France',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'http://confcodeofconduct.com/',
  },
  {
    name: 'Front-Trends',
    link: 'https://2018.front-trends.com/',
    organization: false,
    startDate: new Date('May 24, 2018').getTime(),
    endDate: new Date('May 25, 2018').getTime(),
    location: {
      city: 'Warsaw',
      state: false,
      country: 'Poland',
      continent: 'Euroe',
    },
    cfpDeadline: new Date('March 31, 2018').getTime(),
    travel: 'Yes',
    coc: 'https://2018.front-trends.com/code-of-conduct',
  },
  {
    name: 'DevSum',
    link: 'http://www.devsum.se/',
    organization: false,
    startDate: new Date('May 31, 2018').getTime(),
    endDate: new Date('June 1, 2018').getTime(),
    location: {
      city: 'Stockholm',
      state: false,
      country: 'Sweden',
      continent: 'Europe',
    },
    cfpDeadline: new Date('December 31, 2017').getTime(),
    travel: false,
    coc: false,
  },
  {
    name: 'Frontend United',
    link: 'http://frontendunited.org/',
    organization: false,
    startDate: new Date('May 31, 2018').getTime(),
    endDate: new Date('June 3, 2018').getTime(),
    location: {
      city: 'Utrecht',
      state: false,
      country: 'The Netherlands',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: false,
  },
  {
    name: 'JSConf EU',
    link: 'https://2018.jsconf.eu/',
    organization: false,
    startDate: new Date('June 2, 2018').getTime(),
    endDate: new Date('June 3, 2018').getTime(),
    location: {
      city: 'Berlin',
      state: false,
      country: 'Germany',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: false,
    coc: 'https://2017.jsconf.eu/code-of-conduct/',
  },
  {
    name: 'Syntax Code & Craft Conference',
    link: 'https://2018.syntaxcon.com/',
    organization: false,
    startDate: new Date('June 6, 2018').getTime(),
    endDate: new Date('June 8, 2018').getTime(),
    location: {
      city: 'Charleston',
      state: false,
      country: 'South Carolina',
      continent: 'North America',
    },
    cfpDeadline: new Date('December 31, 2018').getTime(),
    travel: false,
    coc: 'https://2018.syntaxcon.com/about/code-of-conduct/',
  },
  {
    name: 'NDC Oslo',
    link: 'https://ndcoslo.com/',
    organization: false,
    startDate: new Date('June 11, 2018').getTime(),
    endDate: new Date('June 15, 2018').getTime(),
    location: {
      city: 'Oslo',
      state: false,
      country: 'Norway',
      continent: 'Europe',
    },
    cfpDeadline: false,
    travel: 'Yes',
    coc: 'https://ndcoslo.com/page/code-of-conduct',
  },
  {
    name: 'Fluent Conf',
    link: 'https://conferences.oreilly.com/fluent/fl-ca',
    organization: false,
    startDate: new Date('June 12, 2018').getTime(),
    endDate: new Date('June 14, 2018').getTime(),
    location: {
      city: 'San Jose',
      state: 'California',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: new Date('December 8, 2018').getTime(),
    travel: 'Yes',
    coc: 'http://oreilly.com/conferences/code-of-conduct.html',
  },
  {
    name: 'Chain React',
    link: 'https://infinite.red/ChainReactConf',
    organization: false,
    startDate: new Date('July 12, 2018').getTime(),
    endDate: new Date('July 13, 2018').getTime(),
    location: {
      city: 'Portland',
      state: 'Oregon',
      country: 'USA',
      continent: 'North America',
    },
    cfpDeadline: false,
    travel: false,
    coc: false,
  },
  {
    name: 'FullStack Conference',
    link: 'https://skillsmatter.com/conferences/9815-fullstack-2018-the-conference-on-javascript-node-and-internet-of-things',
    organization: false,
    startDate: new Date('July 11, 2018').getTime(),
    endDate: new Date('July 13, 2018').getTime(),
    location: {
      city: 'London',
      state: false,
      country: 'United Kingdom',
      continent: 'Europe',
    },
    cfpDeadline: new Date('February 16, 2018').getTime(),
    travel: 'Ask',
    coc: 'https://skillsmatter.com/go/code-of-conduct',
  },
  {
    name: 'NDC Sydney',
    link: 'https://ndcsydney.com/',
    organization: false,
    startDate: new Date('September 17, 2018').getTime(),
    endDate: new Date('September 21, 2018').getTime(),
    location: {
      city: 'Sydney',
      state: false,
      country: 'Australia',
      continent: 'Australia',
    },
    cfpDeadline: false,
    travel: 'Yes',
    coc: 'https://ndcsydney.com/page/code-of-conduct',
  },
];

export default confs2018;

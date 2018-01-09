import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ITeam, IMember } from './team.models';

@Injectable()
export class TeamService {
  getTeam(): Observable<ITeam> {
    return Observable.from([
      {
        coreTeam: [
          {
            name: 'Ben Lesh',
            role: 'Developer',
            githubUrl: 'https://github.com/benlesh',
            avatar: 'https://avatars2.githubusercontent.com/u/1540597',
            twitterUrl: 'https://twitter.com/BenLesh',
            webpageUrl: 'http://www.benlesh.com'
          },
          {
            name: 'Paul Taylor',
            role: 'Developer',
            githubUrl: 'https://github.com/trxcllnt',
            avatar: 'https://avatars2.githubusercontent.com/u/178183',
            twitterUrl: 'https://twitter.com/trxcllnt',
            webpageUrl: 'http://graphistry.com'
          },
          {
            name: 'Matthew Podwysocki',
            role: 'Developer',
            githubUrl: 'https://github.com/mattpodwysocki',
            avatar: 'https://avatars0.githubusercontent.com/u/49051',
            twitterUrl: 'https://twitter.com/mattpodwysocki',
            webpageUrl: ''
          },
          {
            name: 'OJ Kwon',
            role: 'Developer',
            githubUrl: 'https://github.com/benlesh',
            avatar: 'https://github.com/benlesh.png',
            twitterUrl: 'https://twitter.com/BenLesh',
            webpageUrl: 'https://www.linkedin.com/in/blesh/'
          },
          {
            name: 'Andre Staltz',
            role: 'Developer',
            githubUrl: 'https://github.com/benlesh',
            avatar: 'https://github.com/benlesh.png',
            twitterUrl: 'https://twitter.com/BenLesh',
            webpageUrl: 'https://www.linkedin.com/in/blesh/'
          },
          {
            name: 'David Driscoll',
            role: 'Developer',
            githubUrl: 'https://github.com/david-driscoll',
            avatar: 'https://avatars0.githubusercontent.com/u/1269157',
            twitterUrl: 'https://twitter.com/david_dotnet',
            webpageUrl: 'http://david-driscoll.github.io'
          },
          {
            name: 'Tracy Lee',
            role: 'Developer',
            githubUrl: 'https://github.com/ladyleet',
            avatar: 'https://avatars0.githubusercontent.com/u/8270563',
            twitterUrl: 'https://twitter.com/ladyleet',
            webpageUrl: 'http://thisdot.co'
          }
        ],
        learningTeam: [
          {
            name: 'Tracy Lee',
            role: 'Developer',
            githubUrl: 'https://github.com/ladyleet',
            avatar: 'https://avatars0.githubusercontent.com/u/8270563',
            twitterUrl: 'https://twitter.com/ladyleet',
            webpageUrl: 'http://thisdot.co'
          },
          {
            name: 'Ashwin Sureshkumar',
            role: 'Developer',
            githubUrl: 'https://github.com/benlesh',
            avatar: 'https://github.com/benlesh.png',
            twitterUrl: 'https://twitter.com/BenLesh',
            webpageUrl: 'https://www.linkedin.com/in/blesh/'
          },
          {
            name: 'Brian Troncone',
            role: 'Developer',
            githubUrl: 'https://github.com/benlesh',
            avatar: 'https://github.com/benlesh.png',
            twitterUrl: 'https://twitter.com/BenLesh',
            webpageUrl: 'https://www.linkedin.com/in/blesh/'
          },
          {
            name: 'Sumit Arora',
            role: 'Developer',
            githubUrl: 'https://github.com/benlesh',
            avatar: 'https://github.com/benlesh.png',
            twitterUrl: 'https://twitter.com/BenLesh',
            webpageUrl: 'https://www.linkedin.com/in/blesh/'
          },
          {
            name: 'Jen Luker',
            role: 'Developer, A11y',
            githubUrl: 'https://github.com/knittingcodemonkey',
            avatar: 'https://github.com/benlesh.png',
            twitterUrl: 'https://twitter.com/knitcodemonkey',
            webpageUrl: 'http://jenluker.com'
          }
        ]
      }
    ]);
  }
}

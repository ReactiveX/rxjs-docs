import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TeamService } from './team.service';
import { ITeam } from './team.models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
  team$: Observable<ITeam>;

  constructor(private service: TeamService) {}

  ngOnInit() {
    this.team$ = this.service.getTeam();
  }
}

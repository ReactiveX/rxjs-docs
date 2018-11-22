import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamService } from './team.service';
import { Team } from './team.models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
  team$: Observable<Team>;

  constructor(private service: TeamService) {}

  ngOnInit() {
    this.team$ = this.service.getTeam();
  }
}

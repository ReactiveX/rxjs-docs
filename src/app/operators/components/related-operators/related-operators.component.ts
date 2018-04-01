import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-related-operators',
  templateUrl: './related-operators.component.html',
  styleUrls: ['./related-operators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedOperatorsComponent {
  @Input() relatedOperators: string[];
}

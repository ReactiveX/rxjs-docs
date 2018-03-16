import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { OperatorReference } from '../../../../operator-docs';

@Component({
  selector: 'app-additional-resources',
  templateUrl: './additional-resources.component.html',
  styleUrls: ['./additional-resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdditionalResourcesComponent {
  @Input() additionalResources: OperatorReference[];
  @Input() sourceUrl: string;
  @Input() specsUrl: string;
}

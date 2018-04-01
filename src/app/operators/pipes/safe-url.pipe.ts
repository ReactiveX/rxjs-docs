import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl | null {
    if (!url) {
      return null;
    }
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

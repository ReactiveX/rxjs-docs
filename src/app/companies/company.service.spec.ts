import { TestBed, inject } from "@angular/core/testing";

import { CompanyService } from "./company.service";
import { AngularFireDatabase } from "angularfire2/database";

describe("CompanyService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService, AngularFireDatabase]
    });
  });

  it(
    "should be created",
    inject([CompanyService, AngularFireDatabase], (service: CompanyService) => {
      expect(service).toBeTruthy();
    })
  );
});

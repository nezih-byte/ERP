import { TestBed } from "@angular/core/testing";

import { GuardAuth } from "./guard.service";

describe("GuardService", () => {
  let service: GuardAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAuth);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

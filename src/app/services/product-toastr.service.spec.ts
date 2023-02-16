import { TestBed } from '@angular/core/testing';

import { ProductToastrService } from './product-toastr.service';

describe('ProductToastrService', () => {
  let service: ProductToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

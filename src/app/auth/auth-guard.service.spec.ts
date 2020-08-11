import { TestBed } from '@angular/core/testing'

import { commonTestingModules, commonTestingProviders } from '../common/common.testing'
import { AuthGuard } from './auth-guard.service'

describe('AuthGuardService', () => {
  let service: AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
    })
    service = TestBed.inject(AuthGuard)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

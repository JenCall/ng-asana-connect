import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

describe('ProfileService', () => {
  let profileService: ProfileService;
  // spy/replace only the 'get' method of the real HttpClient instance.
  // all other methods are intact.
  // 'get' method will be replaced with a new mock function which returns undefined
  let mockHttpClient: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj(
    'HttpClient',
    ['get']
  );

  beforeEach(() => {
    // new instance will be created for each test case since
    // beforeEach runs before each test case.
    profileService = new ProfileService(mockHttpClient);
  });

  it('#getProfile should return an observable of profile', () => {
    // arrange/setup all deps, data required for the service method in test.
    const profile: Profile = {
      userId: '1',
      id: '1',
      title: 'delectus aut autem',
      completed: false,
    };

    // replace the return value of 'get' method to be observable of users.
    // we need to simulate what the real api will return.
    // tests are good as long as mock is done correctly.
    // since 'getUsers' method is calling httpClient.get,
    // we need this before we execute the method we want to test.
    mockHttpClient.get.and.returnValue(of(profile));

    console.log('start');

    // act/invoke
    profileService.getProfile().subscribe((response: Profile) => {
      console.log(response, 'down in the unit testing');

      // expect(response).toBe(2);
      expect(Object.keys(response).length).toBe(4);
      expect(mockHttpClient.get).toHaveBeenCalledOnceWith(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      // console.log(response, 'inside subscribe');

      // // assertion/expectation
      // expect(response.length).toBe(2);

      // console.log('after first expect');

      // expect(mockHttpClient.get).toHaveBeenCalledOnceWith(
      //   'https://jsonplaceholder.typicode.com/todos'
      // );

      // console.log('finish expect');
    });

    // console.log('end');
  });
});

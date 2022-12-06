import {
  Injectable,
  Injector,
  ProviderToken,
  StaticProvider,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private getInjectorProviders(injector?: Injector, providersList?: any[]) {
    let providers: StaticProvider[] = [];
    if (providersList && injector) {
      providersList.map((provider: ProviderToken<unknown>) => {
        try {
          const service = injector.get(provider);
          const newProvider = { provide: provider, useValue: service };
          providers.push(newProvider);
        } catch (error) {
          console.log(error);
        }
      });
    }
    return providers;
  }


  
}

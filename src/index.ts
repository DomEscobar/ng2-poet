import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FrostService } from './frost.service';

export * from './frost.service';

export * from './models/account';
export * from './models/apiToken';
export * from './models/configuration';
export * from './models/profile';
export * from './models/work';
export * from './models/workAttributes';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class PoetModule
{
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: PoetModule,
      providers: [FrostService]
    };
  }
}

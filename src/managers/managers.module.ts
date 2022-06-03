import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { AuthManagerService } from './auth-manager/auth-manager.service';
import { LocalStorageService } from './local-storage-manager/local-storage.service';

@NgModule({
  imports: [SharedModule],
  providers: [AuthManagerService,LocalStorageService]
})
export class ManagerModule {}

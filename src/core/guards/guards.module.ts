
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard';


@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports:[],
    providers:[AuthGuardService]
})
export class GuardsModule {}

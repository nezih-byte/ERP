import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddClientComponent } from "./add-client/add-client.component";
import { TableClientComponent } from "./table-client/table-client.component";
import { ChoicesComponent } from "./choices/choices.component";
import { AddCompanyComponent } from "./add-company/add-company.component";

const routes: Routes = [
  {
    path: "choices",
    component: ChoicesComponent,
  },
  {
    path: "add-client/:type",
    component: AddClientComponent,
  },
  {
    path: "add-company/:type",
    component: AddCompanyComponent,
  },
  {
    path: "table-user",
    component: TableClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

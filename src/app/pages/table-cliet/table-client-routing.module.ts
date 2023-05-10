import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddClientComponent } from "./add-client/add-client.component";
import { TableClientComponent } from "./table-client/table-client.component";
import { ChoicesComponent } from "./choices/choices.component";

const routes: Routes = [
  {
    path: "add-client",
    component: AddClientComponent,
  },
  {
    path: "table-user",
    component: TableClientComponent,
  },
  {
    path: "choices",
    component: ChoicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

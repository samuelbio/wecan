import {Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {provideState} from "@ngrx/store";
import {usersFeatureKey, usersReducer} from "./state-users/reducers";
import {provideEffects} from "@ngrx/effects";
import * as usersEffect from "./state-users/effects"

export default <Routes> [
  {
    path: '', component: UsersComponent,
    providers: [
      provideState(usersFeatureKey, usersReducer),
      provideEffects(usersEffect)
    ]
  }
]

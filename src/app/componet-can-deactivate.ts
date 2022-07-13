import { Observable } from "rxjs";

export interface ComponetCanDeactivate {
    canDeactivate:()=>boolean|Observable<boolean>
}

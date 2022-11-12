import {AbstractControl, ValidatorFn} from "@angular/forms";

export function fileCountValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>{

    return (control.value.length<=3)?null:{ files: true };
  }
}

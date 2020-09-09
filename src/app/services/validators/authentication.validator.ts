import { AbstractControl } from '@angular/forms';


export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('Password').value;
        let confirmPassword = control.get('ConfirmPassword').value;

        if (password != confirmPassword) {
            control.get('ConfirmPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    }
}
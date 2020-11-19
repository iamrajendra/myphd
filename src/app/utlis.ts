import {MatSnackBar} from '@angular/material/snack-bar';


export default class Utils {
    static alert(message: string,_snackBar: MatSnackBar) {
        _snackBar.open(message, "alert", {
            duration: 2000,
          });
         }
}
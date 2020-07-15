import { MatSnackBar } from '@angular/material/snack-bar';

export function openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 5000,
  });
}

import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  showAlert(options: SweetAlertOptions): Promise<any> {
    return Swal.fire(options);
  }

  showSuccess(message: string, title: string = 'Success'): Promise<any> {
    return this.showAlert({
      title: title,
      text: message,
      icon: 'success'
    });
  }

  showError(message: string, title: string = 'Error'): Promise<any> {
    return this.showAlert({
      title: title,
      text: message,
      icon: 'error'
    });
  }

  showConfirmation(message: string, title: string = 'Confirmation'): Promise<any> {
    return this.showAlert({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  }
}

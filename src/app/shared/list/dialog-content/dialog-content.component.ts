import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-content',
  template: `
    <mat-card class="w-100">
      <mat-card-content>
        <div class="table-responsive">
          <table mat-table class="text-nowrap w-100">
            <ng-container matColumnDef="nomUser">
              <th mat-header-cell *matHeaderCellDef> Player Name </th>
              <td mat-cell *matCellDef="let player"> {{ player.nomUser }} </td>
            </ng-container>
            <ng-container matColumnDef="prenomUser">
              <th mat-header-cell *matHeaderCellDef> Player Prenom </th>
              <td mat-cell *matCellDef="let player"> {{ player.prenomUser }} </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="playerColumns"></tr>
            <tr mat-row *matRowDef="let player of (data.dataSource$ | async); columns: playerColumns;"></tr>
          </table>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {

  playerColumns: string[] = ['nomUser', 'prenomUser'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.dataSource$)
  }

}



import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormType} from '../../shared/enum/form.type';
import {FormService} from '../../service/form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-form-dialog',
  templateUrl: './new-form-dialog.component.html',
  styleUrls: ['./new-form-dialog.component.css']
})
export class NewFormDialogComponent implements OnInit {

  public formType = FormType;

  public selectedFormType: number;

  public formName: string;

  constructor(
    private formService: FormService,
    private router: Router,
    public dialogRef: MatDialogRef<NewFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public createForm(): void {
    this.formService.createForm(null).subscribe((id) => {
      this.router.navigateByUrl(`/main/forms/form/${id}`);
      this.dialogRef.close();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  myData: any = [] = [];
  isEdit: boolean = false;

  constructor(private datas: DataService) { }

  ngOnInit() {
    this.apiCall();
  }

  apiCall(): void {
    this.datas.getMoveies().subscribe({
      next: (res: any) => {
        this.myData = res;
      }
    })
  }

  editButton() {
    this.isEdit = true;
  }

  saveButton(index: number, value: any) {
    this.isEdit = false;
    let data: any = {
      firstName: this.myData[index].firstName.value,
      lastName: this.myData[index].lastName,
      Email: this.myData[index].Email,
      dateOfBirth: this.myData[index].dateOfBirth,
      mobileNumber: this.myData[index].mobileNumber,
      whatsAppNumber: this.myData[index].whatsAppNumber,
      personalType: this.myData[index].personalType,
      address: this.myData[index].address
    }
    this.datas.editMoveies(value, data).subscribe({
      next: (res: any) => {
        alert("Edit Successfully");
      }
    })
  }

  deleteButton(value: any) {
    this.datas.deleteMoveies(value).subscribe({
      next: () => {
        alert("Record Deleted")
        this.apiCall();
      }
    })
  }
}

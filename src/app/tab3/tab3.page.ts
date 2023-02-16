import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  personalDetailsForm!: FormGroup | any;
  slideOneForm!: FormGroup | any;
  slideTwoForm!: FormGroup | any;
  slideThreeForm!: FormGroup | any;
  travelHideShow: boolean = false;
  stayHideShow: boolean = false;
  supportHideShow: boolean = false;
  constructor(public formBuilder: FormBuilder, private renderer: Renderer2, private elementRef: ElementRef, private sample: DataService) {

  }
  ngOnInit(): void {
    this.travelValue();
  }

  travelValue() {
    this.personalDetailsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required,]),
      mobileNumber: new FormControl('', [Validators.required,]),
      whatsAppNumber: new FormControl('', [Validators.required,]),
      personalType: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required,])
    });
    this.slideOneForm = new FormGroup({
      travelFrom: new FormControl('', [Validators.required]),
      travelTo: new FormControl('', [Validators.required]),
      travelDate: new FormControl('', [Validators.required]),
      travelType: new FormControl('', [Validators.required,])
    });
    this.slideTwoForm = new FormGroup({
      stayType: new FormControl('', [Validators.required]),
      stayRooms: new FormControl('', [Validators.required]),
      inDate: new FormControl('', [Validators.required]),
      outDate: new FormControl('', [Validators.required])
    })
    this.slideThreeForm = new FormGroup({
      SupportDriver: new FormControl('', [Validators.required]),
      supportStaff: new FormControl('', [Validators.required]),
      supportStudent: new FormControl('', [Validators.required]),
    })
  }

  
  onSubmit() {
    console.log(this.personalDetailsForm.value, this.slideOneForm.value, this.slideTwoForm.value, this.slideThreeForm.value);
    this.sample.postMoveies(this.personalDetailsForm.value).subscribe({
      next: () => {
        alert("created");
      }
    })
  }
  travelhide() {
    this.travelHideShow = false
  }
  travelshow() {
    this.travelHideShow = true
  }
  stayhide() {
    this.stayHideShow = false
  }
  stayshow() {
    this.stayHideShow = true
  }
  supporthide() {
    this.supportHideShow = false
  }
  supportshow() {
    this.supportHideShow = true
  }
} 

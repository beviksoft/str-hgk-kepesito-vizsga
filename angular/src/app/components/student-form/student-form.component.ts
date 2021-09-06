import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  // @ViewChild('form') form: NgForm;

  studentForm$: Observable<Student> = this.route.params.pipe(
    switchMap(params => this.service.getById(params.id))
  );

  constructor(
    private route: ActivatedRoute,
    private service: StudentHttpService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  saveStudent(form: NgForm) {
    this.service.update(form.value, form.value._id).subscribe(
      school => this.router.navigate(['student-list']),
      err => console.error(err)
    )

  }
}

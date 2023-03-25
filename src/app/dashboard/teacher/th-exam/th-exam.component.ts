import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
interface classs {
  value: string;
  viewValue: string;
}
interface subject {
  value: string;
  viewValue: string;
}
interface question {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-th-exam',
  templateUrl: './th-exam.component.html',
  styleUrls: ['./th-exam.component.css']
})
export class ThExamComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  classes: classs[] = [
    {value: 'play-0', viewValue: 'Play'},
    {value: 'Nurs-1', viewValue: 'Nurs'},
    {value: 'stdI-2', viewValue: 'stdI'},
    {value: 'stdII-3', viewValue: 'stdII'},
    {value: 'stdIII-4', viewValue: 'stdIII'},
    {value: 'stdIV-4', viewValue: 'stdIV'},
  ];
  subjects: subject[] = [
    {value: 'Math-0', viewValue: 'Math'},
    {value: 'Hindi-1', viewValue: 'Hindi'},
    {value: 'English-2', viewValue: 'English'},
    {value: 'EVS-3', viewValue: 'EVS'},
    {value: 'GK-4', viewValue: 'GK'},
    {value: 'Computer-5', viewValue: 'Computer'},
  ];
  questions: question[] = [
    {value: '10-0', viewValue: '10'},
    {value: '20-1', viewValue: '20'},
    {value: '30-2', viewValue: '30'},
    {value: '40-3', viewValue: '40'},
    {value: '50-4', viewValue: '50'},
  ];
}


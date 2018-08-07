import { Component, OnInit } from '@angular/core';

import { SubjectsDemoService } from '../subjects-demo.service';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  constructor(public subjectsDemoService: SubjectsDemoService) { }

  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];

  ngOnInit() {
    let initTime = Date.now(); //Returns timestamp
    
    /******** Observable subscribers ********/
    this.subjectsDemoService.numbersObservable$.subscribe(n => {
      this.observableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer1: ${n}`)
    }); // Subscriber 1

    setTimeout(() => {
      this.subjectsDemoService.numbersObservable$.subscribe(n => {
        this.observableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer2: ${n}`)
      });
    }, 1500); // Subscriber 2


    /******** Subject subscribers ********/    
    this.subjectsDemoService.numbersSubject.subscribe(n => {
      this.subjectLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer1: ${n}`)
    }); // Subscriber 1

    
    setTimeout(() => {
      this.subjectsDemoService.numbersSubject.subscribe(n => {
        this.subjectLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer2: ${n}`)
      });
    }, 1500); // Subscriber 2


    /******** Observable created from subject subscribers ********/        
    this.subjectsDemoService.numbersSubjectObservable$.subscribe(n => {
      this.subjectObservableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer1: ${n}`)
    }); // Subscriber 1

    
    setTimeout(() => {
      this.subjectsDemoService.numbersSubjectObservable$.subscribe(n => {
        this.subjectObservableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer2: ${n}`)
      });
    }, 1500); // Subscriber 2

  }

}

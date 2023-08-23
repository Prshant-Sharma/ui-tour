import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService, IStepOption } from 'ngx-ui-tour-md-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  tourSteps: IStepOption[] = [
    {
      anchorId: 'welcome',
      content: 'Welcome to the Platform.',
      title: 'Welcome',
    },
    {
      anchorId: 'registration',
      content: 'Here blah blah registration works.',
      title: 'Registration',
    },
    {
      anchorId: 'finish',
      content: 'Congratulations, you are done.',
      title: 'Finish',
    },
  ];

  constructor(private router: Router, private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.initialize(this.tourSteps);
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
    this.tourStart();
  }

  tourStart() {
    this.tourService.start();
  }

}

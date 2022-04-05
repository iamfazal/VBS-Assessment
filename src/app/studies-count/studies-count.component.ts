import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies-count',
  templateUrl: './studies-count.component.html',
  styleUrls: ['./studies-count.component.scss']
})
export class StudiesCountComponent implements OnInit {

  data: Array<any> = [];
  studyCount: Array<any> = [];
  siteInterest: any = {
    complete: 0,
    pending: 0,
  };
  smoAgreement: any = {
    complete: 0,
    pending: 0,
  };
  sponsorCDA: any = {
    complete: 0,
    pending: 0,
  };
  constructor() {
    this.data = [
      { study_id: 1, study_name: 'Test Study 1', step_status: 'complete', step_id: 1, step_name: 'Site Interest' },
      { study_id: 1, study_name: 'Test Study 1', step_status: 'complete', step_id: 2, step_name: 'SMO Agreement' },
      { study_id: 1, study_name: 'Test Study 1', step_status: 'pending', step_id: 3, step_name: 'Sponsor CDA' },
      { study_id: 2, study_name: 'Test Study 2', step_status: 'complete', step_id: 1, step_name: 'Site Interest' },
      { study_id: 2, study_name: 'Test Study 2', step_status: 'pending', step_id: 2, step_name: 'SMO Agreement' },
      { study_id: 2, study_name: 'Test Study 2', step_status: 'pending', step_id: 3, step_name: 'Sponsor CDA' },
      { study_id: 3, study_name: 'Test Study 3', step_status: 'complete', step_id: 1, step_name: 'Site Interest' },
      { study_id: 3, study_name: 'Test Study 3', step_status: 'complete', step_id: 2, step_name: 'SMO Agreement' },
      { study_id: 3, study_name: 'Test Study 3', step_status: 'complete', step_id: 3, step_name: 'Sponsor CDA' },
    ];
    // study count
    this.getStudyCount();
    // study summary
    this.getStudySummary();
  }

  getStudyCount() {
    this.data.forEach(element => {
      // find the index same study id
      let index = this.studyCount.findIndex(x => x.study_id == element.study_id);

      // study Id not found
      if (index == -1) {
        // push basic data
        this.studyCount.push({ study_id: element.study_id, study_name: element.study_name });
        // find the index again
        index = this.studyCount.findIndex(x => x.study_id == element.study_id);
      }

      // check the step status
      if (element.step_id == 1)
        this.studyCount[index].siteInterest = element.step_status;
      else if (element.step_id == 2)
        this.studyCount[index].smoAgreement = element.step_status;
      else
        this.studyCount[index].sponsorCDA = element.step_status;


    });
  }

  getStudySummary() {
    this.data.forEach(element => {
      // set status count
      if (element.step_id == 1)
        this.siteInterest[element.step_status]++;
      else if (element.step_id == 2)
        this.smoAgreement[element.step_status]++;
      else
        this.sponsorCDA[element.step_status]++;
    });
  }
  ngOnInit(): void {
  }

}

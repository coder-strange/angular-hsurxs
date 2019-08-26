import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api'

import { SlideMenuSub } from 'primeng/slidemenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(SlideMenuSub) slideMenuRef: ElementRef;
  title = 'sidebar-poc';
  showSidebar:boolean = true;
  items: MenuItem[];
  completeBreadCrum: MenuItem[] = [];
  inProcessBreadCrum: MenuItem[] = [];
  archivedBreadCrum: MenuItem[] = [];
  selectedGsl:string[] = [];
  selectedCountry:string[] = [];
  selectedAll;
  completeSearchFilter:string;
  filteredItems: MenuItem[];
  contriesList:any = [
    {name : "US", value : "US"}, 
    {name : "UK", value : "UK"}, 
    {name : "India", value : "India"}, 
    {name : "Australia", value : "Australia"}, 
    {name : "Spain", value : "Spain"}
  ];

  gslList:any=  [
    {name : "Broadspire", value : "Broadspire"}, 
    {name : "Crawford Claims Solutions", value : "Crawford Claims Solutions"}, 
    {name : "Administration", value : "Administration"}, 
    {name : "Contractor Connection", value : "Contractor Connection"}, 
    {name : "Global Technical Services", value : "Global Technical Services"}
  ];

  folderStructure:TreeNode[] = [
    {
      label: "WORKSPACE",
      children: [
        {
          label : "apps",
          children : [
            {
              label : "client-app-one",
              children : [
                {
                  label : "src",
                  children : [ { lable :"Sdf"} ]
                }
              ]
            },
            {
              label : "client-app-two",
              children : [
                {
                  label : "src",
                  children : [ { lable :"Sdf"} ]
                }
              ]
            }
          ]
        },
        {
          label : "libs",
          children : [
            {
              label : "my-lib-one",
              children : [
                {label : "src",  children : [ { lable :"Sdf"} ]}
              ]
            },
            {
              label : "my-lib-two",
              children : [
                {label : "src", children : [ { lable :"Sdf"} ]}
              ]
            }
          ]
        },
        {
          label : "node_module",
          children : [
            {
              label : ";zz"
            }
          ]
        }
      ]
    }
  ];
  ngOnInit() {
    
    this.filteredItems = this.items = [
      {
        label: 'Broadspire',
        command: (event) => { this.addNewBreadcrumb(event) }, 
        items: [
          {
            label: 'US',
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
              {
                label: "7 - Eleven",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: 'Program One',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  }
                ]
              },
              {
                label: "A.J. RICHARD & SONS, INC.",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: 'Program One',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  }
                ]
              },
              {
                label: "ACOSTA",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "ADECCO",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "CANON USA, INC",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "FITBIT, INC.",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "GEGEN, LLC",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "HITACHI AMERICA, LTD",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
            ]
          },
          {
            label: 'UK',
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
              {
                label: "7 - Eleven",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: 'Program One',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  }
                ]
              },
              {
                label: "A.J. RICHARD & SONS, INC.",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: 'Program One',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  }
                ]
              },
              {
                label: "ACOSTA",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "ADECCO",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "CANON USA, INC",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "FITBIT, INC.",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "GEGEN, LLC",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "HITACHI AMERICA, LTD",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
            ]
          },
        ]
      },
      {
        label: 'Crawford Claims Solutions',
        command: (event) => { this.addNewBreadcrumb(event) }, 
        items: [
        ]
      },
      {
        label: 'USPC',
        command: (event) => { this.addNewBreadcrumb(event) }, 
        items: [
          {
            label: 'US',
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
              {
                label: "7 - Eleven",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: 'Program One',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  },
                  {
                    label: 'Program Two',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  },
                  {
                    label: 'Program Three',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  },
                ]
              },
              {
                label: "A.J. RICHARD & SONS, INC.",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: 'Program One',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  },
                  {
                    label: 'Program Two',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  },
                  {
                    label: 'Program Three',
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items: [
                      {
                        label: "Jan 1, 2018 - Jan 1, 2019",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2017 - Jan 1, 2018",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2016 - Jan 1, 2017",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                      {
                        label: "Jan 1, 2015 - Jan 1, 2016",
                        command: (event) => { this.addNewBreadcrumb(event) }, 
                        items : [
                          { label : "Client Basic Information" },
                          { label : "Carrier Requirements" },
                          { label : "Case Create" },
                          { label : "Claim Handling Instructions Automobile" },
                          { label : "Case Management Models & Workflows" },
                          { label : "Claim Handling Instructions General Liability" },
                          { label : "Contacts" },
                          { label : "Escalation" },
                          { label : "Intake" },
                          { label : "Location Coding" },
                          { label : "Program/Policy Information" },
                          { label : "WC Investigations" },
                          { label : "WC Red Flag Triggers" },
                          { label : "WC Reserve and Settlement Advisories" },
                        ]
                      },
                    ]
                  },
                ]
              },
              {
                label: "ACOSTA",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "ADECCO",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "CANON USA, INC",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "FITBIT, INC.",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "GEGEN, LLC",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
              {
                label: "HITACHI AMERICA, LTD",
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                 
                ]
              },
            ]
          }
        ]
      },
      {
        label: 'Global Technical Services',
        command: (event) => { this.addNewBreadcrumb(event) }, 
        items: [
        ]
      }
    ];
    
  }



  applyFilter(ev){
    this.filteredItems = this.items.filter( function f(o:any) {
      console.log(ev.target.value)

      if (o.label.includes(ev.target.value)) return true
    
      if (o.items) {
        return (o.items = o.items.filter(f)).length
      }
    });
    console.log(this.filteredItems)
  }


  ngAfterViewInit(){

    // let completBackBtn = document.querySelector("#completedSlide > .ui-slidemenu  > .ui-slidemenu-wrapper > .ui-slidemenu-backward");
    // completBackBtn.addEventListener("click", ()=>{
    //   this.backClicked("complete")
    // });

    // let inProcessSlide = document.querySelector("#inProcessSlide > .ui-slidemenu  > .ui-slidemenu-wrapper > .ui-slidemenu-backward");
    // inProcessSlide.addEventListener("click", ()=>{
    //   this.backClicked("inprocess")
    // });

    // let archivedSlide = document.querySelector("#archivedSlide > .ui-slidemenu  > .ui-slidemenu-wrapper > .ui-slidemenu-backward");
    // archivedSlide.addEventListener("click", ()=>{
    //   this.backClicked("archived")
    // });

  }

  addNewBreadcrumb(ev){
    console.log("GO BACK?", ev);
    let index:string = String(this.completeBreadCrum.length);
    this.completeBreadCrum.push(
      {
        "label" :ev.item.label, "id": 
        index, 
        command : (event)=>{ 
          // let slider:any = document.getElementsByClassName("ui-slidemenu-rootlist");
          // let index = this.completeBreadCrum.findIndex(x => x.id === event.item.id);
          // console.log("INDEX", index)
          // console.log(slider[0].style.left )
          // console.log(( parseInt(slider[0].style.left.replace("px", "")) - (225 * (index))) + "px")
          // slider[0].style.left = (slider[0].style.left - (225 * (index + 1))) + "px"
          this.completeBreadCrum = this.completeBreadCrum.filter((x)=> { return parseInt(x.id) < parseInt(event.item.id) } );

      }} 
    );
  }

  backClicked(type){
    switch(type){
      case 'complete':
        this.completeBreadCrum.pop();
        
        document.getElementsByClassName("ui-slidemenu-rootlist")
      break;
      case 'inprocess':
        this.inProcessBreadCrum.pop();
      break;
      case 'archived':
        this.archivedBreadCrum.pop();
      break;
    }
  }
 
}


let items = [
  {
    label: 'Broadspire',
    command: (event) => { this.addNewBreadcrumb(event) }, 
    items: [
      {
        label: 'US',
        command: (event) => { this.addNewBreadcrumb(event) }, 
        items: [
          {
            label: "7 - Eleven",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
              {
                label: 'Program One',
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: "Jan 1, 2018 - Jan 1, 2019",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2017 - Jan 1, 2018",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2016 - Jan 1, 2017",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2015 - Jan 1, 2016",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                ]
              },
              {
                label: 'Program Two',
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: "Jan 1, 2018 - Jan 1, 2019",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2017 - Jan 1, 2018",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2016 - Jan 1, 2017",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2015 - Jan 1, 2016",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                ]
              },
              {
                label: 'Program Three',
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: "Jan 1, 2018 - Jan 1, 2019",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2017 - Jan 1, 2018",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2016 - Jan 1, 2017",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2015 - Jan 1, 2016",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                ]
              },
            ]
          },
          {
            label: "A.J. RICHARD & SONS, INC.",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
              {
                label: 'Program One',
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: "Jan 1, 2018 - Jan 1, 2019",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2017 - Jan 1, 2018",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2016 - Jan 1, 2017",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2015 - Jan 1, 2016",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                ]
              },
              {
                label: 'Program Two',
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: "Jan 1, 2018 - Jan 1, 2019",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2017 - Jan 1, 2018",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2016 - Jan 1, 2017",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2015 - Jan 1, 2016",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                ]
              },
              {
                label: 'Program Three',
                command: (event) => { this.addNewBreadcrumb(event) }, 
                items: [
                  {
                    label: "Jan 1, 2018 - Jan 1, 2019",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2017 - Jan 1, 2018",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2016 - Jan 1, 2017",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                  {
                    label: "Jan 1, 2015 - Jan 1, 2016",
                    command: (event) => { this.addNewBreadcrumb(event) }, 
                    items : [
                      { label : "Client Basic Information" },
                      { label : "Carrier Requirements" },
                      { label : "Case Create" },
                      { label : "Claim Handling Instructions Automobile" },
                      { label : "Case Management Models & Workflows" },
                      { label : "Claim Handling Instructions General Liability" },
                      { label : "Contacts" },
                      { label : "Escalation" },
                      { label : "Intake" },
                      { label : "Location Coding" },
                      { label : "Program/Policy Information" },
                      { label : "WC Investigations" },
                      { label : "WC Red Flag Triggers" },
                      { label : "WC Reserve and Settlement Advisories" },
                    ]
                  },
                ]
              },
            ]
          },
          {
            label: "ACOSTA",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
             
            ]
          },
          {
            label: "ADECCO",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
             
            ]
          },
          {
            label: "CANON USA, INC",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
             
            ]
          },
          {
            label: "FITBIT, INC.",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
             
            ]
          },
          {
            label: "GEGEN, LLC",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
             
            ]
          },
          {
            label: "HITACHI AMERICA, LTD",
            command: (event) => { this.addNewBreadcrumb(event) }, 
            items: [
             
            ]
          },
        ]
      }
    ]
  },
  {
    label: 'Crawford Claims Solutions',
    command: (event) => { this.addNewBreadcrumb(event) }, 
    items: [
    ]
  },
  {
    label: 'USPC',
    command: (event) => { this.addNewBreadcrumb(event) }, 
    items: [
    ]
  },
  {
    label: 'Global Technical Services',
    command: (event) => { this.addNewBreadcrumb(event) }, 
    items: [
    ]
  }
];
import { Component } from '@angular/core';
import {Fad} from './fad.component';
import {FadService} from './fad.service';
import {COMMON_DIRECTIVES} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'fadseek-app',
  templateUrl: 'fadseek.component.html',
  styleUrls: ['fadseek.component.css'],
  providers: [FadService]
})
export class FadseekAppComponent {
  title = 'fadseek works!';
   fads;
    searchText: string = '';
    numberOfFadsMerged = 0;
    mainPage: boolean = true;
    x;
    y;

    constructor(fadService: FadService) {
        this.fads = fadService.getFads();
    }
    flipWidth($event, fad) {
        $event.stopPropagation();
        
        if (fad.width == "25%") {
            this.x = 130;//$event.offsetX > 0 ? $event.offsetX : ($event.offsetX * -1);
            this.y = 2100; //$event.offsetY > 0 ? $event.offsetY : ($event.offsetY * -1);
            
            this.fads.forEach(element => {
                if (element != fad){
                    element.width = "25%";
                    element.setNotFound();
                }
            });
            fad.width = '100%';
            this.mainPage = false;
            
            window.scrollTo(0, 0);
            
        } else if (fad.width == "100%"){
            this.fads.forEach(element => {
              element.width = "25%";
              element.setFound();
            });
            this.mainPage = true;
        }
    }
    cancelSearch() {
        this.searchText = null;
        this.fads.forEach(element => {
            element.setStateUnselected();
            element.setFound();
        });
    }
    hideFad(fad): boolean {
        if (fad.hidden || !fad.found) {
            return false;
        }
        return true;
    }
    searchKeyup(s) {

        this.fads.forEach(element => {
            element.setStateUnselected();
            if (element.title.toUpperCase().indexOf(s.toUpperCase()) > -1) {
                element.setFound();
                console.log("found " + element.title)
            } else {
                element.setNotFound();
            }
        });
    }
    clickedDiv($event) {
        console.log("div clicked 2", $event);
    }

    clicked($event, fad) {
        event.stopPropagation(); //required to stop Div increase

        if (fad.selected) {
            //set all fads to unselected
            this.fads.forEach(element => {
                element.setStateUnselected();
            });
        } else if (fad.readyToMerge) {
            //find selected fad and merge with this fad        
            this.fads.forEach(element => {
                if (element.selected) {
                    console.log("merging fads " + element.id + " with " + fad.id);
                    this.numberOfFadsMerged++;
                }
                if (element != fad) {
                    //element.setStateUnselected();
                }
            });
            fad.setStateMerged();
        } else if (fad.unselected) {
            //select this fad, mark all other fads as readyToMerge
            this.fads.forEach(element => {
                if (element == fad) {
                    element.setStateSelected();
                } else {
                    element.setStateReadyToMerge();
                }
            });
        } else if (fad.hidden) {
            fad.hidden = false;
            fad.setStateReadyToMerge();
            this.numberOfFadsMerged--;
        }


        console.log("clicked", $event);
    }
}

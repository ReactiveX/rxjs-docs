import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Inject, Injectable } from '@angular/core';

// Data Table imports.
import { MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';


@Injectable()
export class MembersAdminService {

    private membersData$: FirebaseListObservable<any[]>;

    constructor(
        public af: AngularFireDatabase,

        // For Create and Update functions.
        @Inject(FirebaseApp) fb) {
        this.membersData$ = af.list('Companies');
    }

    // ... CRUD stuff not relevant to the MD Table ...


    // *** MD DATA TABLE SERVICES. ***
}

@Injectable()
export class MemberDatabase {

    /* Stream that emits whenever the data has been modified. */
    public dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    get data(): any[] {
        return this.dataChange.value;
    }

    // Connection to remote db.
    private database = this.memberAdminService.af.list('Companies');
    public getMembers(): FirebaseListObservable<any[]> {
        return this.database;
    }


    constructor(private memberAdminService: MembersAdminService) {
        this.getMembers()
            .subscribe(data => this.dataChange.next(data));
    }
}


@Injectable()
export class MembersAdminSource extends DataSource<any> {


    constructor(
        private memberDatabase: MemberDatabase,
        private paginator: MatPaginator) {
        super();
    }


    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]> {

        const displayDataChanges = [
            this.memberDatabase.dataChange,
            this.paginator.page,
        ];

        return Observable
            .merge(...displayDataChanges) // Convert object to array with spread syntax.
            .map(() => {
                const dataSlice = this.memberDatabase.data.slice(); // Data removed from viewed page.

                // Get the page's slice per pageSize setting.
                const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

                const dataLength = this.paginator.length;  // This is for the counter on the DOM.

                return dataSlice.splice(startIndex, this.paginator.pageSize);
            });
    }
    disconnect() { }
}
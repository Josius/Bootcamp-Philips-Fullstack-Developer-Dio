import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // selector: 'app-course-list', // Não precisamos mais do selector, pois vamos fazer o redirecionamento via link de rotas em 'app.module.ts' -> 'RouterModule.forRoot...'
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    // _ => usamos o underscore para indicar que a variável é local deste componente
    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    // fazendo ligação (two way data binding) com course-list.component.html -> 8 -> <input [(ngModel)]="filter" class="form-control">
    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter() {
        return this._filterBy;
    }
}
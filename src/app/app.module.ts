import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";

/**
 * declarations: components what you wanna focus on but, it only
 * applies for non standalone components
 * imports: here I can add all standalone components and they'll
 * imported into the components tree
 */
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent, TaskComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
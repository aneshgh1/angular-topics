import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { TopicsComponent } from "./topics/topics.component";

const routes: Routes = [
  { path: "aboutme", component: AboutMeComponent },
  { path: "topics", component: TopicsComponent }
];

@NgModule({
  declarations: [AppComponent, AboutMeComponent, TopicsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

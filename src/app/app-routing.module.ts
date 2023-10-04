import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BookComponent } from "./book/book.component";
import { HomeComponent } from "./home/home.component";
import { LibraryComponent } from "./library/library.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "library", component: LibraryComponent},
    {path: "library/book/:bookId", component: BookComponent},
    {path: "**", component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post.model";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Post[];
  loading = false;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loading = true;
    this.postService
      .getPosts("https://jsonplaceholder.typicode.com/posts1")
      .pipe(
        tap(x => {
          console.log("here");
          this.loading = false;
        })
      )
      .subscribe(
        posts => {
          this.loading = false;
          this.posts = posts;
        },
        error => {
          this.loading = false;
          window.alert(error.message);
        }
      );
  }
}

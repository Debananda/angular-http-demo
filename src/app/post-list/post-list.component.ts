import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { map, tap, first, catchError } from "rxjs/operators";
import { PostService } from "../post.service";
import { Post } from "../post.model";
import { Observable } from "rxjs";

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
    this.posts = this.postService.posts;
  }
}

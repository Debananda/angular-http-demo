import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root"
})
export class PostService {
  posts = [
    new Post(
      1,
      1,
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    ),
    new Post(
      1,
      2,
      "qui est esse",
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    ),
    new Post(
      1,
      3,
      "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    )
  ];
  constructor() {}
}

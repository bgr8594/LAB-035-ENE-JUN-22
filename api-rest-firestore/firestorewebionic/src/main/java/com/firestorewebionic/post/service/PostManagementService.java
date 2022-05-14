package com.firestorewebionic.post.service;

import dto.PostDTO;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface PostManagementService {
  List<PostDTO> list();

  Boolean add(PostDTO postDTO);

  Boolean edit(String id, PostDTO postDTO);

  Boolean delete(String id);
}

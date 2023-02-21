package com.example.Backend.booksDBweb.data;

import com.example.Backend.booksDBweb.biz.models.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book,Long> {
}

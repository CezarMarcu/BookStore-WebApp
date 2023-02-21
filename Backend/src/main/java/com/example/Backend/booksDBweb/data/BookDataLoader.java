package com.example.Backend.booksDBweb.data;

import com.example.Backend.booksDBweb.biz.models.Book;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;


@Component
public class BookDataLoader implements ApplicationRunner {

    private BookRepository bookRepository;

    public BookDataLoader(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(bookRepository.count() == 0){
            List<Book> books = List.of(
                    new Book(null,"Harkonen House","Frank Hebert", "Neemira", LocalDate.of(1985,1,1),new BigDecimal("65.54")),
                    new Book(null,"Atreides House","Frank Hebert", "Neemira", LocalDate.of(1985,2,2),new BigDecimal("65") ),
                    new Book(null,"Corin House","Frank Hebert", "Neemira", LocalDate.of(1985,3,3),new BigDecimal("65")),
                    new Book(null,"Budlerian Jihad","Frank Hebert", "Neemira", LocalDate.of(1985,4,4),new BigDecimal("65")),
                    new Book(null,"Machine Crusade","Frank Hebert", "Neemira", LocalDate.of(1985,5,5),new BigDecimal("65")),
                    new Book(null,"Eretics of Dune","Frank Hebert", "Neemira", LocalDate.of(1985,1,1),new BigDecimal("65.54")),
                    new Book(null,"Battle of Corin","Frank Hebert", "Neemira", LocalDate.of(1985,2,2),new BigDecimal("65") ),
                    new Book(null,"Messiah of Dune","Frank Hebert", "Neemira", LocalDate.of(1985,3,3),new BigDecimal("65")),
                    new Book(null,"Sisters of Dune","Frank Hebert", "Neemira", LocalDate.of(1985,4,4),new BigDecimal("65")),
                    new Book(null,"Dune","Frank Hebert", "Neemira", LocalDate.of(1985,5,5),new BigDecimal("65")));
            bookRepository.saveAll(books);
        }



    }
}

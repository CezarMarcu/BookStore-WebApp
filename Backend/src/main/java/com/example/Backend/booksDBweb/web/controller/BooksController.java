package com.example.Backend.booksDBweb.web.controller;

import com.example.Backend.booksDBweb.biz.models.Book;
import com.example.Backend.booksDBweb.data.BookRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/books")
public class BooksController {

    private BookRepository bookRepository;

    public BooksController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @ModelAttribute("books")
    public Iterable<Book> getBooks(){
        return bookRepository.findAll();
    }

    @ModelAttribute
    public Book getBook(){
        return new Book();
    }

    //Request handlers
    @GetMapping
    public String showBooksPage(Model model){
        return "books";
    }

    @PostMapping
    public String saveBook(Book book){
        bookRepository.save(book);
        System.out.println(book);
        return "redirect:books";
    }
}

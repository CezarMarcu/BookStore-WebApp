package com.example.Backend.booksDBweb.web.controller;

import com.example.Backend.booksDBweb.biz.models.Book;
import com.example.Backend.booksDBweb.data.BookRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


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
    public String saveBook(@Valid Book book, Errors errors){
        if(!(errors.hasErrors())){
            bookRepository.save(book);
            return "redirect:books";
        }
        return "books";
    }

    @PostMapping(params = "delete=true")
    public String deleteBooks(@RequestParam Optional<List<Long>> selections){
        if (selections.isPresent()) {
            bookRepository.deleteAllById(selections.get());
        }
        return "redirect:books";
    }

    @PostMapping(params = "edit=true")
    public String updateBooks(@RequestParam Optional<List<Long>> selections, Model model){
        if (selections.isPresent()) {
            Optional<Book> book = bookRepository.findById(selections.get().get(0));
            model.addAttribute("book", book);
        }
        return "books";
    }
}

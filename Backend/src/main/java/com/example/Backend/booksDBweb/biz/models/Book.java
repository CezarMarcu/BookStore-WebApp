package com.example.Backend.booksDBweb.biz.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Negative;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

/*
    @Data will allow lombok library to scan this class
and generate getters and setters for every field, and also
will generate none parameter constructor.

    @AllArgsConstructor will generate a parameter constructor for m
  my class
*/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {

    @Id
    @GeneratedValue
    private Long id;

   @NotEmpty(message = "Book title cannot be empty")
    private String title;

   @NotEmpty(message = "Book author cannot be empty")
    private String author;

   @NotEmpty(message = "Book edit cannot be empty")
    private String edit;


    @Past(message = "Book publication date cannot be in future")
    @NotNull(message = "Date cannot be null")
    private LocalDate dateOfPublication;

   // @Negative(message="The price value cannot be negative")
    private BigDecimal price;
}
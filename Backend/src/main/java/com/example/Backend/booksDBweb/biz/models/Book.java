package com.example.Backend.booksDBweb.biz.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
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
    private String title;
    private String author;
    private String edit;
    private LocalDate dateOfPublication;
    private BigDecimal price;
}
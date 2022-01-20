package com.raama.portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Institucion {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private int id;
    private String nombre;
    @OneToOne(optional = false)
    @JoinColumn(name = "idImage", referencedColumnName = "id")
    private Image image;
    @OneToOne(optional = false)
    @JoinColumn(name = "idUbicacion", referencedColumnName = "id")
    private Ubicacion ubicacion;
}

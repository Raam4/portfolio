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
public class Persona {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private int id;
    private String nombre;
    private String apellido;
    private int edad;
    private String telefono;
    private String titulo;
    private String resumen;
    @OneToOne(optional = true)
    @JoinColumn(name = "idUbicacion", referencedColumnName = "id")
    private Ubicacion ubicacion;
}

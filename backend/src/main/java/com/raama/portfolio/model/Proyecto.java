package com.raama.portfolio.model;

import java.util.Calendar;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Proyecto {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private int id;
    private String nombre;
    private String descripcion;
    @Temporal(TemporalType.DATE)
    private Calendar fecha_inicio;
    private String enlace;
    @ManyToOne
    @JoinColumn(name = "idPersona", referencedColumnName = "id")
    private Persona persona;
}

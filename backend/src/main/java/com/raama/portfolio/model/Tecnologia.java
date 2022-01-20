
package com.raama.portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Tecnologia {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private int id;
    private String nombre;
    private String descripcion;
    @OneToOne(optional = false)
    @JoinColumn(name = "idImage", referencedColumnName = "id")
    private Image image;
    @ManyToOne
    @JoinColumn(name = "idPersona", referencedColumnName = "id")
    private Persona persona;
}

package com.raama.portfolio.model;

import java.util.Calendar;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private int id;
    private String titulo;
    private String descripcion;
    @Temporal(TemporalType.DATE)
    private Calendar fecha_inicio;
    @Temporal(TemporalType.DATE)
    private Calendar fecha_fin;
    @OneToOne(optional = false)
    @JoinColumn(name = "idInstitucion", referencedColumnName = "id")
    private Institucion institucion;
    @ManyToOne
    @JoinColumn(name = "idPersona", referencedColumnName = "id")
    private Persona persona;
}

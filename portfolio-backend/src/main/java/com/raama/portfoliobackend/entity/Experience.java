package com.raama.portfoliobackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String position;
    private String company;
    private String logoLoc;
    private String location;
    private Date dateStart;
    private Date dateEnd;
    private String description;
    
    @JsonIgnoreProperties("experiences")
    @ManyToOne(optional = false)
    private Person person;
    
    public Experience(){}

}

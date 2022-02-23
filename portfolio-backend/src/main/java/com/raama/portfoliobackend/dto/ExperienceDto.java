package com.raama.portfoliobackend.dto;

import java.sql.Date;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ExperienceDto {

    @NotBlank
    private String position;
    @NotBlank
    private String company;
    private String logoLoc;
    @NotBlank
    private String location;
    @NotBlank
    private Date dateStart;
    private Date dateEnd;
    @NotBlank
    private String description;

    public ExperienceDto() {
    }

    public ExperienceDto(@NotBlank String position, @NotBlank String company, String logoLoc,
            @NotBlank String location, @NotBlank Date dateStart, Date dateEnd, @NotBlank String description) {
        this.position = position;
        this.company = company;
        this.logoLoc = logoLoc;
        this.location = location;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.description = description;
    }
}
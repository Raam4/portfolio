package com.raama.portfolio.service;

import com.raama.portfolio.model.Institucion;
import java.util.List;

public interface IInstitucionService {
    
    public List<Institucion> getInstitucion();
    
    public void saveInstitucion(Institucion inst);
    
    public void deleteInstitucion(int id);
    
    public Institucion findInstitucion(int id);
}
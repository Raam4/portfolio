package com.raama.portfolio.service;

import com.raama.portfolio.model.Proyecto;
import java.util.List;

public interface IProyectoService {
    
    public List<Proyecto> getProyecto();
    
    public void saveProyecto(Proyecto pro);
    
    public void deleteProyecto(int id);
    
    public Proyecto findProyecto(int id);
}
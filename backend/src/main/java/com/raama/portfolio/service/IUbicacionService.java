package com.raama.portfolio.service;

import com.raama.portfolio.model.Ubicacion;
import java.util.List;

public interface IUbicacionService {
    
    public List<Ubicacion> getUbicacion();
    
    public void saveUbicacion(Ubicacion ubi);
    
    public void deleteUbicacion(int id);
    
    public Ubicacion findUbicacion(int id);
}
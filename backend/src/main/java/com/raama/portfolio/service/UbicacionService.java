package com.raama.portfolio.service;

import com.raama.portfolio.model.Ubicacion;
import com.raama.portfolio.repository.UbicacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UbicacionService implements IUbicacionService{
    @Autowired
    private UbicacionRepository ubiRepo;

    @Override
    public List<Ubicacion> getUbicacion() {
        List<Ubicacion> listaUbi = ubiRepo.findAll();
        return listaUbi;
    }

    @Override
    public void saveUbicacion(Ubicacion ubi) {
        ubiRepo.save(ubi);
    }

    @Override
    public void deleteUbicacion(int id) {
        ubiRepo.deleteById(id);
    }

    @Override
    public Ubicacion findUbicacion(int id) {
        Ubicacion ubi = ubiRepo.findById(id).orElse(null);
        return ubi;
    }
}
package com.raama.portfolio.service;

import com.raama.portfolio.model.Image;
import com.raama.portfolio.repository.ImageRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService implements IImageService{
    @Autowired
    private ImageRepository imgRepo;

    @Override
    public List<Image> getImage() {
        List<Image> listaImg = imgRepo.findAll();
        return listaImg;
    }

    @Override
    public void saveImage(Image img) {
        imgRepo.save(img);
    }

    @Override
    public void deleteImage(int id) {
        imgRepo.deleteById(id);
    }

    @Override
    public Image findImage(int id) {
        Image img = imgRepo.findById(id).orElse(null);
        return img;
    }
}
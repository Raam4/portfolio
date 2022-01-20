package com.raama.portfolio.service;

import com.raama.portfolio.model.Image;
import java.util.List;

public interface IImageService {
    
    public List<Image> getImage();
    
    public void saveImage(Image img);
    
    public void deleteImage(int id);
    
    public Image findImage(int id);
}
package Dgfb.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dgfb.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ТранспСр
 */
@Entity(name = "IISDgfbТранспСр")
@Table(schema = "public", name = "ТранспСр")
public class TranspSr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Марка")
    private String марка;

    @Column(name = "Модель")
    private String модель;

    @Column(name = "ГосЗнак")
    private String госзнак;


    public TranspSr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getМарка() {
      return марка;
    }

    public void setМарка(String марка) {
      this.марка = марка;
    }

    public String getМодель() {
      return модель;
    }

    public void setМодель(String модель) {
      this.модель = модель;
    }

    public String getГосЗнак() {
      return госзнак;
    }

    public void setГосЗнак(String госзнак) {
      this.госзнак = госзнак;
    }


}
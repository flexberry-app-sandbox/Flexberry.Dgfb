package Dgfb.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dgfb.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Договор
 */
@Entity(name = "IISDgfbДоговор")
@Table(schema = "public", name = "Договор")
public class Dogovor {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаключ")
    private Date датазаключ;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОконч")
    private Date датаоконч;

    @Column(name = "ОбязанПосред")
    private String обязанпосред;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RukOtdLog")
    @Convert("RukOtdLog")
    @Column(name = "РукОтдЛог", length = 16, unique = true, nullable = false)
    private UUID _rukotdlogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RukOtdLog", insertable = false, updatable = false)
    private RukOtdLog rukotdlog;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;


    public Dogovor() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаключ() {
      return датазаключ;
    }

    public void setДатаЗаключ(Date датазаключ) {
      this.датазаключ = датазаключ;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(Date датаоконч) {
      this.датаоконч = датаоконч;
    }

    public String getОбязанПосред() {
      return обязанпосред;
    }

    public void setОбязанПосред(String обязанпосред) {
      this.обязанпосред = обязанпосред;
    }


}
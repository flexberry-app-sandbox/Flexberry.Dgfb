package Dgfb.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dgfb.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПутевойЛист
 */
@Entity(name = "IISDgfbПутевойЛист")
@Table(schema = "public", name = "ПутевойЛист")
public class PutevojList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ВыдатьТоплива")
    private Integer выдатьтоплива;

    @Column(name = "ДатаВремя")
    private Date датавремя;

    @Column(name = "ПунктНазнач")
    private String пунктназнач;

    @Column(name = "ПунктОтправ")
    private String пунктотправ;

    @Column(name = "Расстояние")
    private Double расстояние;

    @Column(name = "МаркаГСМ")
    private String маркагсм;

    @Column(name = "ОстатокГСМ")
    private Double остатокгсм;

    @Column(name = "Допущен")
    private Boolean допущен;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Personal")
    @Convert("Personal")
    @Column(name = "Персонал", length = 16, unique = true, nullable = false)
    private UUID _personalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Personal", insertable = false, updatable = false)
    private Personal personal;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TranspSr")
    @Convert("TranspSr")
    @Column(name = "ТранспСр", length = 16, unique = true, nullable = false)
    private UUID _transpsrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TranspSr", insertable = false, updatable = false)
    private TranspSr transpsr;


    public PutevojList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Integer getВыдатьТоплива() {
      return выдатьтоплива;
    }

    public void setВыдатьТоплива(Integer выдатьтоплива) {
      this.выдатьтоплива = выдатьтоплива;
    }

    public Date getДатаВремя() {
      return датавремя;
    }

    public void setДатаВремя(Date датавремя) {
      this.датавремя = датавремя;
    }

    public String getПунктНазнач() {
      return пунктназнач;
    }

    public void setПунктНазнач(String пунктназнач) {
      this.пунктназнач = пунктназнач;
    }

    public String getПунктОтправ() {
      return пунктотправ;
    }

    public void setПунктОтправ(String пунктотправ) {
      this.пунктотправ = пунктотправ;
    }

    public Double getРасстояние() {
      return расстояние;
    }

    public void setРасстояние(Double расстояние) {
      this.расстояние = расстояние;
    }

    public String getМаркаГСМ() {
      return маркагсм;
    }

    public void setМаркаГСМ(String маркагсм) {
      this.маркагсм = маркагсм;
    }

    public Double getОстатокГСМ() {
      return остатокгсм;
    }

    public void setОстатокГСМ(Double остатокгсм) {
      this.остатокгсм = остатокгсм;
    }

    public Boolean getДопущен() {
      return допущен;
    }

    public void setДопущен(Boolean допущен) {
      this.допущен = допущен;
    }


}
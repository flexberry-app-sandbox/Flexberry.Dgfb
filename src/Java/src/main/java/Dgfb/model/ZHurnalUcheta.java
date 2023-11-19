package Dgfb.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dgfb.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЖурналУчета
 */
@Entity(name = "IISDgfbЖурналУчета")
@Table(schema = "public", name = "ЖурналУчета")
public class ZHurnalUcheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ВремяВыезда")
    private Date времявыезда;

    @Column(name = "ВремяВозвращ")
    private Date времявозвращ;

    @Column(name = "ПоказСпидом")
    private Double показспидом;

    @Column(name = "Пробег")
    private Double пробег;

    @Column(name = "Примечания")
    private String примечания;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TranspSr")
    @Convert("TranspSr")
    @Column(name = "ТранспСр", length = 16, unique = true, nullable = false)
    private UUID _transpsrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TranspSr", insertable = false, updatable = false)
    private TranspSr transpsr;


    public ZHurnalUcheta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Date getВремяВыезда() {
      return времявыезда;
    }

    public void setВремяВыезда(Date времявыезда) {
      this.времявыезда = времявыезда;
    }

    public Date getВремяВозвращ() {
      return времявозвращ;
    }

    public void setВремяВозвращ(Date времявозвращ) {
      this.времявозвращ = времявозвращ;
    }

    public Double getПоказСпидом() {
      return показспидом;
    }

    public void setПоказСпидом(Double показспидом) {
      this.показспидом = показспидом;
    }

    public Double getПробег() {
      return пробег;
    }

    public void setПробег(Double пробег) {
      this.пробег = пробег;
    }

    public String getПримечания() {
      return примечания;
    }

    public void setПримечания(String примечания) {
      this.примечания = примечания;
    }


}
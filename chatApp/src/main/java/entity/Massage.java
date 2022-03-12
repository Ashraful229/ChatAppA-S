package entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "massage")
public class Massage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String massage;
    @ManyToOne(fetch = FetchType.LAZY)
    private People sender;
    @ManyToOne(fetch = FetchType.LAZY)
    private People receiver;
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy h:mm:ss a")
    @Column(updatable = false)
    private LocalDateTime time;

}

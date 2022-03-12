package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.scheduling.annotation.EnableAsync;


import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "people")
public class People {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String role;

    @OneToOne(mappedBy = "people",fetch = FetchType.LAZY)
    private List<Massage> massageList;
}

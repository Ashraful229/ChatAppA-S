package repository;

import entity.Massage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MassageRepository extends JpaRepository<Massage, Long> {
}

import { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    // Cargar el script necesario de LinkedIn
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Eliminar el script cuando el componente se desmonte (opcional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="es_ES"
      data-size="medium"
      data-theme="dark"
      data-type="HORIZONTAL"
      data-vanity="mario-fernández-álvarez-38b20a318"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://es.linkedin.com/in/mario-fern%C3%A1ndez-%C3%A1lvarez-38b20a318?trk=profile-badge"
      >
        Mario Fernández Álvarez
      </a>
    </div>
  );
};

export default LinkedInBadge;

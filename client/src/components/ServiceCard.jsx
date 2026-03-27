function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <div className={`service-card reveal reveal-delay-${delay}`}>
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </div>
  );
}

export default ServiceCard;
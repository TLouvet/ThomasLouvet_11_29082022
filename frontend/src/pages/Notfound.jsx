import { Link } from "react-router-dom";
import { ErrorContainer, StyledTitle } from "./NotFound.styles";

export function NotFoundPage() {
  return (
    <ErrorContainer>
      <StyledTitle>404</StyledTitle>
      <p>Cet id utilisateur n'est pas reconnu, ce prototype ne fonctionne qu'avec les id 12 et 18</p>
      <p>Accéder à l'utilisateur 12: <Link to="/12/dashboard">Cliquez ici</Link></p>
      <p>Accéder à l'utilisateur 18: <Link to="/18/dashboard">Cliquez ici</Link></p>
      <p>Si vous avez mis un id utilisateur valide, assurez-vous que le serveur soit bien lancé</p>
    </ErrorContainer>
  )
}
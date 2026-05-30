import { agencyConfig } from "../data/agencyConfig";
import "./styles/BrandLogo.css";

type BrandLogoProps = {
  className?: string;
};

const BrandLogo = ({ className = "" }: BrandLogoProps) => {
  const { brand } = agencyConfig;

  return (
    <img
      src={brand.logoImage}
      alt={brand.name}
      className={`brand-logo-img ${className}`.trim()}
      decoding="async"
    />
  );
};

export default BrandLogo;

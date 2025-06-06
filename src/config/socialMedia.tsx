import envs from "./envs";

export class SocialMedia {
  static get linkedin() {
    return (
      envs.VITE_LINKEDIN_URL ||
      "https://www.linkedin.com/in/oscar-valenzuela-rojas-8b54701aa"
    );
  }

  static get github() {
    return envs.VITE_GITHUB_URL || "https://github.com/oscarvalenzuela25";
  }

  static get portfolio() {
    return envs.VITE_PORTFOLIO_URL || "https://portafolio-six-smoky.vercel.app";
  }
}

{ pkgs, ... }: {
  channel = "stable-23.11";

  packages = [
    pkgs.nodejs_20
  ];

  idx = {
    extensions = [
      "vscodevim.vim"
      "bradlc.vscode-tailwindcss"
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"];
          manager = "web";
        };
      };
    };

    workspace = {
      onCreate = {
        npm-install = "npm install";
        default.openFiles = ["src/features/gbods/GBODSEngine.tsx" "README.md"];
      };
      onStart = {
        run-dev = "npm run dev";
      };
    };
  };
}

{
  description = "Following Maximillian Schwarzmüller example in his course Understanding Typescript";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in with pkgs;
  {
    devShell = mkShell {
      nativeBuildInputs = [
        nodePackages.npm
        nodePackages.typescript
      ];
    };

    apps.dev = flake-utils.lib.mkApp {
      drv = writeScriptBin "development-setup" ''
        ${nodePackages.typescript}/bin&tsc -w &
        ${nodePackages.npm} start
      '';
    };
  };
}

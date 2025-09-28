import React from "react";

export default function Entre() {
  return (
    <div className="entre">
      <div className="div">
        <div className="frame">
          <input type="email" name="email" placeholder="E-mail" />
        </div>

        <div className="div-wrapper">
          <input type="password" name="senha" placeholder="Senha" />
        </div>
      </div>
    </div>
  );
}

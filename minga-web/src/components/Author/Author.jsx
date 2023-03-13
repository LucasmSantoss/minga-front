import React from "react";
import "./author.css";
function Author() {
  return (
    <div className="container">
      <div className="role">
        <p id="changeRole">Change role to</p>
        <img id="logo" src="./imgs/logoIgna.png" alt="logoIgna" />
      </div>
      <div>
        <fieldset  className="container1">
            <img id="tripleImg"src="./imgs/companyImg.png" alt="company" />
            <div>
                <h2>Join as an Author!</h2>
            <p>I'm a reader writting a manga</p>
            </div>
            <div>
            <input type="radio" />
            </div>
        </fieldset>
      </div>
      <div>
        <fieldset className="container2">
                <img  id="tripleImg" src="./imgs/groupimg.png" alt="group-img" />
                <div>
            <h2>Join as a Company!</h2>
            <p>I’m a company and I want to publish my comics</p>
            </div>
            <div>
            <input type="radio" />
            </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Author;

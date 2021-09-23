import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [path, setPath] = useState('/Start open the folders'); //setting default state for the path

  useEffect(() => {
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
      //executing adding/removing 'active' className from clicked folder
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active"); //toggle class
        this.classList.toggle("caret-down"); //caret down if folder clicked
      });
    }
  }, []);

  //getting path value from clicked element
  function getAttr(e) {
    if (e.target.getAttribute('data') !== null) {
      setPath(e.target.getAttribute('data'));
    }
  }

  return (
    <div className="wrapper">
      <ul id="myUL">
        <li onClick={getAttr}><span className="caret" data="/Documents">Documents</span>
          <ul className="nested">
            <li><span className="caret" data="/Documents/Folder 1">Folder 1</span>
              <ul className="nested">
                <li><span className="caret" data="/Documents/Folder 1/Subfolder 1A">Subfolder 1A</span>
                  <ul className="nested">
                  </ul>
                </li>
                <li><span className="caret" data="/Documents/Folder 1/Subfolder 1B">Subfolder 1B</span>
                  <ul className="nested">
                    <li><span className="caret" data="/Documents/Folder 1/Subfolder 1B/Subfolder B1-1">Subfolder B1-1</span>
                      <ul className="nested">
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><span className="caret" data="/Documents/Folder 2">Folder 2</span>
              <ul className="nested">
                <li><span className="caret" data="/Documents/Folder 2/Subfolder 2A">Subfolder 2A</span>
                  <ul className="nested">
                  </ul>
                </li>
                <li><span className="caret" data="/Documents/Folder 2/Subfolder 2B">Subfolder 2B</span>
                  <ul className="nested">
                  </ul>
                </li>
                <li><span className="caret" data="/Documents/Folder 2/Subfolder 2C">Subfolder 2C</span>
                  <ul className="nested">
                  </ul>
                </li>
              </ul>
            </li>
            <li><span className="caret" data="/Documents/Folder 3">Folder 3</span>
              <ul className="nested">
                <li><span className="caret" data="/Documents/Folder 3/Subfolder 3A">Subfolder 3A</span>
                  <ul className="nested">
                  </ul>
                </li>
                <li><span className="caret" data="/Documents/Folder 3/Subfolder 3B">Subfolder 3B</span>
                  <ul className="nested">
                    <li><span className="caret" data="/Documents/Folder 3/Subfolder 3B/Subfolder 3C">Subfolder 3C</span>
                      <ul className="nested">
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>{path}</p>
    </div>
  );
}

export default App;

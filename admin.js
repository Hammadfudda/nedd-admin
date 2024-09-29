// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6Xe035sTcDjEVqHMvdYtEmxtUGlArMXk",
  authDomain: "neddquiz.firebaseapp.com",
  databaseURL: "https://neddquiz-default-rtdb.firebaseio.com",
  projectId: "neddquiz",
  storageBucket: "neddquiz.appspot.com",
  messagingSenderId: "319841902543",
  appId: "1:319841902543:web:5a765ce0b8918d227abcba",
  measurementId: "G-SMMV3CV1EN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();



function giveData() {
  const reference = ref(db, "obj/");
  onValue(reference, function (snapshot) {
    const allTask = snapshot.val();
    console.log(allTask.imageUrl)
    
    renderData(allTask);
  });
}
function renderData(allTask) {
  const dataContainer = document.getElementById("data");
  dataContainer.innerHTML = ""; // Clear any existing data

  if (allTask) {
    let mainNumber = 0;

    for (let key in allTask) {
      mainNumber += 1;
      const task = allTask[key];
      

      const taskHTML = `
        <div class="numdiv">
          <h3 class="number">No: <span>${mainNumber}</span></h3>
        </div>
        <div class="data ">
          <img class="image rounded" id="image" src=${task.ImageUrl} />
          <p>Id <span>:</span> <span>${task.id || key}</span></p>
          <p>Username <span>:</span> <span>${task.userName || ''}</span></p>
          <p>Phone number <span>:</span> <span>${task.phoneNumber || ''}</span></p>
          <p>Percentage <span>:</span> <span>${task.percentage || ''}</span></p>
          <p>Code <span>:</span> <span>${task.code || ''}</span></p>
          <p>Age <span>:</span> <span>${task.age || ''}</span></p>
          <p>Email <span>:</span> <span>${task.email || ''}</span></p>
          <p>Skills and Qualification <span>:</span> <span>${task.Qualification|| ''}</span></p>
        </div>`;

      dataContainer.innerHTML += taskHTML;
    }
  } else {
    dataContainer.innerHTML = "<p>No data available</p>";
  }
}

giveData();

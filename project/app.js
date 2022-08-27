  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDOR7MvKADhp3jb9hvpY6sCs08B8hT-WNg",
    authDomain: "data-base-88db4.firebaseapp.com",
    projectId: "data-base-88db4",
    storageBucket: "data-base-88db4.appspot.com",
    messagingSenderId: "225929848741",
    appId: "1:225929848741:web:edd2675d376c254cb16a4c",
    measurementId: "G-V9MSL7TXST"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const databs = getDatabase();


  window.sendValue = function(){
var inp = document.getElementById("name");
console.log(inp.value);

    var id = Math.random().toString().slice(2);
    var obj ={
    text:inp.value,
    id:id,
    dt: new Date().getHours() + new Date().getMinutes() + new Date().getSeconds(), 
    }
    
    
    var reference = ref(databs, "name/"+id+'/');
    set(reference, obj);
    inp.value = "";
};


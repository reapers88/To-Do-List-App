function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");
  console.log(text.value);
  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });
  text.value = "";
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,

        ...doc.data(),
      });
    });
    generateItems(items);
  });
}

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    itemsHTML += `
      <div class="todo-item">
          <div class="check">
            <div class="check-mark">
              <img src="./assets/checkmark-icon24.png" alt="" />
            </div>
          </div>
          <div class="todo-text">
          ${item.text}
          </div>
      </div>
    `;
  });

  document.querySelector(".todo-items").innerHTML = itemsHTML;
}
getItems();

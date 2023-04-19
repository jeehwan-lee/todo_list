const tbody = document.querySelector("tbody");
const btn = document.querySelectorAll(".btn");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const modal = document.querySelector(".modal");

const editBtn = document.querySelector("#editBtn");
const cancelBtn = document.querySelector("#cancelBtn");

const editTitle = document.querySelector("#edit_title");
const editContent = document.querySelector("#edit_content");
const alertMessage = document.querySelector("#alert_message");

let todos = [];
let foundTitle = "";

// Title과 Content 입력 Input을 비워주는 매서드
function clearInput() {
  titleInput.value = "";
  contentInput.value = "";
}

// table을 그려주는 메서드
function tableRowRender() {
  for (var i = 1; i < 11; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      var td = document.createElement("td");
      if (j == 0) {
        td.innerText = i;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

// todo가 작성 및 수정된 시간을 구하는 메서드
function registerTime() {
  var now = new Date();

  var year = now.getFullYear();
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var day = ("0" + now.getDate()).slice(-2);

  var hours = ("0" + now.getHours()).slice(-2);
  var minutes = ("0" + now.getMinutes()).slice(-2);

  return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
}

// modal에서 edit 버튼을 클릭했을때 해당 todo를 수정하고 저장
function editTodo() {
  todos.map((todo) => {
    if (todo.title === foundTitle) {
      if (editTitle.value.length === 0) {
        alertMessage.innerText = "Error : Please Input Title";
        editTitle.focus();
        editTitle.style.borderBottom = "2px solid red";
      } else if (editContent.value.length === 0) {
        alertMessage.innerText = "Error : Please Input Content";
        editContent.focus();
        editContent.style.border = "2px solid red";
      } else {
        todo.title = editTitle.value;
        todo.content = editContent.value;
        todo.registerTitme = registerTime();

        modal.style.display = "none";
        modal.querySelector(".edit_modal").style.display = "none";

        tableBodyRender();
      }
    }
  });
}

// todo를 수정할 수 있는 Edit 모달 보여주기
function todoEdit(event) {
  editTitle.value = event.target.parentNode.childNodes[1].innerText;
  editContent.value = event.target.parentNode.childNodes[2].innerText;

  foundTitle = editTitle.value;

  modal.style.display = "flex";
  modal.querySelector(".edit_modal").style.display = "flex";
}

// table의 body 안의 todo를 그려주는 메서드
function tableBodyRender() {
  // 기존의 table body를 지움
  tbody.replaceChildren();
  tableRowRender();

  var num = 0;
  var tabletr = tbody.querySelectorAll("tr");

  for (var i = 0; i < todos.length; i++) {
    var tabletd = tabletr[num].querySelectorAll("td");

    tabletr[num].draggable = true;
    tabletr[num].addEventListener("dragend", dragDelete);
    tabletr[num].addEventListener("dblclick", todoEdit);

    for (var j = 0; j < tabletd.length; j++) {
      // tabletd[j].addEventListener("dbclick", todoEdit);

      if (j != 0 && j != tabletd.length - 1) {
        tabletd[j].innerText = Object.values(todos[i])[j - 1];
      } else if (j == tabletd.length - 1) {
        tabletd[
          j
        ].innerHTML = `<i class = "bi bi-trash" onclick="deleteTodo(event)"></i>`;
      }
    }
    num++;
  }
}

// 각 todo를 삭제하는 메서드
function deleteTodo(event) {
  var deleteTitle = event.target.parentNode.parentNode.childNodes[1].innerText;

  // 삭제하려는 todo의 title을 todos에서 삭제
  var todosNew = todos.filter((todo) => todo.title !== deleteTitle);
  todos = todosNew;

  // 다시 만들어진 todos를 통해 tableBody를 그려줌
  tableBodyRender();
}

// drag를 통해서 지우는 메서드
function dragDelete(event) {
  var deleteTitle = event.target.childNodes[1].innerText;

  // 삭제하려는 todo의 title을 todos에서 삭제
  var todosNew = todos.filter((todo) => todo.title !== deleteTitle);
  todos = todosNew;

  // 다시 만들어진 todos를 통해 tableBody를 그려줌
  tableBodyRender();
}

// 버튼 클릭에 대한 이벤트 리스너
function onClick(event) {
  // event가 발생한 버튼의 id에 따라 아래와 같이 동작
  switch (event.target.id) {
    case "plus":
      // input값이 하나라도 비었을 경우 경고 메세지
      if (titleInput.value.length === 0) {
        modal.style.display = "flex";
        modal.querySelector(".message_modal").style.display = "flex";
        modal.querySelector(".message").innerText =
          "Error : Please Input Title";
      } else if (contentInput.value.length === 0) {
        modal.style.display = "flex";
        modal.querySelector(".message_modal").style.display = "flex";
        modal.querySelector(".message").innerText =
          "Error : Please Input Content";
      } else if (todos.length == 10) {
        // todos가 10개일 경우 경고 메세지 출력
        modal.style.display = "flex";
        modal.querySelector(".message_modal").style.display = "flex";
        modal.querySelector(".message").innerText =
          "Error : Can't add Todos Over 10";
      } else {
        var todo = {
          title: titleInput.value,
          content: contentInput.value,
          registerTime: registerTime(),
        };

        todos.push(todo);
        clearInput();
        tableBodyRender();
      }
      break;

    case "del":
      // todos 배열을 삭제
      todos.splice(0, todos.length);
      tableBodyRender();
      break;
  }
}

// 모달창을 닫는 메서드
function modalClick(event) {
  if (event.target.className === "modal" || event.target.id === "cancelBtn") {
    modal.style.display = "none";
    modal.querySelector(".message_modal").style.display = "none";

    alertMessage.innerText = "";
    editTitle.style.borderBottom = "2px solid var(--gray_main)";
    editContent.style.border = "2px solid var(--gray_main)";
  }
}

// 모달창의 Input이 제대로 들어있을 경우 css를 원래대로 바꾸는 메서드
function editChange(event) {
  if (event.target.id === "edit_title" && event.target.value.length !== 0) {
    alertMessage.innerText = "";
    editTitle.style.borderBottom = "2px solid var(--gray_main)";
  } else if (
    event.target.id === "edit_content" &&
    event.target.value.length !== 0
  ) {
    alertMessage.innerText = "";
    editContent.style.border = "2px solid var(--gray_main)";
  }
}

// 페이지에 접속할때 시작하는 메서드
function init() {
  tableBodyRender();

  // 각 버튼에 이벤트 리스너 연결
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", onClick);
  }

  // 모달창에 click 이벤트 리스너 연결
  document.querySelector(".modal").addEventListener("click", modalClick);

  editBtn.addEventListener("click", editTodo);
  cancelBtn.addEventListener("click", modalClick);

  editTitle.addEventListener("change", editChange);
  editContent.addEventListener("change", editChange);
}

window.onload = init();

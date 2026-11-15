let monthlyIncome = 0;
let expenses = [];

function setIncome() {
  monthlyIncome = Number(
    document.getElementById("incomeInput").value
  );

  if (monthlyIncome <= 0) {
    alert("Enter a valid income");
    return;
  }

  updateDashboard();
}

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = Number(
    document.getElementById("expenseAmount").value
  );
  const category = document.getElementById("category").value;

  if (!name || amount <= 0) {
    alert("Enter valid expense details");
    return;
  }

  expenses.push({ name, amount, category });

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";

  updateDashboard();
}

function updateDashboard() {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount, 0
  );

  document.getElementById("income").innerText =
    "₹" + monthlyIncome;

  document.getElementById("total").innerText =
    "₹" + total;

  document.getElementById("balance").innerText =
    "₹" + (monthlyIncome - total);

  document.getElementById("savingsTarget").innerText =
    "₹" + (monthlyIncome * 0.20);

  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach(expense => {
    const li = document.createElement("li");
    li.textContent =
      expense.name + " - ₹" + expense.amount +
      " (" + expense.category + ")";
    list.appendChild(li);
  });
}

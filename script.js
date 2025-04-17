const categories = [
    "Food", "Travel", "Shopping", "Savings", "Entertainment", 
    "Health", "Education", "Rent/Utilities", "Investments", "Miscellaneous"
];

// Create category dropdowns dynamically
document.getElementById("numCategories")?.addEventListener("input", function () {
    let num = parseInt(this.value);
    let container = document.getElementById("categorySelection");
    container.innerHTML = "";

    if (num > 0 && num <= 10) {
        for (let i = 0; i < num; i++) {
            let select = document.createElement("select");
            select.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join("");
            select.className = "categoryDropdown";
            container.appendChild(select);
            container.appendChild(document.createElement("br"));
        }
    }
});

// Save user budget and navigate to allocation page
function saveBudget() {
    let totalBudget = parseInt(document.getElementById("totalBudget").value);
    let categoryDropdowns = document.querySelectorAll(".categoryDropdown");

    if (isNaN(totalBudget) || totalBudget <= 0) {
        alert("Please enter a valid budget!");
        return;
    }

    let selectedCategories = Array.from(categoryDropdowns).map(dropdown => dropdown.value);
    localStorage.setItem("budget", totalBudget);
    localStorage.setItem("remainingBudget", totalBudget);
    localStorage.setItem("categories", JSON.stringify(selectedCategories));
    localStorage.setItem("allocations", JSON.stringify({})); // Reset allocations

    window.location.href = "budget.html";
}

// Load categories and create input fields dynamically
window.onload = function () {
    let budgetElement = document.getElementById("budget");
    let categoriesContainer = document.getElementById("categoriesContainer");

    if (budgetElement) {
        let budget = localStorage.getItem("remainingBudget");
        budgetElement.innerText = budget ? budget : 0;
        updateAllocationList(); // Ensure allocation list updates on load

        let selectedCategories = JSON.parse(localStorage.getItem("categories") || "[]");
        selectedCategories.forEach(category => {
            let div = document.createElement("div");
            div.innerHTML = `
                <label>${category}:</label>
                <input type="number" id="${category}" placeholder="Enter amount">
                <button onclick="allocateBudget('${category}', '${category}')">Allocate</button>
            `;
            categoriesContainer.appendChild(div);
        });
    }

    // Load chart if on chart page
    if (document.getElementById("budgetChart")) {
        createChart();
    }
};

// Navigate to chart page
function viewChart() {
    window.location.href = "chart.html";
}

// Reset budget and navigate to home page
function resetBudget() {
    localStorage.setItem("remainingBudget", localStorage.getItem("budget"));
    localStorage.setItem("allocations", JSON.stringify({}));

    window.location.href = "index.html";
}

// Allocate Budget
function allocateBudget(category, inputId) {
    let amount = parseInt(document.getElementById(inputId).value);
    let remainingBudget = parseInt(localStorage.getItem("remainingBudget"));
    let allocations = JSON.parse(localStorage.getItem("allocations")) || {};

    if (isNaN(amount) || amount <= 0 || amount > remainingBudget) {
        alert("Invalid amount!");
        return;
    }

    remainingBudget -= amount;
    allocations[category] = (allocations[category] || 0) + amount;

    localStorage.setItem("remainingBudget", remainingBudget);
    localStorage.setItem("allocations", JSON.stringify(allocations));

    document.getElementById("budget").innerText = remainingBudget;
    updateAllocationList();
}

// Update Allocation List
function updateAllocationList() {
    let list = document.getElementById("allocationList");
    if (!list) return;

    list.innerHTML = "";
    let allocations = JSON.parse(localStorage.getItem("allocations") || "{}");

    for (let category in allocations) {
        let listItem = document.createElement("li");
        listItem.textContent = `${category}: ₹${allocations[category]}`;
        list.appendChild(listItem);
    }
}

// Create Pie Chart
function createChart() {
    let ctx = document.getElementById("budgetChart").getContext("2d");

    let allocations = JSON.parse(localStorage.getItem("allocations") || "{}");
    let labels = Object.keys(allocations);
    let values = Object.values(allocations);

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"]
            }]
        }
    });
}

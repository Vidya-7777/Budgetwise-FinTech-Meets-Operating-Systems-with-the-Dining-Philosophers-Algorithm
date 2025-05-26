# Budgetwise: FinTech Meets Operating Systems with the Dining Philosophers Algorithm

This project shows the application of the Dining Philosophers algorithm from Operating Systems, solving its limitations through a creative real-world use case.  
It is a FinTech Budget Allocation App based on surveys of Gen-Z spending patterns and interests.  

**[Presentation Link](https://www.canva.com/design/DAGjfZuyihI/-s94p3p_25FhbSEf8QIgjQ/edit?utm_content=DAGjfZuyihI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**

---

## About the Project

This project demonstrates a practical application of the classic Dining Philosophers algorithm from Operating Systems in the domain of financial technology. We developed an interactive FinTech Budget Allocation App that models how multiple budget categories compete for a limited financial resource — the total budget — much like philosophers competing for chopsticks in the original problem.

Each category (e.g., Food, Travel, Shopping) represents a "philosopher," and the available budget is the shared resource. The core objective of the application is to ensure that budget allocation happens efficiently without deadlocks, resource conflicts, or starvation.

By integrating core OS synchronization principles, the app manages real-time budget requests while maintaining mutual exclusion and fairness. This project not only addresses the limitations of the original Dining Philosophers problem but also showcases how theoretical computing concepts can be translated into intuitive real-world financial tools.

---

## How It Works

**Categories = Philosophers**  
Each category behaves like a philosopher — it needs a slice of the budget (like picking up chopsticks to eat).

**Budget = Shared Resource (Chopsticks)**  
The app manages budget distribution so that no two categories access the same portion of the budget simultaneously.

### Allocation Logic (Inspired by Dining Philosophers Algorithm):

- **No Deadlock**: Before assigning funds, the system checks if the requested amount is available. If not, the request is denied — preventing any indefinite waiting.
- **Mutual Exclusion**: Only one allocation is processed at a time. This ensures safe updates to the remaining budget.
- **No Starvation**: Every category gets a fair chance to allocate funds, provided the budget isn’t exhausted.

---

## Tech Stack

- **HTML** – For the app structure  
- **CSS** – For styling and visuals  
- **JavaScript** – To implement logic, budget allocation, and deadlock prevention  

---

## Why This is Unique

Most budget planners just divide money into categories. But this app thinks like an Operating System.  
It doesn’t just allocate — it manages, prevents conflicts, and ensures fair access, just like OS algorithms manage system resources.

This project bridges theoretical OS concepts with real-world finance management in an interactive, visual, and relatable way.

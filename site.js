const API_URL = "http://127.0.0.1:8000";

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    menuToggle?.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        siteNav?.classList.toggle("is-open", !isOpen);
    });

    siteNav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle?.setAttribute("aria-expanded", "false");
            siteNav.classList.remove("is-open");
        });
    });

    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = String(new Date().getFullYear());
    });

    const apiStatus = document.getElementById("api-status");
    const transferForm = document.getElementById("transfer-form");

    if (apiStatus) {
        fetch(`${API_URL}/`)
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then((data) => {
                apiStatus.textContent = `Demo service connected: ${data.status}.`;
            })
            .catch((error) => {
                apiStatus.textContent = `Demo service unavailable (${error.message}). The preview needs the local API.`;
            });
    }

    transferForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const amount = Number(document.getElementById("amount").value);
        const destination = document.getElementById("destination").value;
        const result = document.getElementById("preview-result");

        if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
            result.hidden = false;
            result.textContent = "Enter a demo amount between R1 and R100,000.";
            return;
        }

        const submitButton = transferForm.querySelector("button[type='submit']");
        submitButton.disabled = true;
        submitButton.textContent = "Loading preview…";
        try {
            const response = await fetch(`${API_URL}/api/transfer-demo`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            result.textContent = `Demo only: R${amount.toFixed(2)} to ${destination}. ${data.message}`;
        } catch (error) {
            result.textContent = `Preview unavailable (${error.message}). Check that the Python API is running.`;
        } finally {
            result.hidden = false;
            submitButton.disabled = false;
            submitButton.innerHTML = 'Preview demo <span aria-hidden="true">→</span>';
        }
    });
});
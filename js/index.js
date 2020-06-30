const notificationIcon = document.getElementById("notifications-icon");
const notifications = document.getElementById("notifications");

notificationIcon.addEventListener("click", () => {
    notifications.classList.toggle("notification-pop-up-hidden");
});

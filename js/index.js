const notificationIcon = document.getElementById("notifications-icon");
const notifications = document.getElementById("notifications");
const sendEmailNotifications = document.getElementById("send-email-notifications");
const profileVisibility = document.getElementById("profile-visibility");
const timezone = document.getElementById("timezone");
const sendMessage = document.getElementById("message-send");
const searchUser = document.getElementById("searchUser");
const messageUser = document.getElementById("messageUser");
const searchUserError = document.getElementById("searchUser-error");
const messageUserError = document.getElementById("messageUser-error");
const messageSendConfirmation = document.getElementById("message-send-confirmation");

notificationIcon.addEventListener("click", () => {
    notifications.classList.toggle("notification-pop-up-hidden");
});

document.getElementById("settings-save").addEventListener("click", () => {
    localStorage.setItem("profileVisibility", profileVisibility.checked);
    localStorage.setItem("sendEmailNotifications", sendEmailNotifications.checked);
    localStorage.setItem("timezone", timezone.value);
});

document.getElementById("settings-cancel").addEventListener("click", () => {
  localStorage.setItem("profileVisibility", profileVisibility.checked = false);
  localStorage.setItem("sendEmailNotifications", sendEmailNotifications.checked = false);
  localStorage.setItem("timezone","timezone");
  loadSettings();
});

searchUser.addEventListener("keyup", () => {
    searchUserError.innerHTML = "";
})

messageUser.addEventListener("keyup", () => {
    messageUserError.innerHTML = "";
})

sendMessage.addEventListener("click", (e) => {
    e.preventDefault();
    let hasErrors = false;
    searchUserError.innerHTML = "";
    messageUserError.innerHTML = "";
    if(!searchUser.value) {
        searchUserError.innerHTML = "This has to have a value.";
        hasErrors = true;
    }

    if(!messageUser.value) {
        messageUserError.innerHTML = "This has to have a value.";
        hasErrors = true;
    }

    if(hasErrors == false) {
        messageSendConfirmation.innerHTML = "Message was sent to " + searchUser.value + "!";
        searchUser.value = "";
        messageUser.value = "";
        setTimeout(() => {
            messageSendConfirmation.innerHTML = "";
        }, 5000);
    }
});

function loadSettings() {
    profileVisibility.checked = (localStorage.getItem("profileVisibility") == "true");
    sendEmailNotifications.checked = (localStorage.getItem("sendEmailNotifications") == "true");
    timezone.value = localStorage.getItem("timezone") ? localStorage.getItem("timezone") : "timezone";
}

loadSettings();

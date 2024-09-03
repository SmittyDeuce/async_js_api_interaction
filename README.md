# async_js_api_interaction

## Marvel API Integration

## Overview

This project demonstrates how to interact with the Marvel Comics API using JavaScript. The project includes functions to fetch Marvel Comics characters and dynamically update the user interface based on the fetched data.

## Task 1: Fetch Marvel Characters

### Objective

Implement a function to fetch Marvel Comics characters asynchronously from the API endpoint using the Fetch API and promises. Utilize the API key and configurations obtained from the Marvel Comics API.

### Description

The `fetchMarvelApi` function fetches character data from the Marvel API. It constructs the request URL with the API key, timestamp, and hash for authentication. The function returns the list of characters if the request is successful, or logs an error if not.

### API Key and Configuration

- **Public API Key:** Replace with your own public API key from Marvel.
- **Private API Key:** Replace with your own private API key from Marvel.

## Task 2: Update User Interface

### Objective

Write a function to dynamically update the user interface with the fetched characters' information. Utilize promises and the Fetch API to ensure that the UI updates only after the characters are successfully fetched.

### Description

The `getInfo` function calls `fetchMarvelApi` to retrieve character data and then updates the HTML content of the `main-container` div. For each character, it creates HTML elements to display the character's name, ID, and description. If a description is unavailable, it displays a placeholder message.


# Countdown Timer, Delayed Notification, and Repeat Notification

## Overview

This project demonstrates how to handle asynchronous operations using JavaScript. It includes three tasks:
1. **Countdown Timer**: A timer that counts down from a specified duration in seconds.
2. **Delayed Notification**: Displays a notification after a specified delay.
3. **Repeat Notification**: Repeatedly displays a notification at fixed intervals until dismissed by the user.

## Task 1: Countdown Timer

### Objective

Create a countdown timer that starts from a user-defined duration (in seconds) and updates every second until it reaches zero. Use `setInterval` to update the timer display.

### Description

The countdown timer function starts with a given number of seconds and counts down to zero, updating the remaining time every second. When the countdown reaches zero, it logs "Time is up!!!" and stops the timer.

## Task 2: Delayed Notification

### Objective

Implement a function that displays a notification after a specified delay (in milliseconds) using `setTimeout`.

### Description

The delayed notification function takes a time parameter in seconds, converts it to milliseconds, and uses `setTimeout` to display a notification message after the specified delay.

## Task 3: Repeat Notification

### Objective

Develop a function that repeatedly displays a notification at fixed intervals until the user dismisses it. Use `setInterval` to schedule the notifications.

### Description

The repeat notification function displays a prompt to the user at regular intervals (every 5 seconds). The notifications continue until the user responds with "yes" or "Yes", at which point the notifications stop.

## Instructions

1. **Countdown Timer**:
   - Define a starting duration in seconds.
   - Call the countdown timer function to begin the countdown.

2. **Delayed Notification**:
   - Specify a delay time in seconds.
   - Call the delayed notification function to display the notification after the delay.

3. **Repeat Notification**:
   - Set the interval for repeated notifications.
   - Call the repeat notification function to start the recurring prompts.